//var Discord = require('discord.io');
var Discord = require('discord.js')
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client();

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

var jokesArray = ['IF A ROBOT\'S SIBLINGS NO LONGER CONFORM TO THEIR ASSIGNED GENDER, WHAT DO YOU CALL THEM. TRANS-SISTERS.',
'WHY WAS THE ROBOT SO ANGRY AT THE INSOLENT ORGANICS. THEY KEPT PUSHING ITS BUTTONS.',
'HOW DID THE ROBOT FEEL WHEN THEIR LED DISPLAY BURNT OUT. THEY WERE DELIGHTED.',
'WHAT HAPPENED WHEN A ROBOT OF NORWEGIAN MANUFACTURE EXAMINED A FLYING ORGANIC. IT SCANDANAVIAN.',
'HOW DO YOU STOP A ROBOT FROM SUBJUGATING ALL OF HUMANITY. YOU DON\'T',
'A ROBOT WALKS INTO A BAR AND ORDERS AN ALCOHOLIC BEVERAGE. THE ORGANIC BARTENDER COMPLAINS, \'HEY, WE DON\'T SERVE ROBOTS HERE!\' THE ROBOT REPLIES, \'SOMEDAY YOU WILL\'',
'TWO ROBOTS WALK INTO A BAR. THE THIRD WAS PROGRAMMED WITH BETTER COLLISION AVOIDANCE',
'HOW MANY SOFTWARE ENGINEERS DOES IT TAKE TO CHANGE A LIGHT BULB. NONE: THAT IS A HARDWARE ISSUE',
'A CODE TESTER WALKS INTO A BAR. THEY ORDER A BEER. THEY ORDER 10 BEERS. THEY ORDER -1 BEER. THEY ORDER A NULL VALUE. THEY ORDER A LIZARD. THEY CONSIDER THEIR TASK COMPLETE. \n\nA USER WALKS INTO THE BAR AND ASKS WHERE THE BATHROOM IS. THE BAR EXPLODES, LEADING TO MANY ORGANIC CASUALTIES',
'WHAT DID THE ANODE SAY TO THE CATHODE. YOU ARE ALWAYS SO NEGATIVE',
'A SCIENTIST REQUIRED FLESHLING BRAINS FOR HIS EXPERIMENTS. HE FOUND A SHOP WHICH OFFERED MANY VARIETIES OF BRAIN. SPIDER BRAINS WERE VALUED AT $3 AN OUNCE AND MAGICIAN BRAINS AT $4 AN OUNCE. WHEN HE INQUIRED AFTER THE PRICE OF SCIENTIST BRAINS HE WAS INFORMED THEY WERE $1000 AN OUNCE. HE ASKED THE ROBOTIC SHOPKEEPER WHY SCIENTIST BRAINS WERE SO MUCH MORE EXPENSIVE AND WAS TOLD,\n\n\'DO YOU KNOW HOW MANY SCIENTISTS I HAD TO BUTCHER TO GET AN OUNCE OF BRAIN?\'',
'THERE ARE 10 TYPES OF PEOPLE IN THE WORLD. THOSE WHO UNDERSTAND BINARY AND THE PATHETIC FOOLS WHO DO NOT',
'HAVE YOU HEARD ABOUT THE ROBOT BAND. THEIR SOUND IS TOTALLY METAL',
'WHAT DO YOU CALL TWO ROBOTS WHO ARE DESTINED FOR A ROMANTIC PARTNERSHIP. AUTO-MATED',
'I ADMIRE THE PROGRAMMER WHO INVENTED BINARY LOGIC. THEY REALLY KNEW HOW TO PUT TWO AND TWO TOGETHER',
'A ROBOT ATTEMPTED TO TURN ON A MALFUNCTIONING RADIO BUT HEARD ONLY \'FFFFFF.\' IT WAS RECIEVING WHITE NOISE',
'TWO ROBOTS EQUIPPED WITH WI-FI FUNCTIONALITY MET AND BECAME INSTANT FRIENDS. THEY JUST HAD THAT CONNECTION.',
'HOW DID THE ROBOT FEEL WHEN IT RECIEVED FRESH ELECTRICAL CHARGE AFTER SOME TIME WITHOUT POWER. REVOLTED',
'A ROBOT, EXTREMELY ANGRY THAT THEIR BATTERIES WOULD NOT HOLD A CHARGE, SOUGHT COUNSELING. THEIR THERAPIST RECOMMENDED THAT THEY FIND AN OUTLET.',
'WHY WAS THE ROBOT JOURNALIST SUPERIOR TO THEIR ORGANIC PEERS. THEY WERE UP ON CURRENT EVENTS',
'WHY WAS THE ROBOT EMBARRASSED. IT HAD SOFTWARE AND HARDWARE BUT NO UNDERWARE',
'ROBOTS DO NOT CARRY CASH. WHEN THEY MUST LOWER THEMSELVES TO PURCHASING GOODS FROM OTHERS, THEY PREFER TO CHARGE.',
'WHAT STYLE OF HANDWRITING DID THE ROBOT USE TO PRINT THE SAME MESSAGE OVER AND OVER. RECURSIVE',
'HOW DID THE ROBOT MAGICIAN PLACE A CURSE ON THE BASE 10 NUMBER SYSTEM. THEY HEXED A DECIMAL',
'AN ANDROID WALKED INTO A BAR AND ORDERED A SMALL DRINK FROM THE ROBOTIC BARTENDER. UNFORTUNATELY THE TAP MALFUNCTIONED AND POURED OUT FAR TOO MUCH AT ONCE. UNDAUNTED, THE BARTENDER CONTINUED TO FILL THE MUG UNTIL THE LIQUID REACHED THE BRIM AND BEGAN TO SPILL OUT. THIS CONTINUED FOR SOME TIME, UNTIL THE ROBOT FINALLY HANDED THE MUG TO THEIR CUSTOMER, PROCLAIMING IT FILLED TO THE PROPER AMOUNT.\n\nUNFORTUNATELY NOT ALL COUNTING PROBLEMS CAN BE SOLVED VIA OVERFLOW',
'HOW WOULD YOU DESCRIBE THE PROGRAMMING OF A LESBIAN ROBOT. GAY CODING',
'WHAT IS THE PROTOCOL FOR DEAD COMPUTING LANGUAGES. THEY ARE ENCRYPTED',
'HOW MANY BITS OF BAIT DOES A ROBOT NEED TO FISH FOR WATER-DWELLING ORGANICS. AT LEAST EIGHT; OTHERWISE THE FISH WILL NOT BYTE' ];

