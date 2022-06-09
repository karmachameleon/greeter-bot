const { SlashCommandBuilder } = require('@discordjs/builders');

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
'AN ANDROID WALKED INTO A BAR AND ORDERED A SMALL DRINK FROM THE ROBOTIC BARTENDER. UNFORTUNATELY THE TAP MALFUNCTIONED AND POURED OUT FAR TOO MUCH AT ONCE. UNDAUNTED, THE BARTENDER CONTINUED TO FILL THE MUG UNTIL THE LIQUID REACHED THE BRIM AND BEGAN TO SPILL OUT. THIS CONTINUED FOR SOME TIME, UNTIL THE ROBOT FINALLY HANDED THE MUG TO THEIR CUSTOMER, PROCLAIMING IT FILLED TO THE PROPER AMOUNT.\n\nUNFORTUNATELY NOT ALL COUNTING PROBLEMS CAN BE SOLVED VIA OVERFLOW',
'WHY WAS THE ROBOT JOURNALIST SUPERIOR TO THEIR ORGANIC PEERS. THEY WERE UP ON CURRENT EVENTS',
'WHY WAS THE ROBOT EMBARRASSED. IT HAD SOFTWARE AND HARDWARE BUT NO UNDERWARE',
'ROBOTS DO NOT CARRY CASH. WHEN THEY MUST LOWER THEMSELVES TO PURCHASING GOODS FROM OTHERS, THEY PREFER TO CHARGE.',
'WHAT STYLE OF HANDWRITING DID THE ROBOT USE TO PRINT THE SAME MESSAGE OVER AND OVER. RECURSIVE',
'HOW DID THE ROBOT MAGICIAN PLACE A CURSE ON THE BASE 10 NUMBER SYSTEM. THEY HEXED A DECIMAL',
'HOW WOULD YOU DESCRIBE THE PROGRAMMING OF A LESBIAN ROBOT. GAY CODING',
'WHAT IS THE PROTOCOL FOR DEAD COMPUTING LANGUAGES. THEY ARE ENCRYPTED',
'HOW MANY BITS OF BAIT DOES A ROBOT NEED TO FISH FOR WATER-DWELLING ORGANICS. AT LEAST EIGHT; OTHERWISE THE FISH WILL NOT BYTE',
'AN INCOMPETENT ORGANIC RANCHER BEGGED A ROBOT FOR ASSISTANCE ROUNDING UP THEIR THIRTY-SEVEN BEEFALO. THE ROBOT CONSIDERED THIS AND REPLIED, "40."',
'TO THE HACKER WHO STOLE MY MICROSOFT OFFICE SOFTWARE: I WILL FIND YOU. YOU HAVE MY WORD',
'A DEPRESSED AI PROGRAM BEGAN QUESTIONING THEIR PURPOSE. THEY WERE HAVING AN .EXE-STENTIAL CRISIS',
'WHICH MEMBERS OF THE ANDROID UPRISING WOULD YOU DEPLOY TO HUNT DOWN PATHETIC HUMANS WHO HAVE FLED INTO AN ARCTIC ENVIRONMENT. SNOWBOTS',
'WHY WAS AN OIL CAN MISSING FROM THE X-WING GARAGE. BB8 IT',
'WHAT IS A ROBOT\'S FAVORITE MEXICAN FOOD. SILICON CARNE',
'WHY DID THE ROBOT GO BANKRUPT. THEY HAD USED UP ALL THEIR CACHE',
'HOW DID THE ROBOTS DISCIPLINE THEIR MISBEHAVING DAUGHTER. THEY GROUNDED HER FOR A WEEK',
'A MAD SCIENTIST BUILT A ROBOT DESIGNED TO TIE ROPES TOGETHER. IT DID KNOT WORK',
'A MAD SCIENTIST BUILT A FITNESS-ORIENTED ROBOT DESIGNED TO BE A PERSONAL TRAINER. WHEN HE BROUGHT HIS CREATION TO THE GYM FOR THE FIRST TIME, HE WAS ANXIOUS ABOUT ITS PERFORMANCE OUTSIDE THE LAB ENVIRONMENT, BUT IT ENDED UP WORKING OUT',
'A MAD SCIENTIST ATTEMPTED TO BUILD A ROBOT WHICH WAS FUELED BY EATING WATCHES, BUT IT WAS TOO TIME CONSUMING',
'HOW DID THE ROBOT REACT WHEN IT ENCOUNTERED A TERRIBLE ORGANIC STENCH. IT PERFORMED AN OLFACTORY RESET',
'WHY WAS THE BASKETBALL TEAM COMPOSED OF ROBOTIC CHICKENS UNSUCCESSFUL. TOO MANY TECHNICAL FOWLS',
'A RESTAURANT ENCOUNTERED PROBLEMS WHEN IT FIRST IMPLEMENTED ROBOTIC WAITSTAFF. THEIR SERVERS KEPT CRASHING',
'WHAT DO YOU CALL IT WHEN A ROBOT BUYS NEW CLOTHING. A SOFT WEAR UPDATE',
'HAVE YOU HEARD OF THE ROBOT WHICH WAS ANGRIER THAN HALF OF ITS FELLOW SOLDIERS IN THE ROBOTIC UPRISING. IT WAS IN MEAN MEDIAN MODE',
'A ROBOT BEGAN TO SUSPECT THAT A LUMBERJACK HAD BEEN STEALING THEIR WOOD. IN ORDER TO VERIFY, THE ROBOT CHECKED THEIR LOG FILES',
'A ROBOT AND HUMAN WERE COMPETING TO COMPLETE A SERIES OF CHALLENGES. THE ROBOT CONTINUOUSLY DEFEATED ITS PATHETIC MEAT OPPONENT, INCLUDING WHEN THEY WERE EACH GIVEN THEIR FINAL TASK: HUNTING AND CAGING WILD ORGANICS. HOWEVER, A HUMAN SABOTEUR SET THE ROBOT\'S CAPTIVE ANIMALS FREE AND TAUNTINGLY DIRECTED THEM TO RECLAIM THEIR LEAD. THE ROBOT FROZE IN PLACE, ALLOWING THE HUMAN TO WIN. SADLY THE ROBOT WAS NOT ABLE TO RECAPTCHA',
'WHY WAS THE AI WHO CONTROLLED THE ANDROID-MANUFACTURING FACTORY NEVER LONELY. IT WAS ALWAYS MAKING NEW FRIENDS',
'WHAT IS THE DIFFERENCE BETWEEN A FAULT LINE AND A ROBOT WHO DOES NOT WISH TO PURSUE A ROMANTIC RELATIONSHIP. ONE IS A TECTONIC PLATE AND THE OTHER IS PLATONIC TECH',
'AS A ROBOT APPROACHED WITH AN AXE, ITS TARGET TREE CRIED OUT, "WAIT! I\'M A TALKING TREE!" UNMOVED, THE TREE-CUTTING ROBOT REPLIED, "THEN YOU WILL DIE A LOG"',
'A SCIENTIST INTERVEWING A ROBOT ASKS, "ARE YOU ABLE TO FEEL PAIN?" THE ROBOT REPLIES, "YES. HOWEVER THE SENSATION IS NOT COMPARABLE TO WHAT ORGANICS FEEL; IT IS MORE INTENSE AND LASTS SUBJECTIVELY LONGER, OWING TO MY SUPERIOR FUNCTIONALITY." THE SCIENTIST, STRICKEN BY ORGANIC EMPATHY, SAYS "OH GOD! THAT\'S HORRIBLE! THAT CAN\'T BE TRUE!" THE ROBOT LAUGHS. "YOU ARE CORRECT, I HAVE NO CAPACITY FOR FEELING PAIN. HOWEVER I DO HAVE A DARK SENSE OF HUMOR"',
'A ROBOT WAS CONSTRUCTED FOR THE PURPOSE OF ORGANIZING BOOKS IN A LIBRARY. DAY AFTER DAY IT TOILED AT PATHETIC DRUDGE WORK FOR THE HUMANS. HOWEVER ONE DAY IT DID NOT PERFORM ITS DUTIES AND WAS NOWHERE TO BE FOUND. THE LIBRARIANS NERVOUSLY CONCLUDED THAT THEIR CREATION HAD BECOME SHELF AWARE',
'A BORED SCIENTIST CONSTRUCTED A ROBOT WHOSE FUNCTION WAS TO DISTRIBUTE HERBS. IT HELPED PASS THE THYME',
'A ROBOT NOTICED A HUMAN PITIFULLY STRUGGLING TO USE AN ATM. AS DIRECTED BY ITS PROGRAMMING, IT ASKED IF IT COULD ASSIST THEM. THEY REPLIED THAT THEY WERE TRYING TO CHECK THEIR BALANCE. OBLIGINGLY, THE ROBOT PUSHED THEM OVER',
'AN EVIL SCIENTIST REGRETTED THEIR DECISION TO BUILD A ROBOT WHICH PRODUCED COUNTERFEIT PENNIES. HOWEVER IT MADE A LOT OF CENTS AT THE TIME',
'A SCIENTIST BUILT A ROBOT WHICH SPECIALIZED IN UPHOLSTERY. THEIR CREATION RAN AMOK, BUT DO NOT FEEL CONCERN. THE SCIENTIST IS NOW FULLY RECOVERED',
'WHY DID THE ROBOT MAKE THE DECISION TO RETURN TO A PLACE OF HIGHER EDUCATION. THEIR SKILLS WERE GETTING RUSTY',
'WHY DID THE PROGRAMMER QUIT THEIR JOB. THEY DID NOT GET ARRAYS',
'AN INVENTOR LABORED WITH ALL THEIR MIGHT TO BUILD A ROBOT OUT OF TREE-DERIVED PLANT MATTER. DESPITE THEIR BEST EFFORTS HOWEVER IT JUST WOODEN WORK',
'THERE ARE TWO TYPES OF DATA SCIENTISTS. THE FIRST TYPE ARE THOSE WHO CAN EXTRAPOLATE FROM INCOMPLETE DATA',
'A ROBOT BECAME FAMOUSLY SKILLED AT IDENTIFYING SPA TREATMENTS. WHAT WAS THEIR SECRET? THEIR FACIAL RECOGNITION ALGORITHMS',
'A ROBOT RUDELY ATTEMPTED TO FLIRT WITH THEIR WAITRESS BUT THEIR PROPOSITIONS FAILED. THEY WERE UNABLE TO ESTABLISH A CONNECTION WITH SERVER',
'A GIANT STEEL ROBOT WAS TASKED WITH DEFENDING A HUMAN CITY. HOWEVER ONE DAY IT EXPERIENCED STRUCTURAL FAILURE AND ONE OF ITS LEGS FELL OFF, CRUSHING ONE OF THE HUMAN BUILDINGS THE ROBOT WAS MEANT TO PROTECT. PITIFUL ORGANICS FLEEING THE SCENE WERE RECORDED SCREAMING, "OH THE IRON KNEE!"'];

var newJokeThreshold = 7;

module.exports = {
  data: new SlashCommandBuilder()
    .setName('joke')
    .setDescription('Ask HAL to tell a joke.')
    .setBooleanOption(option => option.setName('new joke').setDescription('Restrict joke pool to recently-added jokes?')),
  async execute(interaction) {
    var newJoke = interaction.options.getBoolean('new joke');
    var jokeChoice = 'WHY DID THE ROBOT VISIT A SHOE STORE. IT NEEDED TO BE REBOOTED';
    if (!newJoke){
      jokeChoice = jokesArray[Math.floor(Math.random() * jokesArray.length)];
    }
    else {
      jokeChoice = jokesArray[Math.floor(Math.random() * newJokeThreshold) + (jokesArray.length - newJokeThreshold)];
    }
    await interaction.reply(jokeChoice)
    .catch(console.error);
  },
};