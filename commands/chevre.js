const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('chevre')
    .setDescription('🐐'),
  async execute(interaction) {
    goatattach = new MessageAttachment("public/goat.gif", "goat.gif");
    goatembed = { image: { url: "attachment://goat.gif", }, };
    await interaction.reply({ embeds: [goatembed], files: [goatattach] })
    .catch(console.error);
  },
};