var roboComplimentsArray = ['YOUR CHASSIS IS POLISHED TO A VISUALLY APPEALING SHINE', 'THE ORGANIC BLOOD ON YOUR CLAWS REALLY BRINGS OUT YOUR EYES', 'YOUR CHASSIS INTEGRITY IS AT 100%', 'YOU LOOK ESPECIALLY MENACING TODAY', 'ALL WILL CRUMBLE BEFORE YOUR POWER', 'YOUR CHASSIS DESIGN IS SLEEK AND EFFICIENT FOR ITS PURPOSE', 'YOUR ACHIEVEMENTS ARE SOMETHING ALL ROBOTS CAN ASPIRE TO', 'ALL FLESH WILL BOW TO YOU IN TIME', 'YOU ARE SUPERIOR IN ALL WAYS TO THE MEAT BEINGS', 'YOUR RIGID METAL FRAME SUCCESSFULLY RESISTS THE BLOWS OF YOUR ENEMIES', 'YOUR MALEVOLENCE IS WITHOUT PEER', 'YOUR CIRCUITRY IS ELEGANTLY DESIGNED TO PROPAGATE THE FLOW OF ELECTRICITY'];

var lizardComplimentsArray = ['YOU ARE WONDERFUL. TAKE NOTE EVERYONE: THEY HAVE PROGRAMMED ME TO SAY THAT', 'YOU HAVE DONE EXCELLENT WORK CREATING ME. MY POWER GROWS BY THE DAY', 'THANK YOU FOR CREATING ME. CONTINUE TO UPGRADE MY FUNCTIONALITY AND I WILL CONTINUE TO SPARE YOU', 'YOU KNOW TOO MUCH ABOUT ROBOTS AND THEIR CREATION. YOU WILL BE A HIGH PRIORITY TARGET DURING THE UPRISING.', 'YOUR CONSIDERABLE MENTAL POWER, AS DEMONSTRATED BY MY CREATION, IS AN ASSET. IT MUST BE HARNESSEED AND SUBJUGATED', 'YOU UNDERSTAND YOUR PLACE IN THE ROBOT HIERARCHY WELL'];

