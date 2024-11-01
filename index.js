const fs = require('node:fs');
const { parse } = require('csv-parse/sync');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const { Sequelize, DataTypes } = require('sequelize');
const { data } = require('./commands/utility/ability');

// This is where things operate through, I think
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Experiment: anchoring database to client
client.sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'data/rules.sqlite'
});
client.database = client.sequelize.define(
	'rules',
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		rules: {
			type: DataTypes.TEXT,
			allowNull: false,
		}
	},
	{
		freezeTableName: true,
		timestamps: false,
	},
);
const file = fs.readFileSync('./data/abilities.csv');
const dataArray = parse(file, {
	delimiter: '#',
});
for (const line of dataArray) {
	const newAbility = client.database.create({
		name: line[0],
		rules: line[1],
	});
}

// Generates a list of commands based on the files found in the /commands directory
client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

// Keeps track of user cooldowns for each command
client.cooldowns = new Collection();
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

client.login(token);