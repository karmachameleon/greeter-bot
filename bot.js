const { Client, Collection, Intents } = require('discord.js');
const fs = require ('node:fs');
const path = require ('node:path');

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS);
//console.log(myIntents.serialize());

const bot = new Client({ intents: myIntents });
bot.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file =>file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  // set a new item in the Collection
  // key = command name, value = exported module
  bot.commands.set(command.data.name, command);
}

bot.once('ready', () => {
  console.log('Ready!');
});

//After creating a new command, run "node deploy_commands.js" in the Heroku console.
bot.on('interactionCreate', async interaction => {
  if (interaction.isCommand()){

    const command = bot.commands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: "ERROR WHILE EXECUTING THIS COMMAND", ephemeral: true});
    }
  }
  else if (interaction.isButton()){
    console.log("Button interacted with");
    const butt = bot.commands.get(interaction.customId);
    if (!butt) return;
    console.log(butt);
    if (butt === 'rsvp'){
      console.log("Just got an RSVP!");
      await interaction.fetchReply()
      .then(reply => new Message({content: reply.content + "\n> " + interaction.member.displayName, components: reply.components}))
      .then(newReply => interaction.editReply(newReply))
      .then(console.log).catch(console.error);
    }
  }
  else { return; }
});

bot.login(process.env.BOT_TOKEN);

//Webpage

var http = require('http');
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
