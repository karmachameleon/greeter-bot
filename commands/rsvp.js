const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rsvp')
    .setDescription('Lists the partiers who agree to attend an event.')
    .addStringOption(option => option.setName('party').setDescription('Event name?')),
  async execute(interaction) {
    var occ = interaction.options.getString('party');
    var rsvpmsg = "WHO WILL ATTEND THIS MOMENTOUS OCCASION? PRESS THE PIZZA BUTTON TO SEAL YOUR FATE";
    if (occ) {
      rsvpmsg =  "PIZZA DENIZENS, YOU ARE CORDIALLY INVITED TO **" + occ.toUpperCase() + "**. " + rsvpmsg;
    }

    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId('rsvp')
        .setLabel('🍕')
        .setStyle('SUCCESS'),
    );

    await interaction.reply({ content: rsvpmsg, components: [row] })
    .catch(console.error);


  },
};
