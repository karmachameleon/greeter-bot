const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('dero')
    .setDescription('💥'),
  async execute(interaction) {
    deroattach = new MessageAttachment("public/dabsplosion-L.gif", "dabsplosion-L.gif");
    deroembed = { image: { url: "attachment://dabsplosion-L.gif", }, };
    await interaction.reply({ embeds: [deroembed], files: [deroattach] })
    .catch(console.error);
  },
};
