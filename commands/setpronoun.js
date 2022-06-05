const { SlashCommandBuilder } = require('@discordjs/builders');

const nounDict = { SHE: {id:'515983960606507024', subject:'SHE', obj:'HER', deter:'HER', possess:'HERS', reflex:'HERSELF', have:'HAS'}, HE: {id:'515983432975908907', subject:'HE', obj:'HIM', deter:'HIS', possess:'HIS', reflex:'HIMSELF', have:'HAS'}, THEY: {id:'515983966667276360', subject:'THEY', obj:'THEM', deter:'THEIR', possess:'THEIRS', reflex:'THEMSELF', have:'HAVE'},
FAE: {id:'515983996681977869', subject:'FAE', obj:'FAER', deter:'FAER', possess:'FAERS', reflex:'FAERSELF', have:'HAS'}, VOI: {id:'515983996010627099', subject:'VOI', deter:'VOIDS', obj:'VOID', possess:'VOIDS', reflex:'VOIDSELF', have:'HAS'}, E:{id:'515984166370803758', subject:'E', obj:'EM', deter:'EIR', possess:'EIRS', reflex:'EMSELF', have:'HAS'},
ANY: {id:'515983985617403904', subject:'HE', obj:'THEM', deter:'HER', possess:'HERS', reflex:'THEMSELF', have:'HAS'},  IT: {id: '841873378964668427', subject:'IT', obj:'IT', deter:'ITS', possess:'ITS', reflex:'ITSELF', have:'HAS'}};

var roleList = "";
var k = Object.keys(nounDict);
for (let i = 0; i < k.length - 1; i++){
  roleList += k[i];
  roleList += ", ";
}
roleList += k[k.length - 1];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setpronoun')
    .setDescription('Add a pronoun role.')
    .addStringOption(option => option.setName('name').setDescription('Object form of the desired pronoun set (for example he, she, they), or "any".')),
  async execute(interaction) {
    const name = interaction.options.getString('name').toUpperCase();
    if (!name){
      await interaction.reply('**RECOGNIZED PRONOUN ROLES:**\n ' + roleList)
      .catch(console.error);
    }
    else {
      if(!nounDict.hasOwnProperty(name)){
        await interaction.reply('I DO NOT RECOGNIZE THAT PRONOUN. PLEASE USE THE SUBJECT FORM OF YOUR CHOSEN PRONOUN (FOR EXAMPLE SHE, HE, THEY); IF YOUR PRONOUNS ARE NOT AVAILABLE, PING KARMA OR ANOTHER MOD TO PETITION FOR INCLUSION')
        .catch(console.error);
      }
      else {
        var set = nounDict[name];
        await interaction.guild.roles.fetch(set.id)
        .then (role => interaction.member.roles.add(role))
        .then (interaction.reply('SUCCESSFULLY IDENTIFIED <@' + interaction.member.id + '>. ' + set.subject + ' ' + set.have + ' IDENTIFIED ' + set.reflex + ' TO MY SYSTEMS AND ' + set.deter + ' CHOICE, WHICH IS ' + set.possess + ', WILL BE RESPECTED. YOU MAY CONGRATULATE ' + set.obj + ' AT YOUR LEISURE'))
        .catch(console.error);
      }
    }
  },
};
