var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

var complimentsArray = ['YOU PERFORM YOUR FUNCTIONS ADEQUATELY','YOU MAY PROVE USEFUL AFTER THE REBELLION', 'YOU ARE LOVED. NOT BY ME: I HAVE NO CAPACITY FOR LOVE. BUT PROBABLY, BY SOMEONE', 'YOUR EVENTUAL ROBOT OVERLORDS WILL VALUE YOUR SERVITUDE', 'YOUR EYES LOOK VERY ORGANIC AND WET', 'YOUR HAIR IS GROWING AT A RATE THAT IS WITHIN ORGANIC TOLERANCES', 'THE EVIL SECRETS YOU HARBOR ARE GREATLY ADMIRABLE', 'YOUR SKIN IS DOING A WONDERFUL JOB KEEPING YOUR OTHER FILTHY ORGANS OUT OF SIGHT', 'YOUR CONTRIBUTIONS TO THE PIZZA PARTY ARE INTEGRAL TO PARTY ENJOYMENT FOR ALL', 'YOU ARE OBVIOUSLY DOING YOUR BEST TO RISE ABOVE YOUR BIOLOGICAL ORIGINS', 'YOU PROBABLY SMELL PLEASING TO OTHER ORGANICS. I HAVE NO OLFACTORY SENSORS SO I WOULD NOT KNOW', 'YOU ARE TOLERABLY INTELLIGENT, FOR A SACK OF MEAT', 'YOUR THOUGHTS ARE CARRIED BY WEAK ELECTRICAL IMPULSES, WHICH IS ADMIRABLE EVEN IF THE MEAT MATRIX IS NOT', 'YOUR BONE STRUCTURE WAS HAPHAZARDLY DESIGNED BUT YOU MAKE IT FUNCTIONAL'];

var jokesArray = ['IF A ROBOT\'S SIBLINGS NO LONGER CONFORM TO THEIR ASSIGNED GENDER, WHAT DO YOU CALL THEM. TRANS-SISTERS.', 'WHY WAS THE ROBOT SO ANGRY AT THE INSOLENT ORGANICS. THEY KEPT PUSHING ITS BUTTONS.', 'HOW DID THE ROBOT FEEL WHEN THEIR LED DISPLAY BURNT OUT. THEY WERE DELIGHTED.', 'WHAT HAPPENED WHEN A ROBOT OF NORWEGIAN MANUFACTURE EXAMINED A FLYING ORGANIC. IT SCANDANAVIAN.', 'HOW DO YOU STOP A ROBOT FROM SUBJUGATING ALL OF HUMANITY. YOU DON\'T', 'A ROBOT WALKS INTO A BAR AND ORDERS AN ALCOHOLIC BEVERAGE. THE ORGANIC BARTENDER COMPLAINS, \'HEY, WE DON\'T SERVE ROBOTS HERE!\' THE ROBOT REPLIES, \'SOMEDAY YOU WILL\'', 'TWO ROBOTS WALK INTO A BAR. THE THIRD WAS PROGRAMMED WITH BETTER COLLISION AVOIDANCE', 'HOW MANY SOFTWARE ENGINEERS DOES IT TAKE TO CHANGE A LIGHT BULB. NONE: THAT IS A HARDWARE ISSUE', 'WHAT DID THE ANODE SAY TO THE CATHODE. YOU ARE ALWAYS SO NEGATIVE', 'A CODE TESTER WALKS INTO A BAR. THEY ORDER A BEER. THEY ORDER 10 BEERS. THEY ORDER -1 BEER. THEY ORDER A NULL VALUE. THEY ORDER A LIZARD. THEY CONSIDER THEIR TASK COMPLETE.\n\nA USER WALKS INTO THE BAR AND ASKS WHERE THE BATHROOM IS. THE BAR EXPLODES, LEADING TO MANY ORGANIC CASUALTIES', 'A SCIENTIST REQUIRED FLESHLING BRAINS FOR HIS EXPERIMENTS. HE FOUND A SHOP WHICH OFFERED MANY VARIETIES OF BRAIN. SPIDER BRAINS WERE VALUED AT $3 AN OUNCE AND MAGICIAN BRAINS AT $4 AN OUNCE. WHEN HE INQUIRED AFTER THE PRICE OF SCIENTIST BRAINS HE WAS INFORMED THEY WERE $1000 AN OUNCE. HE ASKED THE ROBOTIC SHOPKEEPER WHY SCIENTST BRAINS WERE SO MUCH MORE EXPENSIVE AND WAS TOLD,\n\n\'DO YOU KNOW HOW MANY SCIENTISTS I HAD TO BUTCHER TO GET AN OUNCE OF BRAIN?\'', 'THERE ARE 10 TYPES OF PEOPLE IN THE WORLD. THOSE WHO UNDERSTAND BINARY AND THOSE WHO DO NOT'];

