const { SlashCommandBuilder } = require('@discordjs/builders');

var fortniteDict = { PEARL: {path:"public/hermitcrab_tango.gif", name:"hermitcrab_tango.gif"},
BUTTERCRAB: {path:"public/wxbutteredcrab.gif", name:"wxbutteredcrab.gif"},
ABIGAIL: {path:"public/abigail_dance.gif", name:"abigail_dance.gif"},
WEARGER: {path:"public/wearger_defaultdance.gif", name:"wearger_defaultdance.gif"},
WRAGONFLY : {path:"public/wfly_defaultdance.gif", name:"wfly_defaultdance.gif"},
WOOSE : {path:"public/woosegoose_defaultdance.gif", name:"woosegoose_defaultdance.gif"},
WEERCLOPS : {path:"public/weerclops_defaultdance.gif", name:"weerclops_defaultdance.gif"},
WURT : {path:"public/wurt_flortnite.gif", name:"wurt_flortnite.gif"},
WEREGOOSE : {path:"public/weregoose_defaultdance.gif", name:"weregoose_defaultdance.gif"},
WILLIAM : {path:"public/babycarter_defaultdance.gif", name:"babycarter_defaultdance.gif"},
BUTTER : {path:"public/wxbutterwxbutterwxbutter_defaultdance.gif", name:"wxbutterwxbutterwxbutter_defaultdance.gif"},
HAL : {path:"public/hal_defaultdance.png", name:"hal_defaultdance.png"},
WENDY : {path:"public/wendy_defaultdance.gif", name:"wendy_defaultdance.gif"},
WIGFRID : {path:"public/wigfrid_defaultdance.gif", name:"wigfrid_defaultdance.gif"},
WAGSTAFF : {path:"public/wagstaff_defaultdance.gif", name:"wagstaff_defaultdance.gif"},
WILLOW : {path:"public/willow_defaultdance.gif", name:"willow_defaultdance.gif"},
WICKERBOTTOM : {path:"public/wickerbottom_defaultdance.gif", name:"wickerbottom_defaultdance.gif"},
WOLFGANG : {path:"public/thickwolfgang_defaultdance.gif", name:"thickwolfgang_defaultdance.gif"},
WALANI : {path:"public/walani_defaultdance.gif", name:"walani_defaultdance.gif"},
WILBUR : {path:"public/wilbur_defaultdance.gif", name:"wilbur_defaultdance.gif"},
WILBA : {path:"public/wilba_defaultdance.gif", name:"wilba_defaultdance.gif"},
WINONA : {path:"public/winona_defaultdance.gif", name:"winona_defaultdance.gif"},
WOODIE : {path:"public/woodie.gif", name:"woodie.gif"},
TRIWILSON : {path:"public/shadow_wilson_dance.gif", name:"shadow_wilson_dance.gif"},
BILLY : {path:"public/goatdance.gif", name:"goatdance.gif"},
WORTOX : {path:"public/wortox_defaultdance.gif", name:"wortox_defaultdance.gif"},
WEREBEAVER : {path:"public/werebeaver_dance.gif", name:"werebeaver_dance.gif"},
MAXWELL : {path:"public/maxwell_defaultdance.gif", name:"maxwell_defaultdance.gif"},
WORMWOOD : {path:"public/bloominwormwood.gif", name:"bloominwormwood.gif"},
WX : {path:"public/fortnite.gif", name:"fortnite.gif"},
WES : {path:"public/wes.gif", name:"wes.gif"},
WARLY : {path:"public/warly.gif", name:"warly.gif"},
WILSON : {path:"public/wilson.gif", name:"wilson.gif"},
WOODLEGS : {path:"public/woodlegs_defaultdance.gif", name:"woodlegs_defaultdance.gif"},
WEBBER : {path:"public/webber_defaultdance.gif", name:"webber_defaultdance.gif"},
WHEELER : {path:"public/wheeler_defaultdance.gif", name:"wheeler_defaultdance.gif"},
WALTER : {path:"public/walter_scoutnite.gif", name:"walter_scoutnite.gif"},
WEREMOOSE : {path:"public/weremoose_dance.gif", name:"weremoose_dance.gif"},
OOTWALANI : {path:"public/walani_outoftouch.gif", name:"walani_outoftouch.gif"},
OOTWARLY : {path:"public/warly_outoftouch.gif", name:"warly_outoftouch.gif"},
OOTWEBBER : {path:"public/webber_outoftouch.gif", name:"webber_outoftouch.gif"},
OOTWHEELER : {path:"public/wheeler_outoftouch.gif", name:"wheeler_outoftouch.gif"},
OOTWILSON : {path:"public/wilson_outoftouch.gif", name:"wilson_outoftouch.gif"},
OOTWOOSE : {path:"public/woose_outoftouch.gif", name:"woose_outoftouch.gif"},
OOTWX : {path:"public/wx_outofbutter.gif", name:"wx_outofbutter.gif"},
ENGINEER : {path:"public/engi_kazotsky.gif", name:"engi_kazotsky.gif"},
WANDA : {path:"public/wandanite_defaultdance.gif", name:"wandanite_defaultdance.gif"}
};
//var fortnitegifs = Object.keys(fortnitedict);

module.exports = {
  data: new SlashCommandBuilder()
    .setName('fortnite')
    .setDescription('Deploys a funny Fortnite dance gif.')
    .addStringOption(option => option.setName('name').setDescription('Character or special dance name.')),
  async execute(interaction) {
    var name = interaction.options.getString('name');
    var fortchoice = fortniteDict[Math.floor(Math.random() * fortnitegifs.length)];
    var fortattach = new MessageAttachment(fortchoice.path, fortchoice.name);
    if (!name){
      await interaction.reply({ attachment: fortattach })
      .catch(console.error);
    }
    else {
      name = name.toUpperCase();
      if (!fortniteDict.hasOwnProperty(name)){
        await interaction.reply({ attachment: fortattach })
        .catch(console.error);
      }
      else {
        fortchoice = fortniteDict[name];
        fortattach = new MessageAttachment(fortchoice.path, fortchoice.name);
        await interaction.reply({ attachment: fortattach })
        .catch(console.error);
      }
    }
  },
};

/*
  if (msg.content.split(' ').length > 1) {
    var fortchoice = msg.content.split(' ')[1].toUpperCase();
    if(!fortnitedict.hasOwnProperty(fortchoice)){
      fortchoice = fortnitegifs[Math.floor(Math.random() * fortnitegifs.length)];
    }
  }
  else{
    var fortchoice = fortnitegifs[Math.floor(Math.random() * fortnitegifs.length)];
  }
  chan.send({ files: [{attachment: fortnitedict[fortchoice].path, name: fortnitedict[fortchoice].name }] }).catch(console.error);*/
