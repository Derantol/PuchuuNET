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
		const inputLowerCase = input.toLowerCase();
		const seq = interaction.client.sequelize;
		const ability = await interaction.client.database.findOne({
			where: {
				name: seq.where(seq.fn('LOWER', seq.col('name')), 'LIKE', '%' + inputLowerCase + '%')
			}
		});
		if (ability === null) {
			await interaction.reply('Search input: ' + input + '\nAbility not found!');
		} else {
			await interaction.reply('\`\`\`\nSearch input: ' + input + '\`\`\`\n\`\`\`\n' + ability.name + '\n\n' + ability.rules + '\`\`\`');
		}
	},
};