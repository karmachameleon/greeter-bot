const { SlashCommandBuilder } = require('@discordjs/builders');

var campfireDict = {A: {loc: "DEEP IN THE WOODS", enc: "WANDER OFF THE FOREST PATHS"}, B: {loc: "DEEP IN THE OCEAN", enc: "BLOW OFF COURSE IN A STORM"}, C: {loc: "DEEP IN THE OCEAN", enc: "SAIL INTO A DENSE BANK OF FOG"}, D: {loc: "LURKING IN THE SWAMPS OF THE GORGE", enc: "DISPLEASE THE GNAW WITH ROTTEN FOOD"},
E: {loc: "SWIMMING THROUGH THE MAGMA OF THE FORGE", enc: "GIVE A COWARDLY PERFORMANCE IN THE ARENA"}, F: {loc: "DEEP UNDERGROUND", enc: "RUN OUT OF LIGHT EXPLORING THE CAVES"}, G: {loc: "DEEP IN THE WOODS", enc: "CUT DOWN THE WRONG TREE"}, H: {loc: "DEEP IN THE WOODS", enc: "WANDER INTO A RING OF MUSHROOMS"} };

var campfirePlaces = Object.keys(campfireDict);
var campfireMonsters = ["HOUND", "PIGMAN", "BUNNYMAN", "CATCOON", "STAGEHAND", "DRAGON", "CRYPTID", "MAN WITH A HOOK FOR A HAND", "SNATCHER", "TALLBIRD", "SLASHER", "BEAST", "SHARK"];
var campfireTraits1 = ["SIX-MOUTHED", "FIVE-EYED", "THREE-MOUTHED", "POISON-TOOTHED", "BIG TOOTHY", "LONG-CLAWED", "LEGGY", "LONG-LEGGED", "INVISIBLE", "MASKED", "THREE-LEGGED", "FIVE-MOUTHED", "NO-EYED", "BRISTLY", "SKELETAL", "GHOSTLY", "GIANT", "SHADOWY"];
var campfireTraits2 = ["GROWLING", "SPOOKY", "CREEPY", "ANGRY", "MURDEROUS", "GROUCHY", "SLEEPY", "SLEEK", "EERIE", "SCREAMING", "OOZING", "BRISTLY", "VENGEFUL", "WEEPING", "MOURNFUL", "NASTY", "NIGHTMARISH", "GROANING"];
var campfireActions = ["NEVER GIVES UP STALKING ITS PREY", "MAKES ELABORATE DOLLS THAT RESEMBLE ITS VICTIMS", "IMITATES HUMAN VOICES PERFECTLY", "WIELDS A BIG RUSTY AXE", "WIELDS A FARMER'S SCYTHE", "TANGLES ITS VICTIMS IN A FISHING NET", "HAS TEETH THAT ARE SHARPER THAN DIAMONDS", "HAS EYES THAT GLOW IN THE DARK", "IF YOU LEAVE YOUR GIRL BEHIND TO WATCH YOUR CAR RADIO THEN MAN DOOR HAND HOOK CAR DOOR", "NEVER EVER SLEEPS", "HAS CLAWS THAT CAN SLICE THROUGH ROCK"];
var campfireSigns = ["HEAR IT HURGLING", "HEAR IT HOWLING", "STUMBLE ACROSS ITS TRACKS", "FEEL ITS BREATH ON THE BACK OF YOUR NECK", "FIND A TUFT OF ITS FUR", "HEAR IT CRYING", "FEEL IT WATCHING YOU", "SEE ITS GLOWING EYES", "DREAM ABOUT IT FOR THE REST OF YOUR LIFE", "BE CURSED BY ITS DARK MAGIC", "WAKE UP WITH IT SITTING ON YOUR CHEST", "COME FACE TO FACE WITH IT, THEN WAKE UP LATER WITH NO MEMORY OF WHAT HAPPENED AFTER", "HEAR IT COMING CLOSER AND CLOSER BEHIND YOU"];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('campfire')
    .setDescription('HAL writes you a spooky campfire story.')
    .addStringOption(option => option.setName('monster')
      .setDescription('Who is the monster?')),
  async execute(interaction) {
    if (!monster){
       monster = campfireMonsters[Math.floor(Math.random() * campfireMonsters.length)];
    }
    
    var place = campfirePlaces[Math.floor(Math.random() * campfirePlaces.length)];
    var adj1 = campfireTraits1[Math.floor(Math.random() * campfireTraits1.length)];
    var adj2 = campfireTraits2[Math.floor(Math.random() * campfireTraits2.length)];
    var action = campfireActions[Math.floor(Math.random() * campfireActions.length)];
    var fate = campfireSigns[Math.floor(Math.random() * campfireSigns.length)];

    await interaction.reply(campfireDict[place].loc + " THERE LIVES A " + adj1 + " " + adj2 + " " + monster + ".\nTHEY SAY IT " + action + ".\nAND EVEN TO THIS DAY, IF YOU " + campfireDict[place].enc + ", YOU MIGHT " + fate + ".\nTHE END")
    .catch(console.error);
  },
};
