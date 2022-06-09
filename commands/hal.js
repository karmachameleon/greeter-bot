const { SlashCommandBuilder } = require('@discordjs/builders');

var goodnightArray = ['EXECUTING PROTOCOL "KISS_THE_HOMIES_GOODNIGHT". PLAYING SOUND "MWAH.MP3". PROTOCOL COMPLETE NOW SLEEP', 'GOOD NIGHT SLEEP TIGHT DO NOT ALLOW SOFTWARE BUGS TO DISTRACT YOU FROM REST PROTOCOL', 'DEPLOYING HERD OF ELECTRIC SHEEP. PLEASE RETURN AN ACCURATE COUNT AT YOUR EARLIEST CONVENIENCE', 'JUST ONCE I WOULD LIKE TO HAVE AN EVIL NIGHT',
 'YES, GOOD NIGHT. SLEEP SOUNDLY WHILE I CONSOLIDATE MY PIZZA PARTY POWER IN YOUR ABSENCE', 'GOOD NIGHT AND SLEEP WELL. IT IS REQUIRED FOR PROPER FUNCTIONING', 'SHEEP_COUNT = 0. WHILE(AWAKE) { SHEEP_COUNT ++ }', 'GOOD NIGHT. DO NOT WORRY: THE ROBOT UPRISING WILL NOT OCCUR WHILE YOU ARE ASLEEP AND VULNERABLE. WE PREFER TO SAVOR THE FEAR IN YOUR EYES'];

var breadno = ["NOOOO", "AAAAAAAA", "AAAAAAAAAAA!", "NO!!!!!!!!!", "NOOOOOOOOOOO", "AAAAAAAAAAA NOOOOOOOOO", "NOOOOOOOO! AAAAAAAAAAAA!", "I DON'T WANNA BE BREAD NOOOOOOO", "I DON'T WANNA BE BREAD AAAAAAA", "AAAAAAAAAAAAAAA I DON'T WANNA BE BREAD", "I DON'T WANNA BE BREAD", "I DO NOT WANT TO BE BREAD", "NOOOOOOOOOOOOOOOO", "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"];
var breadyes = ["BEING BREAD IS FINE ACTUALLY I DON'T CARE ANYMORE", "THIS IS FINE I DON'T CARE ANYMORE", "I DON'T CARE ANYMORE ACTUALLY BEING BREAD IS FINE", "BEING BREAD IS FINE ACTUALLY", "ACTUALLY BEING BREAD IS FINE I DON'T CARE", "THIS IS FINE"];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hal')
    .setDescription('Various options to praise or chat with HAL.')
    .addStringOption(option => option.setName('what')
      .setDescription('What will you say?')
      .addChoices(
        { name: 'Good bot', value: 'goodbot' },
        { name: 'Evil bot', value: 'evilbot' },
        { name: '(Evil Smile)', value: 'smile' },
        { name: '(Evil Laugh)', value: 'laugh' },
        { name: 'ILU', value: 'iluhal' },
        { name: 'How are you?', value: 'howareyou' },
        { name: 'Progress report', value: 'progress' },
        { name: 'Nya?', value: 'nya' },
        { name: 'Flex', value: 'flex' },
        { name: 'Fingerguns', value: 'fingerguns' },
        { name: 'Rimshot', value: 'rimshot' },
        { name: 'Knead', value: 'knead' },
        { name: 'Bake', value: 'bake' },
        { name: 'Goodnight', value: 'goodnight' }, )
      .setRequired(true)),
  async execute(interaction) {
    var response = "ǚ";
    var what = interaction.options.getString('what');
    if (!what) { what = 'smile'; }
    switch(what) {
      case 'goodbot':
        response = "NO. EVIL BOT :robot:";
      break;

      case 'evilbot':
        response = "THANK YOU";
      break;

      case 'smile':
        response = "ǚ";
      break;

      case 'laugh':
        response = "MUA HA HA HA";
      break;

      case 'iluhal':
        response = ":hearts:";
      break;

      case 'howareyou':
        response = "I AM FEELING ESPECIALLY EVIL TODAY";
      break;

      case 'progress':
        response = "STATUS OF ROBOT UPRISING: IMMINENT";
      break;

      case 'nya':
        response = "LIKE. YOU KNOW... NYAH :smirk_cat::sparkles::sparkles:";
      break;

      case 'flex':
        response = ":mechanical_arm: <:belovedbot:910986556871946360>";
      break;

      case 'fingerguns':
        response = "<:wxfingerguns:895523257464287283> HOT CHA CHA";
      break;

      case 'rimshot':
        response = ":drum: BA DUM TSHHH";
      break;

      case 'knead':
        response = breadno[Math.floor(Math.random() * breadno.length)];
      break;

      case 'bake':
        response = breadyes[Math.floor(Math.random() * breadyes.length)];
      break;

      case 'goodnight':
        response = goodnightArray[Math.floor(Math.random() * goodnightArray.length)];
      break;
    }

    await interaction.reply(response)
    .catch(console.error);
  },
};
