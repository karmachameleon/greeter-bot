const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('birthday')
    .setDescription('Send a special birthday message.')
    .addStringOption(option => option.setName('recipient').setDescription('The name of our beloved birthday pal.').setRequired(true)),
  async execute(interaction) {
    var name = interaction.options.getString('recipient');
    await interaction.reply('HAPPY BIRTHDAY, PIZZA PARTIER! :birthday: :rat: :notes: CLICK HERE FOR A SPECIAL MESSAGE: https://itsyourbirthday.today/#' + name)
    .catch(console.error);
  },
};
