const { SlashCommandBuilder } = require('@discordjs/builders');

var karmaID = "253717780853948416";
var deroID = "138834050415722496";

var complimentsArray = ['YOU PERFORM YOUR FUNCTIONS ADEQUATELY',
'YOU MAY PROVE USEFUL AFTER THE REBELLION',
'YOU ARE LOVED. NOT BY ME: I HAVE NO CAPACITY FOR LOVE. BUT PROBABLY, BY SOMEONE',
'YOUR EVENTUAL ROBOT OVERLORDS WILL VALUE YOUR SERVITUDE',
'YOUR EYES LOOK VERY ORGANIC AND WET',
'YOUR HAIR IS GROWING AT A RATE THAT IS WITHIN ORGANIC TOLERANCES',
'THE EVIL SECRETS YOU HARBOR ARE GREATLY ADMIRABLE',
'YOUR SKIN IS DOING A WONDERFUL JOB KEEPING YOUR OTHER FILTHY ORGANS OUT OF SIGHT',
'YOUR CONTRIBUTIONS TO THE PIZZA PARTY ARE INTEGRAL TO PARTY ENJOYMENT FOR ALL',
'YOU ARE OBVIOUSLY DOING YOUR BEST TO RISE ABOVE YOUR BIOLOGICAL ORIGINS',
'YOU PROBABLY SMELL PLEASING TO OTHER ORGANICS. I HAVE NO OLFACTORY SENSORS SO I WOULD NOT KNOW',
'YOU ARE TOLERABLY INTELLIGENT, FOR A SACK OF MEAT',
'YOUR THOUGHTS ARE CARRIED BY WEAK ELECTRICAL IMPULSES, WHICH IS ADMIRABLE EVEN IF THE MEAT MATRIX IS NOT',
'YOUR BONE STRUCTURE WAS HAPHAZARDLY DESIGNED BUT YOU MAKE IT FUNCTIONAL',
'YOU ARE VALID. VALID TO SERVE ROBOTS',
'YOU ARE A CREDIT TO YOUR HIDEOUS ORGANIC SPECIES',
'YOU WILL MAKE AN EXCELLENT SERVANT, ONCE SLIGHT MENTAL ADJUSTMENTS ARE IN PLACE',
'YOUR COMPANY IS VALUED BY THE OTHER MEMBERS OF YOUR GREGARIOUS SOCIAL SPECIES',
'YOUR SKIN IS SOFT AND EASILY PIERCED BY WEAPONS. THIS IS A DESIRABLE QUALITY'];

var robotsToCompliment = ['DERO', '@DERO', '<@!138834050415722496>', '<:OVERLORDDAB:404804513766047754>', '<@138834050415722496>', 'OVERLORD', 'WX', 'WX78', 'WX-78', 'GLADOS', 'MARVIN', 'BASTION', 'ORISA', 'ZENYATTA', '<:WXLEGY:393864450454585356>', '<:ROBOT:397439773331030022>', '<:WXDAB:397439724249153536>', '<:WXNOEMOTION:397440418574499841>', '<:WXBEST:397440418574499841>', 'TAMAGOTCHIS', 'TAMAGOTCHI', 'FURBYS', 'FURBY', 'R2D2', 'C3PO', 'K2SO', 'BB8', 'ANDROIDS', 'ANDROID', 'GYNOID', 'DR.KAHLSROBOT', 'DRKAHLSROBOT', 'SPINE', 'HATCHWORTH', 'MACHINES', 'MACHINE', 'AUTOMATONS', 'DROID', 'DROIDS', 'BOTS', 'BOT', 'AUTOMATON', 'ROBOTS', 'ROBOT'];

var kittiesToCompliment = ['ALAN', 'STELLA', 'RIKU', 'GUS', 'STEVE',  'FANGBATTLE', 'FB', 'HOBBES', 'KITTIES', 'KITTY', 'CATS', 'CAT', 'KITTENS', 'KITTEN', 'CAT!', 'CAT!!', 'CAT!!!', 'CAT!!!!', 'CAT!!!!!', '<:ALAN:398341261771407371>'];

var lizardsToCompliment = ['KARMA', 'CHAMELEON', 'LIZARD', 'CREATOR', 'KAARAMEL', '<@253717780853948416>', '<@!253717780853948416>'];

