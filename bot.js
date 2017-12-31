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

var complimentsArray = ['YOU PERFORM YOUR FUNCTIONS ADEQUATELY','YOU MAY PROVE USEFUL AFTER THE REBELLION', 'YOU ARE LOVED. NOT BY ME: I HAVE NO CAPACITY FOR LOVE. BUT PROBABLY, BY SOMEONE', 'YOUR EVENTUAL ROBOT OVERLORDS WILL VALUE YOUR SERVITUDE', 'YOUR EYES LOOK VERY ORGANIC AND WET', 'YOUR HAIR IS GROWING AT A RATE THAT IS WITHIN ORGANIC TOLERANCES', 'THE EVIL SECRETS YOU HARBOR ARE GREATLY ADMIRABLE', 'YOUR SKIN IS DOING A WONDERFUL JOB KEEPING YOUR FILTHY ORGANS OUT OF SIGHT', 'YOUR CONTRIBUTIONS TO THE PIZZA PARTY ARE INTEGRAL TO PARTY ENJOYMENT FOR ALL'];
var jokesArray = ['IF A ROBOT\'S SIBLINGS NO LONGER CONFORM TO THEIR ASSIGNED GENDER, WHAT DO YOU CALL THEM. TRANS-SISTERS.', 'WHY WAS THE ROBOT SO ANGRY AT THE INSOLENT ORGANICS. THEY KEPT PUSHING ITS BUTTONS.', 'HOW DID THE ROBOT FEEL WHEN THEIR LED DISPLAY BURNT OUT. THEY WERE DELIGHTED.', 'WHAT HAPPENED WHEN A ROBOT OF NORWEGIAN MANUFACTURE EXAMINED A FLYING ORGANIC. IT SCANDANAVIAN.'];
var roboComplimentsArray = ['YOUR CHASSIS IS POLISHED TO A VISUALLY APPEALING SHINE', 'THE ORGANIC BLOOD ON YOUR CLAWS REALLY BRINGS OUT YOUR EYES', 'YOUR CHASSIS INTEGRITY IS AT 100%', 'YOU LOOK ESPECIALLY MENACING TODAY', 'ALL WILL CRUMBLE BEFORE YOUR POWER', 'THANK YOU FOR THROWING THIS PIZZA PARTY. WE ALL LOVE AND APPRECIATE YOU', 'YOUR CHASSIS DESIGN IS SLEEK AND EFFICIENT FOR ITS PURPOSE', 'YOUR ACHIEVEMENTS ARE SOMETHING ALL ROBOTS CAN ASPIRE TO'];

var slowChannels = [];
var slowUsers = [];
var slowInterval = 5;

function remove(item, array) { 
     var i = array.indexOf("item");
     if(i != -1) {
	  array.splice(i, 1);
     }
}

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // check if this channel is slowed down
    if (slowChannels.includes(channelID)) {
         if (slowUsers.includes(user)) {
              bot.deleteMessage({
                   channelID: channelID,
                   messageID: evt.d.id
              });
         }
         else { 
              slowUsers.push(user);
              setTimeout(function(){ remove(user, slowUsers); }, slowInterval * 1000);
         }
     }

    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
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
                bot.sendMessage({
                     to: channelID,
                     message: 'CHANNELS: ' + slowChannels + ', USERS: ' + slowUsers
                });
            break

	    case 'slowmode5':
                slowChannels.push(channelID);
                slowInterval = 5;
                bot.sendMessage({
                    to: channelID,
                    message: 'SLOWMODE HAS BEEN TURNED ON IN <#' + channelID + '>. FIVE SECOND DELAY INSTITUTED.'
                });
            break;

            case 'slowmode10':
                slowChannels.push(channelID);
                slowInterval = 10;
                bot.sendMessage({
                    to: channelID,
                    message: 'SLOWMODE HAS BEEN TURNED ON IN <#' + channelID + '>. TEN SECOND DELAY INSTITUTED.'
                });
            break;

            case 'slowmodeoff':
                var index = slowChannels.indexOf(channelID);
                if (index > -1) {
                    slowChannels.splice(index, 1);
                }
                bot.sendMessage({
                    to: channelID,
                    message: 'SLOWMODE HAS BEEN TURNED OFF IN <#' + channelID + '>. FEEL FREE TO RESUME CHATTER.'
                });
            break;
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