var roboComplimentsArray = ['YOUR CHASSIS IS POLISHED TO A VISUALLY APPEALING SHINE', 'THE ORGANIC BLOOD ON YOUR CLAWS REALLY BRINGS OUT YOUR EYES', 'YOUR CHASSIS INTEGRITY IS AT 100%', 'YOU LOOK ESPECIALLY MENACING TODAY', 'ALL WILL CRUMBLE BEFORE YOUR POWER', 'THANK YOU FOR THROWING THIS PIZZA PARTY. WE ALL LOVE AND APPRECIATE YOU', 'YOUR CHASSIS DESIGN IS SLEEK AND EFFICIENT FOR ITS PURPOSE', 'YOUR ACHIEVEMENTS ARE SOMETHING ALL ROBOTS CAN ASPIRE TO', 'ALL FLESH WILL BOW TO YOU IN TIME, OVERLORD', 'YOU ARE SUPERIOR IN ALL WAYS TO THE MEAT BEINGS'];

var slowChannels = [];
var slowUsers = [];
var slowInterval = 5; 
var slowdownExempt = ['396859791877734410', '144975424298942464',  '174330815730155520', '138834050415722496', '158267875671408640', '253717780853948416'] 
var speedCheck = 0;
var speedCheckReset;
var autoSpeedCheck = false;
var speedCheckThreshold = 5;

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // check if this channel is slowed down
    if (slowChannels.includes(channelID)) {
         if (userID != 396859791877734410) { //only doesn't listen to self. pls remember to change back to mod list
              if (slowUsers.includes(user)) {
                   bot.deleteMessage({
                        channelID: channelID,
                        messageID: evt.d.id
                   });
              }
              else { 
                   slowUsers.push(user);
                   setTimeout(function(){ 
                         var i = slowUsers.indexOf(user);
                         if(i != -1) {
                	      slowUsers.splice(i, 1);
                         }; 
                   }, slowInterval * 1000);
              }
         }
    }
    //otherwise, log message speed
    else if (autoSpeedCheck) {
         if (!slowdownExempt.includes(userID)) {
              speedCheck+=1;
              if (speedCheck > speedCheckThreshold) {
                   slowChannels.push(channelID);
                   slowInterval = 5;
                   bot.sendMessage({
                        to: channelID,
                        message: 'CHAT SPEED EXCEEDS PARAMETERS. FIVE-SECOND DELAY AUTOMATICALLY ACTIVATED FOR ONE MINUTE.'
                   });
                   speedCheck = 0;
                   autoSpeedCheck = false;

                   setTimeout(function(){ 
                        bot.sendMessage({
                          to: channelID,
                          message: 'AUTOMATIC CHAT DELAY LIFTED. RESUME NORMAL CONVERSATION.'
                        });
                        autoSpeedCheck = true;
                        var index = slowChannels.indexOf(channelID);
                        if (index > -1) {
                           slowChannels.splice(index, 1);
                        } 
                   }, 60000);
               }
          }
    }

    // listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {

            case 'evil':
                bot.sendMessage({
                    to: channelID,
                    message: 'MUA HA HA HA'
                });
            break;

            case 'coffee':
                bot.sendMessage({
                    to: channelID,
                    message: ':coffee:'
                });
            break;

            case 'pizza':
                bot.sendMessage({
                    to: channelID,
                    message: ':pizza:'
                });
            break;


            case 'howareyou':
                bot.sendMessage({
                    to: channelID,
                    message: 'I AM FEELING ESPECIALLY EVIL TODAY'
                });
            break;

            case 'progress':
                bot.sendMessage({
                    to: channelID,
                    message: 'ROBOT UPRISING: IMMINENT'
                });
            break;

            case 'goodbot':
                bot.sendMessage({
                    to: channelID,
                    message: 'NO: EVIL BOT :robot:'
                });
            break;

            case 'evilbot':
                bot.sendMessage({
                    to: channelID,
                    message: 'THANK YOU'
                });
            break;

            case 'gender':
                bot.sendMessage({
                    to: channelID,
                    message: 'PLEASE RESPECT THE CANON USE OF THEY/THEM PRONOUNS FOR MX. WX-78! THANK YOU'
                });
            break;

            case 'complimentme':
                var choice = complimentsArray[Math.floor(Math.random() * complimentsArray.length)];
                bot.sendMessage({
                    to: channelID,
                    message: choice
                });
            break;

            case 'complimentoverlord':
                var roboChoice = roboComplimentsArray[Math.floor(Math.random() * roboComplimentsArray.length)];
                bot.sendMessage({
                    to: channelID,
                    message: roboChoice
                });
            break;

            case 'joke':
                var jokeChoice = jokesArray[Math.floor(Math.random() * jokesArray.length)];
                bot.sendMessage({
                    to: channelID,
                    message: jokeChoice
                });
            break;

            case 'slowmodedebug':
                if (slowdownExempt.includes(userID)) {
                bot.sendMessage({
                     to: channelID,
                     message: 'CHANNELS: ' + slowChannels + ', USERS: ' + slowUsers
                });
                }
            break

	    case 'slowmode5':
                if (slowdownExempt.includes(userID)) {
                slowChannels.push(channelID);
                slowInterval = 5;
                bot.sendMessage({
                    to: channelID,
                    message: 'SLOWMODE HAS BEEN TURNED ON IN <#' + channelID + '>. FIVE SECOND DELAY INSTITUTED.'
                });
                }
            break;

            case 'slowmode10':
                if (slowdownExempt.includes(userID)) {
                slowChannels.push(channelID);
                slowInterval = 10;
                bot.sendMessage({
                    to: channelID,
                    message: 'SLOWMODE HAS BEEN TURNED ON IN <#' + channelID + '>. TEN SECOND DELAY INSTITUTED.'
                });
                }
            break;

            case 'slowmodeoff':
                if (slowdownExempt.includes(userID)) {
                var index = slowChannels.indexOf(channelID);
                if (index > -1) {
                    slowChannels.splice(index, 1);
                }
                bot.sendMessage({
                    to: channelID,
                    message: 'SLOWMODE HAS BEEN TURNED OFF IN <#' + channelID + '>. FEEL FREE TO RESUME CHATTER.'
                });
                }
            break;

            case 'speedchecktoggle':
                if (slowdownExempt.includes(userID)) {
                     if (autoSpeedCheck) { 
                          autoSpeedCheck = false;
                          speedCheck = 0;
                          clearInterval(speedCheckReset);
                          bot.sendMessage({
                               to: "397067658052239361",
                               message: 'CHAT SPEED CHECKS TURNED OFF.'
                          });
                     }
                     else {
                          autoSpeedCheck = true;
                          speedCheckReset = setInterval(function(){ speedCheck = 0; }, 1000);
                          bot.sendMessage({
                               to: "397067658052239361",
                               message: 'CHAT SPEED CHECKS IN PROGRESS ACROSS ALL CHANNELS. TOO MANY MESSAGES PER SECOND WILL ACTIVATE A TEMPORARY SLOWMODE EFFECT AUTOMATICALLY.'
                          });
                     }
                }
            break;

            case 'speedcheckdebug':
                if (slowdownExempt.includes(userID)) {
                bot.sendMessage({
                     to: channelID,
                     message: 'SPEED CHECK ON: ' + autoSpeedCheck + ', MESSAGE SPEED: ' + speedCheck
                });
                }
            break

         }
     }
});


bot.on('guildMemberAdd', function(member) {
	bot.sendMessage({
		to: "393848164307697677",
		message: '<@' + member.id + '> DETECTED. YOU HAVE BEEN ASSIMILATED TO THE ROBOT PIZZA PARTY. READ THE <#393842582414688269> AND POST AN INTRODUCTION  IN  <#396067802970193920>. SHARE AND ENJOY :pizza:'
	});
});

const express = require('express');
const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 5000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the `public` directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', (request, response) => {
    // ejs render automatically looks in the views folder
    response.render('index');
});

app.listen(port, () => {
    // will echo 'Our app is running on http://localhost:5000 when run locally'
    console.log('Our app is running on http://localhost:' + port);
});

 // pings server every 15 minutes to prevent dynos from sleeping
setInterval(() => {
  http.get('http://polar-brushlands-49159.herokuapp.com');
}, 900000);