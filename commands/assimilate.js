const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('assimilate')
    .setDescription('Use this command to confirm you have read the rules of the Pizza Party and intend to abide by them.'),
  async execute(interaction) {
    let newvictim = interaction.member;
    let chan = bot.channels.cache.get("393845951292243980");
    let memberRole = interaction.guild.roles.fetch('538506263236182026');
    if (!newvictim.roles.cache.has(memberRole)){
      await newvictim.roles.add(memberRole)
      .then(channel.send('<@' + newvictim.id + '> DETECTED. YOU HAVE BEEN ASSIMILATED TO THE ROBOT PIZZA PARTY. POST AN INTRODUCTION IN <#396067802970193920>. OPTIONALLY, ADD YOUR PRONOUNS IN <#397067658052239361> (LOOK IN <#393842582414688269> FOR INSTRUCTIONS.) SHARE AND ENJOY :pizza:'))
      .catch(console.error);
    }
    else {
      return;
    }
  },
};