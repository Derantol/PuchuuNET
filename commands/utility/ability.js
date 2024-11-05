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
		const a1 = await interaction.client.database.findByPk(input);
		if (a1) {
			await interaction.reply('\`\`\`\nSearch input: ' + input + '\`\`\`\n\`\`\`\n' + a1.name + '\n\n' + a1.rules + '\`\`\`');
		} else {
			await interaction.reply('Search input: ' + input + '\nAbility not found!'); // stand in until search function is complete
			/*const seq = interaction.client.sequelize;
			const inputLowerCase = input.toLowerCase();
			const a2 = await interaction.client.database.findAll({
				where: {
					name: seq.where(seq.fn('LOWER', seq.col('name')), 'LIKE', '%' + inputLowerCase + '%')
				}
			});*/
			// TODO: construct string to send back that offers the things they might have meant to search for
		}
	},
};