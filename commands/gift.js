const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');

var giftArray = ['A PILE OF GEARS', 'A SEWING KIT', 'A RED GEM', 'A BLUE GEM', 'A GREEN GEM', 'AN ORANGE GEM', 'A YELLOW GEM', 'A BEEFALO HAT', 'A WINTER HAT', 'RABBIT EARMUFFS', 'A PAIR OF MOGGLES', 'A PIECE OF FLINT', 'A MOONROCK', 'SPIDER SILK', 'NITRE', 'A COMPASS', 'A WALKING CANE', 'A PANFLUTE', 'A TAM O\' SHANTER', 'A CAT CAP'];
var lastGifted = 0;


module.exports = {
  data: new SlashCommandBuilder()
    .setName('gift')
    .setDescription('A Winter\'s Feast present just for you. Don\'t be greedy!'),
  async execute(interaction) {
    var recipient = interaction.member.id;
    var msgcont = "YOUR GIFT IS ";
    if (recipient == lastGifted) {
      msgcont += "A PIECE OF CHARCOAL.";
    }
    else {
      var prezzie = giftArray[Math.floor(Math.random() * giftArray.length)];
      var msgcont = msgcont + prezzie + ". HAPPY WINTER'S FEAST!";
    }
    lastGifted = recipient;
    await interaction.reply({ content: msgcont })
    .catch(console.error);
  },
};
