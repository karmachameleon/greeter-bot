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
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !evil
            case 'evil':
                bot.sendMessage({
                    to: channelID,
                    message: 'MUA HA HA HA'
                });
            break;
            case 'pizza':
                bot.sendMessage({
                    to: channelID,
                    message: ':pizza:'
                });
            break;
            // !howareyou
            case 'howareyou':
                bot.sendMessage({
                    to: channelID,
                    message: 'I AM FEELING ESPECIALLY EVIL TODAY'
                });
            break;
	    //progress
            case 'progress':
                bot.sendMessage({
                    to: channelID,
                    message: 'ROBOT UPRISING: IMMINENT'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});

bot.on('guildMemberAdd', function(member) {
	bot.sendMessage({
		to: "393848164307697677",
		message: '<@' + member.id + '> DETECTED. YOU HAVE BEEN ASSIMILATED TO THE ROBOT PIZZA PARTY. READ THE #rules_and_guidelines AND POST AN INTRODUCTION  in  #introductions. SHARE AND ENJOY :pizza:'
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