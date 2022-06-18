const { SlashCommandBuilder } = require('@discordjs/builders');

var deathArray = ['HOUND', 'DARKNESS', 'STARVATION', 'SPIDER', 'SHENANIGANS', 'TERRORBEAK', 'CRAWLING HORROR', 'BEARGER', 'DEERCLOPS', 'DRAGONFLY', 'SALADMANDER', 'FIRE', 'SHADOW BISHOP', 'SHADOW KNIGHT', 'SHADOW ROOK', 'CLOCKWORK KNIGHT', 'CLOCKWORK ROOK', 'CLOCKWORK BISHOP', 'KOALEFANT', 'TENTACLE', 'GUARD PIG', 'PIG MAN', 'MONSTER MEAT', 'FREEZING', 'PENGULL', 'KLAUS', 'BEE QUEEN', 'BOARILLA', 'RHINOCEBRO SNAPBACK', 'BOARILLA', 'SCORPEON ACID', 'SNORTOISE', 'CROCOMANDER', 'PIT PIG', 'RHINOCEBRO FLATBRIM', 'WIZARDYBUSINESS', 'KARMA', 'CAMEOAPPEARANCE', 'GOAT SLICE', 'EGGFRUIT', 'GRAND FORGE BOARRIOR', 'DARKNESS', 'HOUND', 'TERRORBEAK', 'CRAWLING HORROR', 'SPIDER', 'TENTACLE', 'INHUMANROBOT', 'DARKNESS', 'FROG', 'FREEZING'];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('die')
    .setDescription('Receive a random death message.'),
  async execute(interaction) {
    var chosendeath = deathArray[Math.floor(Math.random() * deathArray.length)];
    await interaction.reply("<@" + interaction.member.id + "> WAS KILLED BY " + chosendeath + ". THEY BECAME A SPOOKY GHOST!")
    .catch(console.error);
  },
};
