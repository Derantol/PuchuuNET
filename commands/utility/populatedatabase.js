const fs = require('fs-extra');
const Discord = require('discord.js');
const csvp = require('csv-parse/sync');

module.exports = {
	category: 'utility',
	data: new Discord.SlashCommandBuilder()
		.setName('populatedatabase')
		.setDescription('Populate the Database'),
	async execute(interaction) {
		const file = fs.readFileSync('./data/abilities.csv');
		const dataArray = csvp.parse(file, {
			delimiter: '#',
		});
		for (const line of dataArray) {
			const newAbility = interaction.client.database.create({
				name: line[0],
				rules: line[1],
			});
		}
        await interaction.reply('Database refreshed!');
	},
};

