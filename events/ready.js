const Discord = require('discord.js');

module.exports = {
	name: Discord.Events.ClientReady,
	once: true,
	execute(client) {
		client.database.sync();
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};