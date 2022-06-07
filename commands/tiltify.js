const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('tiltify')
    .setDescription('A link to the Tiltify fundraising campaign in progress.'),
  async execute(interaction) {
    await interaction.reply('https://tiltify.com/+robot-pizza-party/robot-pizza-progress')
    .catch(console.error);
  },
};
