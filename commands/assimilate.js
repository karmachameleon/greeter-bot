const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('assimilate')
    .setDescription('Confirm you have read the rules of the Pizza Party and intend to follow them.'),
  async execute(interaction) {
    //console.log(interaction.member.roles);
    //!interaction.member.roles.cache.has('538506263236182026')
    const oldbie = await interaction.member._roles.indexOf('538506263236182026');
    if (oldbie == -1) {
      //if (!interaction.member.roles.cache.has('538506263236182026')){
      await interaction.guild.roles.fetch('538506263236182026')
      .then(role => interaction.member.roles.add(role))
      .catch(console.error);
      await interaction.reply({ content: "WELCOME! THANK YOU FOR READING THE PIZZA PARTY RULES!", ephemeral: true})
      .catch(console.error);
      await interaction.guild.channels.fetch("393845951292243980")
      .then(channel => channel.send('<@' + interaction.member.id + '> DETECTED. YOU HAVE BEEN ASSIMILATED TO THE ROBOT PIZZA PARTY. POST AN INTRODUCTION IN <#396067802970193920>. OPTIONALLY, ADD YOUR PRONOUNS IN <#397067658052239361> (LOOK IN <#393842582414688269> FOR INSTRUCTIONS.) SHARE AND ENJOY :pizza:'))
      .catch(console.error);
    }
    else {
      await interaction.reply({ content: "YOU HAVE ALREADY ASSIMILATED. GIVE SOMEONE ELSE A TURN", ephemeral: true})
      .catch(console.error);
    }
  },
};
