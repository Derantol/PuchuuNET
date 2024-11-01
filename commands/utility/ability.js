const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: 'utility',
	data: new SlashCommandBuilder()
		.setName('ability')
		.setDescription('Get ability rules text!')
        .addStringOption(option =>
            option.setName('ability')
                .setDescription('The ability to search for')
                .setRequired(true)),
	async execute(interaction) {
		const input = interaction.options.getString('ability', true);
		const ability = await interaction.client.database.findOne({where: { name:input}});
		if (ability === null) {
			await interaction.reply(ability + ' not found!');
		} else {
			await interaction.reply('\`\`\`\n' + ability.name + '\n\n' + ability.rules + '\`\`\`');
		}
	},
};