const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('gender')
    .setDescription('A reminder to respect WX-78\'s pronouns.'),
  async execute(interaction) {
    await interaction.reply('PLEASE RESPECT THE CANON USE OF THEY/THEM PRONOUNS FOR MX. WX-78! THANK YOU')
    .catch(console.error);
  },
};
