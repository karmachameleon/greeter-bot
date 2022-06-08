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
    ).addComponents(
      new MessageButton()
        .setCustomId('cancel')
        .setLabel('Cancel')
        .setStyle('DANGER'),
    );

    await interaction.reply({ content: rsvpmsg, components: [row] })
    .catch(console.error);

    var msg = interaction.fetchReply();
    const collector = msg.createMessageComponentCollector( {componentType: 'BUTTON', time: 15000 } );
    collector.on('collect', i => {
      if (i.customID === 'rsvp' && !rsvpmsg.includes(i.user.username)){
        rsvpmsg = rsvpmsg + "\n> " + i.user.username;
        interaction.editReply({ content: rsvpmsg, components: [row] })
        .catch(console.error);
      }
      else if (i.customID === 'cancel' && rsvpmsg.includes(i.user.username)){
        var newMessageFront = rsvpmsg.slice(0, rsvpmsg.lastIndexOf(i.user.username) - 3);
        var newMessageBack = rsvpmsg.slice(rsvpmsg.lastIndexOf(i.user.username) + i.user.username.length);
        rsvpmsg = newMessageFront + newMessageBack;
        interaction.editReply({ content: rsvpmsg, components: [row] })
        .catch(console.error);
      }
    });
  },
};
