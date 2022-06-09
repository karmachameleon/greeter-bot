const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('karma')
    .setDescription('🦎'),
  async execute(interaction) {
    //karmattach = new MessageAttachment("public/laser.gif", "laser.gif");
    karmembed = {
      "title": `Karma Chameleon`,
      "description": "",
      "color": 0x33cc99,
      "fields": [
        {
          "name": `gallery`,
          "value": `https://candiedreptile.club/`,
          "inline": true
        },
        {
          "name": `bloglet`,
          "value": `https://candiedreptile.club/bloglet/`,
          "inline": true
        },
        {
          "name": `forum`,
          "value": `https://lounge.candiedreptile.club/`,
          "inline": true
        }
      ],
      "image": {
        "url": `https://lounge.candiedreptile.club/images/facebook_og_image.jpg`,
        "height": 0,
        "width": 0
      },
      "thumbnail": {
        "url": `https://candiedreptile.club/bloglet/images/banners/100x100_static.png`,
        "height": 0,
        "width": 0
      }
    }
    await interaction.reply({ embeds: [karmembed] })
    .catch(console.error);
  },
};
