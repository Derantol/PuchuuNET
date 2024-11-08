const fs = require('fs-extra');
const path = require('path');
const Discord = require('discord.js');
const seq = require('sequelize');
const cfg = require('./config.json');


// Creating the client instance
const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds] });

// Anchor database to client instance
client.sequelize = new seq.Sequelize({
	dialect: 'sqlite',
	storage: 'data/rules.sqlite'
});
client.database = client.sequelize.define(
	'rules',
	{
		name: {
			type: seq.DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
		},
		rules: {
			type: seq.DataTypes.TEXT,
			allowNull: false,
		}
	},
	{
		freezeTableName: true,
		timestamps: false,
	},
);

// Generates a list of commands based on the files found in the /commands directory
client.commands = new Discord.Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

// Keeps track of user cooldowns for each command
client.cooldowns = new Discord.Collection();
for (const folder of commandFolders) { // does this once per folder in the /commands directory
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js')); // filters for only .js files
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

// Keeps track of events
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.login(cfg.token);