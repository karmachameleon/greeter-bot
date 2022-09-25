const { SlashCommandBuilder } = require('@discordjs/builders');

var ficweathers = ["A RAINY DAY", "A SUNNY DAY", "RAINING FROGS", "A SNOWY DAY", "A STORMY DAY", "A DARK NIGHT", "A RAINY EVENING", "A QUIET EVENING"];
var ficplaces = ["IN THE CONSTANT", "IN THE FORGE", "IN THE GORGE", "IN THE SHIPWRECKED ARCHIPELAGO", "IN HAMLET", "ON THE LUNAR ISLAND"];
var ficactivities = ["CUTTING WOOD", "COOKING MEATBALLS", "PLANTING SEEDS", "FIGHTING SPIDERS", "SLEEPING", "DIGGING UP GRAVES", "DRAWING PICTURES", "WRITING THEIR LIFE STORY", "TRADING WITH PIGS", "TRAPPING BIRDS", "WASTING TIME", "EATING", "LOOKING FOR A LOST PET", "DREAMING OF THEIR HEART'S DESIRE", "TAKING A SWIM", "ARGUING WITH SOMEONE", "SNEAKING AROUND", "GOSSIPING WITH THEIR FRIENDS", "BUILDING A MACHINE", "RUNNING FOR THEIR LIFE"];
var ficevents = ["A CATCOON POUNCED ON THEIR HEAD", "THEY WERE BITTEN BY A MOSQUITO", "THE TEENBIRD THEY HAD BEEN RAISING BETRAYED THEM", "SOMETHING REMINDED THEM OF THEIR FAMILY", "THE ROBOT UPRISING BEGAN", "A VARG HOWLED IN THE DISTANCE", "NIGHT ABRUPTLY FELL AND LEFT THEM IN DARKNESS", "A GIANT ATTACKED", "THEY SAW SOMEONE WATCHING THEM FROM THE BUSHES", "A WHOLE BUNCH OF BIRDS FLEW OVERHEAD", "THEY FELL DOWN A WORMHOLE", "THEY SNEEZED EXPLOSIVELY",
"LIGHTNING STRUCK", "AN EARTHQUAKE STRUCK", "A HERD OF BUFFALO STAMPEDED PAST", "SOMEONE RAN PAST THEM SCREAMING", "A GROUP OF PIG SOLDIERS DEMANDED THEIR SURRENDER"];
var ficreactions = ["SCREAMED AND RAN AWAY", "CRIED", "RESOLVED TO FACE THIS CHALLENGE BRAVELY", "WISHED THEY HAD MORE TO EAT", "DIED", "WERE UNIMPRESSED", "DREAMED ABOUT IT FOR SEVERAL DAYS AFTERWARD", "COLLAPSED INTO A HEAP", "WISHED THEY WERE SOMEWHERE ELSE", "LAUGHED"];

var promptchars = ['A PIGMAN', 'A MERM', 'A CATCOON', 'A HOUND', 'A BUNNYMAN', 'A STAGEHAND', 'WORTOX', 'WHEELER', 'WAGSTAFF', 'WILBA', 'WORMWOOD', 'WILSON', 'WILLOW', 'WOLFGANG', 'WENDY', 'ABIGAIL', 'WX-78', 'WICKERBOTTOM', 'WOODIE', 'LUCY THE AXE', 'MAXWELL', 'WILLIAM CARTER', 'WES', 'WIGFRID', 'BERNIE THE TEDDY BEAR',
'WEBBER', 'WALANI', 'WARLY', 'WOODLEGS', 'WILBUR', 'WALTER', 'WOBY', 'CHARLIE', 'WINONA', 'CHESTER', 'HUTCH', 'PACKIM BAGGINS', 'MR. SKITS',  'GLOMMER', 'PUGNA', 'BILLY', 'MUMSY', 'PIPTON', 'SAMMY' ];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('fanfic')
    .setDescription('HAL writes you a short story.')
    .addStringOption(option => option.setName('protagonist')
      .setDescription('Who is the story about?')),
  async execute(interaction) {
    if (!protagonist){
       protagonist = promptchars[Math.floor(Math.random() * promptchars.length)];
    }
    var promptweather = ficweathers[Math.floor(Math.random() * ficweathers.length)];
    var promptplace = ficplaces[Math.floor(Math.random() * ficplaces.length)];
    var promptactivity = ficactivities[Math.floor(Math.random() * ficactivities.length)];
    var promptevent = ficevents[Math.floor(Math.random() * ficevents.length)];
    var promptreaction = ficreactions[Math.floor(Math.random() * ficreactions.length)];
    await interaction.reply("IT WAS " + promptweather + " " + promptplace + ".\n" + protagonist + " WAS " + promptactivity + ", WHEN " + promptevent + ".\nTHEY " + promptreaction + ".\nTHE END")
    .catch(console.error);
  },
};
