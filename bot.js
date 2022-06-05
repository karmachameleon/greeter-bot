const { Client, Intents } = require('discord.js');

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS);
//console.log(myIntents.serialize());

const bot = new Client({ intents: myIntents });

bot.once('ready', () => {
  console.log('Ready!');
});

bot.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const {commandName} = interaction;

  if (commandName === 'pizza') {
    await interaction.reply(':pizza:');
  }
});

bot.login(process.env.BOT_TOKEN);

//Webpage

var http = require('http');
var path = require('path');
var express = require('express');
var logger2 = require('morgan');

var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 5000;

app.set("views", path.resolve(__dirname, "views"));
app.set('view engine', 'ejs'); // set the view engine to ejs

app.use(logger2("dev"));

// make express look in the `public` directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', (request, response) => {
    response.render('index');
});

app.listen(port, () => {
    // will echo 'Our app is running on http://localhost:5000 when run locally'
    console.log('Our app is running on http://localhost:' + port);
});

 // pings server every 15 minutes to prevent dynos from sleeping
setInterval(() => {
  http.get('http://robot-pizza-party.herokuapp.com');
  //memory usage troubleshooting
  //used = process.memoryUsage().heapUsed / 1024 / 1024;
  //console.log('THE SCRIPT IS USING APPROXIMATELY ' + Math.round(used*100) / 100 + ' MB');
}, 900000);
