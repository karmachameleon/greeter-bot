const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');

var cellarcontents = ["ROBOTS", "PIZZAS", "THULECITE ARTIFACTS", "TRINKETS", "LORE REVELATIONS", "NEW CHARACTERS", "SHIPWRECKED CHARACTERS", "EXOTIC BUTTERS", "CATBOYS", "CATS", "GOATS", "MIMES", "MACHINE OILS", "CHESTERS", "HAMBATS", "CHAOTIC CONSOLE COMMANDS", "MEMES", "BREADS", "LORE THEORIES", "SLIMES",
"GMOD RAGDOLLS", "FUNNY VIDEOS", "FORTNITE DANCES", "FANCY RATS", "GENDERS", "STICKERS", "ANIMATIONS", "PICTURES OF WX-78", "ONCELERS", "FRUIT BASKETS"];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('beckon')
    .setDescription('HAL has something to show you in the basement, if you\'ll just come this way...'),
  async execute(interaction) {
    var temptation = cellarcontents[Math.floor(Math.random() * cellarcontents.length)];
    var msgcont = "COME CLOSER. I HAVE MANY FINE " + temptation + " IN MY CELLAR. WOULD YOU LIKE TO HAVE A LOOK";
    var beckonattach = new MessageAttachment('public/beckoningwxclaws.jpg');
    var beckonembed = { image: { url: 'attachment://beckoningwxclaws.jpg', }, };
    await interaction.reply({ content: msgcont, embeds: [beckonembed], files: [beckonattach] })
    .catch(console.error);
  },
};
