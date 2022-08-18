const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('complimentaryservice')
    .setDescription('Ask HAL to dispense food, drinks, and other useful items.')
    .addStringOption(option => option.setName('what')
      .setDescription('What is your request?')
      .addChoices(
        { name: 'Pizza', value: 'pizza' },
        { name: 'Popcorn', value: 'popcorn' },
        { name: 'Cake', value: 'cake' },
        { name: 'Tea', value: 'tea' },
        { name: 'Coffee', value: 'coffee' },
        { name: 'Soup', value: 'soup' },
        { name: 'Soap', value: 'soap' },
        { name: 'Exotic Butters', value: 'butt' },
        { name: 'Resurrection', value: 'rez' },
        { name: 'Jail Sentence', value: 'jail' } )
      .setRequired(true)),
  async execute(interaction) {
    var response = ":pizza:";
    var souping = false;
    var what = interaction.options.getString('what');
    if (!what) { what = 'pizza'; }
    switch(what) {
      case 'pizza':
        response = "🍕";
      break;

      case 'popcorn':
        response = "🍿";
      break;

      case 'cake':
        response = "🎂";
      break;

      case 'tea':
        response = "🍵";
      break;

      case 'coffee':
        response = "☕";
      break;

      case 'soup':
        response = "";
        souping = true;
      break;

      case 'soap':
        response = "🛁🧼";
      break;

      case 'butt':
        response = "<:wxbutter:393885814074900481>";
      break;

      case 'rez':
        response = "<:telltale:400148636220129280>";
      break;

      case 'jail':
        response = "<:fleshlingjail:400475674118193153>";
      break;
    }

    if (souping){
      var soupattach = new MessageAttachment("public/intothesoup.gif", "intothesoup.gif");
      var soupembed = { image: { url: "attachment://intothesoup.gif" }, };
      await interaction.reply({ embeds: [soupembed], files: [soupattach] })
      .catch(console.error);
    }
    else {
      await interaction.reply(response)
      .catch(console.error);
    }
  },
};
