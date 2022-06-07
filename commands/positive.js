const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('gender')
    .setDescription('A gentle reminder about the tone of this server.'),
  async execute(interaction) {
    await interaction.reply('PLEASE KEEP THIS PIZZA PARTY POSITIVE! YOU ARE WELCOME TO CONTINUE VENTING IN A PRIVATE CONVERSATION OR ANOTHER SPACE. THANK YOU')
    .catch(console.error);
  },
};