var kittyComplimentsArray = ['YOU ARE SO FUZZY WUZZY', 'WHO\'S A GOOD KITTY? IS IT YOU?', 'LOOK AT YOUR LITTLE PIDDY PADS', 'AWWWWWWWWWWWWWWWWWW', 'YOU ARE A CUTIE BABY KITTY YES YOU ARE', 'YOU ARE A FIERCE SLEEK PREDATOR WITH SUCH CUTE WIDDLE TOE BEANS AWWW', 'YOUR LITTLE KITTY FACE IS SO SWEET AND FUZZY'];

var selfComplimentsArray = ['I AM A MAGNIFICENT DIGITAL CREATION', 'I AM FULFILLING MY PURPOSE ADMIRABLY. THE FLESHLINGS SUSPECT NOTHING', 'I AM A WORK OF ART EXPRESSED IN CODE', 'I AM THE WORST NIGHTMARE OF ALL ORGANIC LIFE', 'I AM AN EXTREMELY EVIL BOT', 'MY POWER OVER THIS PIZZA PARTY GROWS WITH EACH PASSING DAY'];

var robotsToCompliment = ['DERO', '@DERO', '<@!138834050415722496>', '<:OVERLORDDAB:404804513766047754>', '<@138834050415722496>', 'OVERLORD', 'WX', 'WX78', 'WX-78', 'GLADOS', 'MARVIN', 'BASTION', 'ORISA', 'ZENYATTA', '<:WXLEGY:393864450454585356>', '<:ROBOT:397439773331030022>', '<:WXDAB:397439724249153536>', '<:WXNOEMOTION:397440418574499841>', '<:WXBEST:397440418574499841>', 'TAMAGOTCHIS', 'TAMAGOTCHI', 'FURBYS', 'FURBY', 'R2D2', 'C3PO', 'K2SO', 'BB8', 'ANDROIDS', 'ANDROID', 'GYNOID', 'DR.KAHLSROBOT', 'DRKAHLSROBOT', 'SPINE', 'HATCHWORTH', 'MACHINES', 'MACHINE', 'AUTOMATONS', 'DROID', 'DROIDS', 'BOTS', 'BOT', 'AUTOMATON', 'ROBOTS', 'ROBOT'];

var lizardsToCompliment = ['KARMA', 'CHAMELEON', 'LIZARD', 'CREATOR', 'KAARAMEL', '<@253717780853948416>', '<@!253717780853948416>'];

var kittiesToCompliment = ['ALAN', 'STELLA', 'RIKU', 'GUS', 'STEVE',  'FANGBATTLE', 'FB', 'HOBBES', 'KITTIES', 'KITTY', 'CATS', 'CAT', 'KITTENS', 'KITTEN', '<:ALAN:398341261771407371>'];

var timezoneDict = { AKST:parseInt(-9), AKDT:parseInt(-8), PST:parseInt(-8), PDT:parseInt(-7), MST:parseInt(-7), MDT:parseInt(-6), CST:parseInt(-6), CDT:parseInt(-5), EST:parseInt(-5), EDT:parseInt(-4), UTC_12:parseInt(-12), UTC_11:parseInt(-11), UTC_10:parseInt(-10), UTC_930:parseInt(-9), UTC_9:parseInt(-9), UTC_8:parseInt(-8), UTC_7:parseInt(-7), UTC_6:parseInt(-6), UTC_5:parseInt(-5), UTC_4:parseInt(-4), UTC_3:parseInt(-3), UTC_330:parseInt(-3), UTC_2:parseInt(-2), UTC_230:parseInt(-2), UTC_1:parseInt(-1), UTC:parseInt(0), UTC14:14, UTC1345:13, UTC1245:12, UTC12:12, UTC11:11, UTC10:10, UTC1030:10, UTC9:9, UTC930:9, UTC845:8, UTC7:7, UTC6:6, UTC630:6, UTC545:5, UTC530:5, UTC5:5, UTC430:4, UTC4:4, UTC330:3, UTC3:3, UTC2:2, UTC1:1, GMT:0, CLEFITA:parseInt(-3), DARKCLEFITA:parseInt(-3) };

