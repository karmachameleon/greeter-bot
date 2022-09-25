const { SlashCommandBuilder } = require('@discordjs/builders');

var killArray = ['WHEELER', 'WALTER', 'WOODIE', 'WILSON', 'WORTOX', 'MAXWELL', 'WORMWOOD', 'WX-78', 'WES', 'WARLY', 'WOODLEGS', 'WEBBER', 'WIGFRID', 'WAGSTAFF', 'WILLOW', 'WICKERBOTTOM', 'WOLFGANG', 'WALANI', 'WILBUR', 'WILBA', 'WINONA', 'KARMA', 'GOAT SLICE', 'INHUMANROBOT', 'WIZARDYBUSINESS', 'CAMEOAPPEARANCE', 'EGGFRUIT', 'WRAGONFLY', 'WOOSE', 'WEERCLOPS', 'WURT', 'WEARGER', 'WENDY'];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kill')
    .setDescription('Inflict a random death message.')
    .addStringOption(option => option.setName('who')
      .setDescription('Kill who?').setRequired(false)),
  async execute(interaction) {
    var chosenvictim = interaction.options.getString('who');
    if (!chosenvictim){
      chosenvictim = killArray[Math.floor(Math.random() * deathArray.length)];
    }
    await interaction.reply(chosenvictim + "WAS KILLED BY <@" + interaction.member.id + ">. THEY BECAME A SPOOKY GHOST!")
    .catch(console.error);
  },
};
