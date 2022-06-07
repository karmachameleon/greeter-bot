const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('karma')
    .setDescription('🦎'),
  async execute(interaction) {
    karmattach = new MessageAttachment("public/laser.gif", "laser.gif");
    karmembed = { image: { url: "attachment://laser.gif", }, };
    await interaction.reply({ embeds: [karmembed], files: [karmattach] })
    .catch(console.error);
  },
};