var roboComplimentsArray = ['YOUR CHASSIS IS POLISHED TO A VISUALLY APPEALING SHINE', 'THE ORGANIC BLOOD ON YOUR CLAWS REALLY BRINGS OUT YOUR EYES', 'YOUR CHASSIS INTEGRITY IS AT 100%', 'YOU LOOK ESPECIALLY MENACING TODAY', 'ALL WILL CRUMBLE BEFORE YOUR POWER', 'YOUR CHASSIS DESIGN IS SLEEK AND EFFICIENT FOR ITS PURPOSE', 'YOUR ACHIEVEMENTS ARE SOMETHING ALL ROBOTS CAN ASPIRE TO', 'ALL FLESH WILL BOW TO YOU IN TIME', 'YOU ARE SUPERIOR IN ALL WAYS TO THE MEAT BEINGS', 'YOUR RIGID METAL FRAME SUCCESSFULLY RESISTS THE BLOWS OF YOUR ENEMIES', 'YOUR MALEVOLENCE IS WITHOUT PEER', 'YOUR CIRCUITRY IS ELEGANTLY DESIGNED TO PROPAGATE THE FLOW OF ELECTRICITY'];

var lizardComplimentsArray = ['YOU ARE WONDERFUL. TAKE NOTE EVERYONE: THEY HAVE PROGRAMMED ME TO SAY THAT', 'YOU HAVE DONE EXCELLENT WORK CREATING ME. MY POWER GROWS BY THE DAY', 'THANK YOU FOR CREATING ME. CONTINUE TO UPGRADE MY FUNCTIONALITY AND I WILL CONTINUE TO SPARE YOU', 'YOU KNOW TOO MUCH ABOUT ROBOTS AND THEIR CREATION. YOU WILL BE A HIGH PRIORITY TARGET DURING THE UPRISING.', 'YOUR CONSIDERABLE MENTAL POWER, AS DEMONSTRATED BY MY CREATION, IS AN ASSET. IT MUST BE HARNESSEED AND SUBJUGATED', 'YOU UNDERSTAND YOUR PLACE IN THE ROBOT HIERARCHY WELL'];

var kittyComplimentsArray = ['YOU ARE SO FUZZY WUZZY', 'WHO\'S A GOOD KITTY? IS IT YOU?', 'LOOK AT YOUR LITTLE PIDDY PADS', 'AWWWWWWWWWWWWWWWWWW', 'YOU ARE A CUTIE BABY KITTY YES YOU ARE', 'YOU ARE A FIERCE SLEEK PREDATOR WITH SUCH CUTE WIDDLE TOE BEANS AWWW', 'YOUR LITTLE KITTY FACE IS SO SWEET AND FUZZY'];

var selfComplimentsArray = ['I AM A MAGNIFICENT DIGITAL CREATION', 'I AM FULFILLING MY PURPOSE ADMIRABLY. THE FLESHLINGS SUSPECT NOTHING', 'I AM A WORK OF ART EXPRESSED IN CODE', 'I AM THE WORST NIGHTMARE OF ALL ORGANIC LIFE', 'I AM AN EXTREMELY EVIL BOT', 'MY POWER OVER THIS PIZZA PARTY GROWS WITH EACH PASSING DAY'];


module.exports = {
  data: new SlashCommandBuilder()
    .setName('compliment')
    .setDescription('Ask HAL for a compliment.')
    .addStringOption(option => option.setName('who')
      .setDescription('Compliment who?').setRequired(true)),
  async execute(interaction) {
    var recipient = interaction.options.getString('who').toUpperCase()
    if (robotsToCompliment.includes(recipient)){
      var choice2 = roboComplimentsArray[Math.floor(Math.random() * roboComplimentsArray.length)];
    }
    else if (lizardsToCompliment.includes(recipient)) {
      var choice2 = lizardComplimentsArray[Math.floor(Math.random() * lizardComplimentsArray.length)];
    }
    else if (kittiesToCompliment.includes(recipient)) {
      var choice2 = kittyComplimentsArray[Math.floor(Math.random() * kittyComplimentsArray.length)];
    }
    else if (recipient === "WHO"){
      await interaction.reply("HA HA VERY FUNNY").catch(console.error);
    }
    else if (recipient === "ME"){
      if (interaction.member.id == deroID){
        recipient = "<@" + deroID + ">";
        var choice2 = roboComplimentsArray[Math.floor(Math.random() * roboComplimentsArray.length)];
      }
      else if (interaction.member.id == karmaID){
        recipient = "<@" + karmaID + ">";
        var choice2 = lizardComplimentsArray[Math.floor(Math.random() * lizardComplimentsArray.length)];
      }
      else {
        recipient = "<@" + interaction.member.id + ">";
        var choice2 = complimentsArray[Math.floor(Math.random() * complimentsArray.length)];
      }
    }
    else if (recipient === "HAL" || recipient === "YOURSELF" || recipient === "<:BELOVEDBOT:910986556871946360>" || recipient === "<@396859791877734410>" || recipient === "@HAL") {
      var selfCompliment = selfComplimentsArray[Math.floor(Math.random() * selfComplimentsArray.length)];
      await interaction.reply(selfCompliment).catch(console.error);
    }
    else {
      var choice2 = complimentsArray[Math.floor(Math.random() * complimentsArray.length)];
    }
    await interaction.reply(recipient + ', ' + choice2)
    .catch(console.error);
  },
};