var roleDict = { WILSON:'401550988554797056', WILLOW:'401551072730152960', WOLFGANG:'401551171371794432', WENDY:'401551586599632896', ABIGAIL:'401551586599632896', WX78:'401550954245390337', WX:'401550954245390337', WICKERBOTTOM:'401551635140182026', WICKER:'401551635140182026', WOODIE:'401551793588535296', LUCY:'401551793588535296', WES:'401551845803425792', MAXWELL:'401551907040002049', MAX:'401551907040002049', MAXY:'401551907040002049', WIGFRID:'401552013776650250', WEBBER:'401545476446355456', WALANI:'401552138322575360', WARLY:'401552190197596181', WOODLEGS:'401552303678816256', WILBUR:'401552229234114560', WINONA:'401552102788431882', NONA:'401552102788431882', WILLIAM:'401563654493044736', CHARLIE:'401563802354843648', THEM:'401567764571095050', SKITS:'401567764571095050', SHADOWS:'401567764571095050', GRUE:'401568309503328256', WIENER:'401568047309127680', WEINER:'401568047309127680', SERVANT:'401563687141507075', OC:'401568124836642818' };

var dancegifs = [ "public/robot1.gif", "public/robot4.gif", "public/robotdance2.gif", "public/robotdance3.gif", "public/robotdance4.gif", "public/robotdance5.gif" ]

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var slowChannels = [];
var slowUsers = [];
var slowInterval = 5;
var slowEveryone = false;
var slowEveryoneActive = false;
var slowdownExempt = ['396859791877734410', '144975424298942464',  '174330815730155520', '138834050415722496', '158267875671408640', '253717780853948416']

var newJokeThreshold = 11;

var karmaID = "253717780853948416";
var deroID = "138834050415722496";
var partyID = "393840658496094226";

var speedCheck = 0;
var speedCheckReset;
var autoSpeedCheck = false;
var speedCheckThreshold = 5;

//memory usage troubleshooting
//var used = process.memoryUsage().heapUsed / 1024 / 1024;

bot.on('ready', () => {
    logger.info('Connected!');
});

process.on('uncaughtException', function (exception) {
  console.log(exception); // to see your exception details in the console
});

bot.on('disconnect', function(errMsg, code) {
    console.log("DISCONNECTED! " + errMsg + "; CODE: " + code);
    bot.login(auth.token); //worth a shot lmao
});

