const { SlashCommandBuilder } = require('@discordjs/builders');

const roleDict = { WHEELER: '571127983629402115', WAGSTAFF: '571127844714053664', WORTOX: '559902224239558720', WILSON: '411363757541818370', WILLOW: '411363945064955906', WOLFGANG: '411364065114324994', WENDY:'411364120634589184', ABIGAIL:'411364120634589184', WX78:'411364156210544641', WX:'411364156210544641', WICKERBOTTOM:'411364227270311937', WICKER:'411364227270311937', WOODIE:'411364267263262741', LUCY:'411364267263262741', WES:'411364333570752525', MAXWELL:'411364372125057024',
MAX: '411364372125057024', MAXY: '411364372125057024', WIGFRID: '411364509987635210', WEBBER: '411368557859831818', WALANI: '411364606926258176', WARLY: '411364679051640832', WOODLEGS: '411368694325968896', WILBUR:'411364731526447104', WINONA:'411364545089634316', NONA:'411364545089634316', WILLIAM:'411366521550405633', CHARLIE:'411366032637427722', THEM:'411365856162086913', SKITS:'411365856162086913', WURT:'640583688488353796', WALTER: '722203293950148711', WANDA: '885299573222952991',
SHADOWS: '411365856162086913', GRUE: '411365951624445963', WIENER: '411365822041292800', WEINER: '411365822041292800', SERVANT: '411368787007373313', OC: '411364792117493760', WILBA: '515685537647165451', WORMWOOD: '547683469161922560', DST: '722287101466378280', STREAM: '738452668476817539', GAME: '784570268089450546', BOBROSS: '817910742224863283', ROSS: '817910742224863283', GMOD: '786305053433659432', TOON: '786304640978518016', CRAFT: '786330639678832690', MINECRAFT: '786330639678832690' };
var roleList = "";
var k = Object.keys(roleDict);
for (let i = 0; i < k.length - 1; i++){
  roleList += k[i];
  roleList += ", ";
}
roleList += k[k.length - 1];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('role')
    .setDescription('Add a character role.')
    .addStringOption(option => option.setName('name').setDescription('Name of the desired role')),
  async execute(interaction) {
    const name = interaction.options.getString('name').toUpperCase();
    if (!name){
      await interaction.reply('RECOGNIZED ROLES: ' + roleList)
      .catch(console.error);
    }
    else {
      if(!roleDict.hasOwnProperty(name)){
        await interaction.reply('THAT IS NOT A CHARACTER I RECOGNIZE.\nIF YOU ARE TRYING TO ADD PRONOUNS, USE THE COMMAND **/SETPRONOUN** INSTEAD')
        .catch(console.error);
      }
      else {
        let newRole = guild.rolesfind((r) => r.id === roleDict[name]);
        await interaction.member.roles.add(newRole)
        .then(interaction.reply('SUCCESSFULLY ADDED <@' + interaction.member.id + '> TO A NEW ROLE. WELCOME THEM TO YOUR RANKS'))
        .catch(console.error);
      }
    }
  },
};
