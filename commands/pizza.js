const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports {
  data: new SlashCommandBuilder()
    .setName('pizza')
    .setDescription('Serves you a delicious slice of pizza.'),
  async execute(interaction) {
    await interaction.reply(':pizza:');
  },
};