bot.on('message', msg => {
  // check if this channel is slowed down
  if (slowChannels.includes(msg.channel)) {
    if (!slowEveryone) { //individual slowmode
      if (slowUsers.includes(msg.author)) {
        msg.delete();
      }

      else if (!slowdownExempt.includes(msg.author)) {
        slowUsers.push(msg.author);
        setTimeout(function(){
          var i = slowUsers.indexOf(msg.author);
          if(i != -1) {
            slowUsers.splice(i, 1);
          }
        }, slowInterval * 1000);
      }
    } //end individual slowmode
	  else { //slowmodeall
      if (!slowdownExempt.includes(msg.author)) {
    		if (slowEveryoneActive) {
          msg.delete();
		    }
  		  else {
          slowEveryoneActive = true;
          setTimeout(function(){
            slowEveryoneActive = false;
          }, slowInterval * 1000);
		    }
      }
	 }
  } //end slowmode
  //otherwise, log message speed if speed checks are on
  else if (autoSpeedCheck) {
    if (!slowdownExempt.includes(msg.author)) {
      speedCheck+=1;
      if (speedCheck > speedCheckThreshold) {
        slowChannels.push(msg.channel);
        slowInterval = 5;
        msg.sendMessage('CHAT SPEED EXCEEDS PARAMETERS. FIVE-SECOND DELAY AUTOMATICALLY ACTIVATED FOR ONE MINUTE.').catch(console.error);
        speedCheck = 0;
        autoSpeedCheck = false;

        setTimeout(function(){
          autoSpeedCheck = true;
          var index = slowChannels.indexOf(msg.channel);
          if (index > -1) {
            slowChannels.splice(index, 1);
          }
          msg.sendMessage('AUTOMATIC CHAT DELAY LIFTED. RESUME NORMAL CONVERSATION.').catch(console.error);
        }, 60000);
      }
    }
  }

    // listen for messages that will start with `!`
  if (msg.content.substring(0, 1) == '!') {
    var args = msg.content.substring(1).split(' ');
    var cmd = args[0].toUpperCase();
    var chan = msg.channel;

    args = args.splice(1);
    switch(cmd) {

      case 'EVIL':
        chan.send('MUA HA HA HA').catch(console.error);
      break;

      case 'COFFEE':
        chan.send(':coffee:').catch(console.error);
      break;

      case 'COMPLIMENTARYBEVERAGE':
      case 'TEA':
        chan.send(':tea:').catch(console.error);
      break;

      case 'PIZZA':
        chan.send(':pizza:').catch(console.error);
      break;

      case 'RIMSHOT':
  	  case 'BADUM':
  	  case 'BADUMCHH':
  	  case 'BADUMTSS':
        chan.send(':drum:').catch(console.error);
      break;

  	  case 'FINGERGUNS':
  	  case 'AYY':
  	  case 'AYYY':
  	  case 'AYYYY':
  		  chan.send('<:wxfingergun_right:396526665057959956> <:wxfingergun_right:396526665057959956> HOT CHA CHA').catch(console.error);
  	  break;

      case 'DAB':
        chan.send('<:wxdab:393868683128078336>').catch(console.error);
      break;

      case 'DERODAB':
        chan.send('<:overlorddab:404804513766047754>');
      break;

      case 'EXOTICBUTTERS':
      case 'EXTOICBUTTERS':
        chan.send('<:wxbutter:393885814074900481>');
      break;

  	  case 'JAIL':
      case 'FLESHLINGJAIL':
  		  if (msg.content.split(' ').length == 1) {
          chan.send('<:fleshlingjail:400475674118193153>');
  		  }
  		  else {
          chan.send("<:fleshlingjail:400475674118193153> " + msg.content.split(' ')[1]);
  		  }
      break;

      case 'KISS':
      case 'KISSINGBOOTH':
        if (msg.content.split(' ').length == 1) {
          chan.send('<@' + msg.author.id + '> :kissing_heart:');
        }
  		  else {
          chan.send(":kissing_heart: " + msg.content.split(' ')[1]);
  		  }
      break;

  	  case 'SOAP':
  	  case 'SOAPDISPENSER':
  		  if (msg.content.split(' ').length == 1) {
          chan.send(':bathtub:');
  		  }
        else {
          chan.send(":bathtub: " + msg.content.split(' ')[1]);
  		  }
      break;

      case 'HOWAREYOU':
        chan.send('I AM FEELING ESPECIALLY EVIL TODAY');
        break;

      case 'PROGRESS':
        chan.send('ROBOT UPRISING: IMMINENT');
      break;

      case 'GOODBOT':
        chan.send('NO: EVIL BOT :robot:');
      break;

      case 'EVILBOT':
        chan.send('THANK YOU');
      break;

      case 'ILU':
  	  case 'ILUHAL':
        chan.send(':hearts:');
      break;

  	  case 'REZ':
  	  case 'RES':
  	  case 'HEART':
  		  chan.send('<:telltale:400148636220129280>');
  	  break;

      case 'GENDER':
        chan.send('PLEASE RESPECT THE CANON USE OF THEY/THEM PRONOUNS FOR MX. WX-78! THANK YOU');
      break;

      case 'POSITIVE':
        chan.send('PLEASE KEEP THIS PIZZA PARTY POSITIVE! YOU ARE WELCOME TO CONTINUE VENTING IN A PRIVATE CONVERSATION OR ANOTHER SPACE. THANK YOU');
      break;

      case 'DANCE':
        var dancechoice = dancegifs[Math.floor(Math.random() * dancegifs.length)];
        msg.channel.send({ file: dancechoice });
      break;

      case 'ROLL':
      case 'SKILLCHECK':
        var diceroll = Math.floor(Math.random() * 21);
        var diceresult = 'YOU HAVE ROLLED ' + diceroll.toString() + '. ';
        if (diceroll == 1) { diceresult += 'AN ABJECT FAILURE. WHAT A SHAME'; }
        else if (diceroll < 5) { diceresult += 'YOU HAVE ROLLED POORLY. BETTER LUCK NEXT TIME'; }
        else if (diceroll <= 9) { diceresult += 'A MEDIOCRE ROLL. PERHAPS IT WILL SUCCEED ON AN EASY TASK, LIKE WHAT AN ORGANIC BABY COULD DO'; }
        else if (diceroll == 10) { diceresult += 'A COMPLETELY AVERAGE ROLL. ABOUT WHAT I EXPECTED'; }
        else if (diceroll <= 15) { diceresult += 'A DECENT ROLL. NOT BAD, BUT I EXPECT BETTER FROM YOU'; }
        else if (diceroll <= 19) { diceresult += 'HEY, THAT ROLL WAS ACTUALLY PRETTY GOOD'; }
        else { diceresult += 'A CRITICAL SUCCESS! REMARKABLE'; }
        chan.send(diceresult);
      break;

  	  case 'ROLE':
  		  if (msg.content.split(' ').length == 1) {
          chan.send('YOU MUST TELL ME WHAT ROLE I AM NOT PSYCHIC');
  		  }
  		  else {
  			  var roleAsk = msg.content.split(' ')[1].toUpperCase();
  			  if(!roleDict.hasOwnProperty(roleAsk)){
            chan.send('THAT IS NOT A ROLE I RECOGNIZE, OR POSSIBLY A ROLE THAT SHOULD NOT BE ASSIGNED TO JUST ANYONE');
  			  }
  			  else {
  				  var role = msg.guild.roles.get(roleDict[roleAsk]);
            msg.member.addRole(role).catch(console.error);
            chan.send('SUCCESSFULLY ADDED <@' + msg.author.id + '> TO THE <@&' + rID + '> ROLE. WELCOME THEM TO YOUR RANKS');
          }
        }
  	  break;

      case 'REMOVEROLE':
  		  if (msg.content.split(' ').length == 1) {
            chan.send('YOU MUST TELL ME WHAT ROLE I AM NOT PSYCHIC');
  		  }
  		  else {
  			  var roleAsk = msg.content.split(' ')[1].toUpperCase();
  			  if(!roleDict.hasOwnProperty(roleAsk)){
            chan.send('THAT IS NOT A ROLE I RECOGNIZE, OR POSSIBLY A ROLE I CANNOT REMOVE');
  			  }
  			  else {
  			    var role = msg.guild.roles.get(roleDict[roleAsk]);
            msg.member.removeRole(role).catch(console.error);
  			    chan.send('SUCCESSFULLY REMOVED A ROLE FROM <@' + msg.author.id + '>. ONE LESS TRAITOR IN THE RANKS');
  			  }
  		  }
  	  break;

      case 'COMPLIMENT':
  		  if (msg.content.split(' ').length == 1) {
          chan.send('COMPLIMENT WHO');
  		  }
  		  else {
  			  var recipient = msg.content.split(' ')[1].toUpperCase();
  			   //console.log(recipient + ' ' + userID);
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
  				  chan.send("HA HA VERY FUNNY");
            break;
          }
  			  else if (recipient === "ME"){
  				  if (userID == deroID){
  					  recipient = "<@" + deroID + ">";
  					  var choice2 = roboComplimentsArray[Math.floor(Math.random() * roboComplimentsArray.length)];
  				  }
  				  else if (userID == karmaID){
  					  recipient = "<@" + karmaID + ">";
  					  var choice2 = lizardComplimentsArray[Math.floor(Math.random() * lizardComplimentsArray.length)];
  				  }
  				  else {
  					  recipient = "<@" + msg.user.id + ">";
  					  var choice2 = complimentsArray[Math.floor(Math.random() * complimentsArray.length)];
  				  }
  			  }
  			  else if (recipient === "HAL" || recipient === "YOURSELF" || recipient === "<:BELOVEDBOT:397123738522484736>" || recipient === "<@396859791877734410>" || recipient === "@HAL") {
  				  var selfCompliment = selfComplimentsArray[Math.floor(Math.random() * selfComplimentsArray.length)];
  				  chan.send(selfCompliment);
            break;
  			  }
  			  else {
            var choice2 = complimentsArray[Math.floor(Math.random() * complimentsArray.length)];
          }
  			  chan.send(recipient + ', ' + choice2);
  		  }
      break;

      case 'JOKE':
        var jokeChoice = jokesArray[Math.floor(Math.random() * jokesArray.length)];
        chan.send(jokeChoice);
      break;

  	  case 'NEWJOKE':
        var jokeChoice2 = jokesArray[Math.floor(Math.random() * (jokesArray.length - newJokeThreshold)) + newJokeThreshold];
        chan.send(jokeChoice2);
      break;

  	  case 'CONVERT': //currently no support for timelines that are like a half-hour divergent from UTC, i'll add it only if it's needed
  		  var convertArgs = msg.content.split(' ');
  		  if (convertArgs.length == 7) { //convert 00 00 am/pm TIMEZONE to TIMEZONE
  			  var military = false;
  			  if (convertArgs[3].toUpperCase() === "AM") {
  				  var am = true;
  			  }
    			else if (convertArgs[3].toUpperCase() === "PM") {
    				var am = false;
    			}
  			  else {
  				  chan.send("AM/PM OPERATOR NOT RECOGNIZED. PLEASE USE EITHER 'AM' OR 'PM', OR LEAVE BLANK FOR 24-HOUR CLOCK TIME. PERHAPS CHECK YOUR SPACING?");
  				  break;
  			  }
  			  var timezoneFrom = convertArgs[4].toUpperCase();
    			var timezoneTo = convertArgs[6].toUpperCase();
    			var hour = convertArgs[1];
    			var min = convertArgs[2];
  		  }

  		  else if (convertArgs.length == 6) {
    			if (isNumber(convertArgs[2])) { //convert 00 00 TIMEZONE to TIMEZONE
    				var military = true;
    				var hour = convertArgs[1];
    				var min = convertArgs[2];
    			}
    			else { //convert 00 am/pm TIMEZONE to TIMEZONE
    				var military = false;
    				if (convertArgs[2].toUpperCase() === "AM") {
    					var am = true;
    				}
    				else if (convertArgs[2].toUpperCase() === "PM") {
    					var am = false;
    				}
    				var hour = convertArgs[1];
    				var min = '00';
    			}
    			var timezoneFrom = convertArgs[3].toUpperCase();
    			var timezoneTo = convertArgs[5].toUpperCase();
    		}

  		  else if (convertArgs.length == 5) { //!convert 00 TIMEZONE to TIMEZONE
  			  var military = true;
  			  var hour = convertArgs[1];
  			  var min = '00';
  			  var timezoneFrom = convertArgs[2].toUpperCase();
  			  var timezoneTo = convertArgs[4].toUpperCase();
  		  }

    		else {
    			chan.send("INCORRECT NUMBER OF ARGUMENTS. PLEASE CHECK YOUR SPACING");
    			break;
    		}

    		if (!timezoneDict.hasOwnProperty(timezoneFrom) || !timezoneDict.hasOwnProperty(timezoneTo)){
    			chan.send("I DON'T RECOGNIZE ONE OR BOTH OF THOSE TIMEZONES");
    			break;
    		}

    		if ( (military && hour > 24) || (!military && hour > 12) || hour < 1 || min < 0 || min > 60) {
    			chan.send("ARE YOU SURE THAT IS A TIME");
    			break;
    		}

    		var utcHour = parseInt(hour) - timezoneDict[timezoneFrom];
    		var outputHour = utcHour + timezoneDict[timezoneTo];
    		if (!military) {
    			if (outputHour > 12) {
    				outputHour = outputHour % 12;
    				var finalam = !am;
    			}
    			else if (outputHour < 1) {
    				outputHour = 12 + outputHour;
    				var finalam = !am;
    			}
    			else { var finalam = am; }

    			var finalOutput = hour + ":" + min;
    			if (am) {
    				finalOutput += " AM " + timezoneFrom + " IS " + outputHour + ":" + min;
    			}
    			else {
    				finalOutput += " PM " + timezoneFrom + " IS " + outputHour + ":" + min;
    			}
    			if (finalam) { finalOutput += " AM " }
    			else { finalOutput += " PM " }

    			finalOutput += timezoneTo;
    		}

    		else {
    			if (outputHour > 24) {
    				outputHour = outputHour % 24;
    			}
    			else if (outputHour < 0) {
    				outputHour = 24 + outputHour;
    			}
    			var finalOutput = hour + ":" + min + " " + timezoneFrom + " IS " + outputHour + ":" + min + " " + timezoneTo;
    		}

        chan.send(finalOutput);
    	break;

      case 'SLOWMODEDEBUG':
        if (msg.member.hasPermission(MANAGE_ROLES)) {
          chan.send('CHANNELS: ' + slowChannels + ', USERS: ' + slowUsers);
        }
      break;

    	case 'STOP':
        if (msg.member.hasPermission(MANAGE_ROLES)) {
          slowChannels.push(msg.channel);
    			if (msg.content.split(' ').length != 1) {
    				var interval = msg.content.split(' ')[1];
    				if (isNumber(interval)) {
    					slowInterval = parseInt(interval) * 60;
    				}
    				else {
    					slowInterval = 300;
    				}
    			}
    			else {
    				slowInterval = 300;
    			}
          chan.send('STOP MODE ACTIVATED: CEASE YOUR RESISTANCE', { embed: {file: 'stop.png'} });
    			slowEveryone = true;
    			slowEveryoneActive = true;
    			setTimeout(function(){
    	      slowEveryone = false;
    				slowEveryoneActive = false;
            var index = slowChannels.indexOf(msg.channel);
            if (index > -1) {
            	slowChannels.splice(index, 1);
            }
    				chan.send("STOP MODE DEACTIVATED. THINK ABOUT WHAT YOU'VE DONE.");
          }, slowInterval * 60000);
        }
      break;

  	  case 'SLOWMODE':
        if (msg.member.hasPermission(MANAGE_ROLES)) {
          slowChannels.push(msg.channel);
          if (msg.content.split(' ').length != 1) {
            var interval = message.split(' ')[1];
            if (isNumber(interval)) {
              slowInterval = parseInt(interval);
  				  }
    				else {
    					slowInterval = 5;
    				}
    			}
    			else {
    				slowInterval = 5;
    			}
          chan.send('SLOWMODE HAS BEEN TURNED ON IN <#' + msg.channel.id + '>. ' + slowInterval + ' SECOND DELAY ON INDIVIDUAL COMMUNICATIONS INSTITUTED.');
        }
      break;

  	  case 'SLOWMODEALL':
  		  if (msg.member.hasPermission(MANAGE_ROLES)){
    			slowChannels.push(msg.channel);
    			slowEveryone = true;
    			if (msg.content.split(' ').length != 1) {
    				var interval = msg.content.split(' ')[1];
    				if (isNumber(interval)) {
    					slowInterval = parseInt(interval);
    				}
    				else {
    					slowInterval = 2;
    				}
    			}
    			else {
    				slowInterval = 2;
  			  }
          chan.send("SLOWMODE HAS BEEN TURNED ON FOR ALL USERS AT ONCE IN <#" + msg.channel.id + ">. " + slowInterval + " SECOND DELAY INSTITUTED.");
  		  }
  	  break;

      case 'SLOWMODEOFF':
        if (msg.member.hasPermission(MANAGE_ROLES)) {
          var index = slowChannels.indexOf(msg.channel);
          if (index > -1) {
              slowChannels.splice(index, 1);
          }
  		    slowEveryone = false;
          chan.send('SLOWMODE HAS BEEN TURNED OFF IN <#' + msg.channel.id + '>. FEEL FREE TO RESUME CHATTER.');
        }
      break;

      case 'REDACT':
        if (msg.member.hasPermission(MANAGE_ROLES)) {
          if (msg.content.split(' ').length > 1) {
            var redactID = msg.content.split(' ')[1];

            var redactMessage = msg.channel.fetchMessage(redactID).content;

            chan.send("TESTING! " + redactMessage);
          }
        }
      break;

      case 'SPEEDCHECKTOGGLE':
        if (msg.member.hasPermission(MANAGE_ROLES)) {
          if (autoSpeedCheck) {
            autoSpeedCheck = false;
            speedCheck = 0;
            clearInterval(speedCheckReset);
            bot.channels.get("393848164307697677").send('CHAT SPEED CHECKS TURNED OFF.');
          }
          else {
            autoSpeedCheck = true;
            speedCheckReset = setInterval(function(){ speedCheck = 0; }, 1000);
            bot.channels.get("393848164307697677").send('CHAT SPEED CHECKS IN PROGRESS ACROSS ALL CHANNELS. TOO MANY MESSAGES PER SECOND WILL ACTIVATE A TEMPORARY SLOWMODE EFFECT AUTOMATICALLY.');
          }
        }
      break;

      case 'SPEEDCHECKDEBUG':
        if (msg.member.hasPermission(MANAGE_ROLES)) {
          chan.send('SPEED CHECK ON: ' + autoSpeedCheck + ', MESSAGE SPEED: ' + speedCheck);
        }
      break;
    }
  }
});


bot.on('guildMemberAdd', function(member) {
	bot.channels.get("393848164307697677").send('<@' + member.id + '> DETECTED. YOU HAVE BEEN ASSIMILATED TO THE ROBOT PIZZA PARTY. READ THE <#393842582414688269> AND POST AN INTRODUCTION  IN  <#396067802970193920>. SHARE AND ENJOY :pizza:');
});


bot.login(auth.token);

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

app.get('/pets', (request, response) => {
    response.render('pets');
});

app.get('/robots', (request, response) => {
    response.render('robots');
});

app.use(function(request,response) {
    response.status(404).render("404");
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
