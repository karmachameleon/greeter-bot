const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('roll')
    .setDescription('Roll a 20-sided die.'),
  async execute(interaction) {
    var diceroll = Math.floor(Math.random() * 20) + 1;
    var diceresult = 'YOU HAVE ROLLED ' + diceroll.toString() + '. ';
    if (diceroll == 1) { diceresult += 'AN ABJECT FAILURE. WHAT A SHAME'; }
    else if (diceroll < 5) { diceresult += 'YOU HAVE ROLLED POORLY. BETTER LUCK NEXT TIME'; }
    else if (diceroll <= 9) { diceresult += 'A MEDIOCRE ROLL. PERHAPS IT WILL SUCCEED ON AN EASY TASK, LIKE WHAT AN ORGANIC BABY COULD DO'; }
    else if (diceroll == 10) { diceresult += 'A COMPLETELY AVERAGE ROLL. ABOUT WHAT I EXPECTED'; }
    else if (diceroll <= 15) { diceresult += 'A DECENT ROLL. NOT BAD, BUT I EXPECT BETTER FROM YOU'; }
    else if (diceroll <= 19) { diceresult += 'HEY, THAT ROLL WAS ACTUALLY PRETTY GOOD'; }
    else { diceresult += 'A CRITICAL SUCCESS! REMARKABLE'; }
    await interaction.reply(diceresult)
    .catch(console.error);
  },
};
