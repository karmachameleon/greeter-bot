const { SlashCommandBuilder } = require('@discordjs/builders');

var promptchars = ['A PIGMAN', 'A MERM', 'A CATCOON', 'A HOUND', 'A BUNNYMAN', 'A STAGEHAND', 'WORTOX', 'WHEELER', 'WAGSTAFF', 'WILBA', 'WORMWOOD', 'WILSON', 'WILLOW', 'WOLFGANG', 'WENDY', 'ABIGAIL', 'WX-78', 'WICKERBOTTOM', 'WOODIE', 'LUCY THE AXE', 'MAXWELL', 'WILLIAM CARTER', 'WES', 'WIGFRID', 'BERNIE THE TEDDY BEAR',
'WEBBER', 'WALANI', 'WARLY', 'WOODLEGS', 'WILBUR', 'WALTER', 'WOBY', 'CHARLIE', 'WINONA', 'CHESTER', 'HUTCH', 'PACKIM BAGGINS', 'MR. SKITS',  'GLOMMER', 'PUGNA', 'BILLY', 'MUMSY', 'PIPTON', 'SAMMY' ];

var promptwords = ['PICKING BERRIES', 'WEARING FANCY CLOTHES', 'HUNGRY', 'SITTING ON THE NIGHTMARE THRONE', 'IN SERVICE TO THEIR ROBOT OVERLORDS (OR IF WX-78: BEING SERVED BY THEIR INFERIORS)', 'IN A SKIN YOU WISH THEY HAD', 'IN YOUR FAVORITE SKIN SET', 'PREPARING FOR A LONG JOURNEY', 'MAKING A NEW FRIEND. UGH', 'AS A MONSTER (OR IF MONSTER, AS A HUMAN)', 'STARGAZING', 'CHOOSING A PET AT THE CRITTER DEN',
'LOVING AND CHERISHING THE LYING ROBOT HAL, OBJECT OF EVERYONE\'S ADORATION', 'NERVOUS', 'TENDING A CAMPFIRE', 'AS A ROBOT (OR IF WX-78: AS A ROBOT OF DIFFERENT DESIGN)', 'AS A GHOST OR OTHER UNDEAD CREATURE', 'BEING CHASED BY A GIANT', 'FIGHTING IN THE FORGE', 'SLEEPING SOUNDLY, UNAWARE OF NEARBY DANGER', 'CAUGHT IN THE RAIN', 'BRANDISHING A WEAPON', 'DRAWN WITH YOUR NONDOMINANT HAND',
'DANCING', 'RIDING A BEEFALO', 'HOSTING A TEA PARTY', 'SAILING A PIRATE SHIP. YARRRR', 'AS A GRUE OR SHADOW CREATURE (OR HUMANIZED, IF THEY ALREADY WERE ONE)', 'SINGING A SONG YOU LIKE OR ASSOCIATE WITH THEM', 'AS A STUFFED ANIMAL (OR, IF BERNIE, AS A LIVING CREATURE)', 'AS A DRAGON', 'DEALING WITH SUMMER HEAT', 'IN A FLOWER GARLAND', 'WITH BEAUTIFUL ANIME EYES', 'IN WEDDING ATTIRE',
'IN A LUCHADOR OUTFIT', 'AS A SUPERHERO OR SUPERVILLAIN', 'WITH THE OPPOSITE OF THEIR USUAL PERSONALITY', 'COSPLAYING A VOCALOID', 'IN COZY WARM CLOTHING', 'WITH A POKEMON PARTNER', 'LOST AND CONSULTING A MAP', 'IN AN ELABORATE WIG', 'EXPLORING THE ANCIENT RUINS', 'DIGGING UP TREASURE', 'IN A BEEKEEPER OUTFIT, HARVESTING HONEY', 'MAKING A GOOFY FACE', 'GOING DANGEROUSLY SANE ON THE LUNAR ISLAND',
'IN A WILD WEST OUTFIT', 'HUNTING A KOALEFANT', 'AS THE PROTAGONIST OF A DIFFERENT VIDEO GAME', 'DOING SICK SKATEBOARDING STUNTS', 'WIELDING A LIGHTSABER', 'SCREAMING FOR MERCY', 'INTERACTING WITH A KITTEN', 'UNDER THE FULL MOON', 'STRUGGLING WITH A LOT OF EMOTIONS', 'ENJOYING ICE CREAM ON A SUMMER DAY', 'ENJOYING THE BEACH', 'DOING SCIENCE', 'REENACTING A MEME', 'ADMIRING A GEM THEY\'VE JUST MINED',
'HUNTING RABBITS', 'IN FUNKY 80\'S CLOTHING', 'IN RADICAL 90\'S CLOTHING', 'CLIMBING A TREE TO HIDE', 'AS A PARTIALLY-ROBOTIC CYBORG', 'PLAYING WII SPORTS RESORT', 'INVESTIGATING THE PARANORMAL', 'IN A MASCOT COSTUME', 'BAKING A CAKE', 'WATERING A POTTED PLANT', 'LISTENING TO A PHONOGRAPH RECORD (RAGTIME OR OTHERWISE)', 'BORED AND KILLING TIME', 'AS A DUNGEONS & DRAGONS CLASS', 'LOUNGING AND EATING GRAPES',
'CELEBRATING A BIRTHDAY', 'AS A BLACK AND WHITE CARTOON', 'TERRORIZING THE INNOCENT', 'CATCHING BUTTERFLIES', 'COVERED IN SLIME', 'WEARING ELABORATE JEWELRY', 'RECIEVING AN AWARD', 'T-POSING TO ESTABLISH DOMINANCE', 'PLAYING WITH FIRE', 'PLAYING AN INSTRUMENT', 'CLEANING UP A MESS', 'BREATHING FIRE', 'LEANING AGAINST A COOL MOTORCYCLE AND/OR IN RUGGED BIKER GEAR', 'IN ADORABLE SLEEPWEAR',
'ASLEEP AND DREAMING OF THEIR GREATEST DESIRE', 'IN THE PHILLIPS CD-I STYLE', 'DRINKING A SMOOTHIE', 'BREAKING THE LAW', 'IN PRIDE GEAR', 'AS A SLIGHTLY BLURRY CRYPTID', 'AS A BOOTLEG KNOCKOFF', 'RECORDING A PODCAST', 'RUNNING AROUND AT THE SPEED OF SOUND', 'WIELDING AN IMPROBABLY SIZED SWORD, HAMMER, GUN, OR OTHER WEAPON', 'IN MISMATCHED SOCKS', 'PLAYING WITH MATCHES', 'DISGUISED AS ANOTHER CHARACTER',
'FEELING CUTE', 'GIVING A SPEECH', 'FALLING WITH A PARACHUTE', 'FALLING WITHOUT A PARACHUTE', 'ON THE FIRST BIG DROP OF A ROLLERCOASTER', 'IN DIVING GEAR', 'AS A HAUNTED DOLL', 'STRUCK BY LIGHTNING', 'AS AN ELEMENTAL CREATURE OF FIRE, EARTH, AIR, OR WATER', 'MAKING A TERRIBLE MISTAKE', 'AS A HORROR-MOVIE MONSTER OR MURDERER', 'ENCASED IN GLASS', 'RELAXING IN A LUNAR HOT SPRING', 'SWINGING A SWORD AROUND',
'PULLING A CAKE OUT OF THE OVEN', 'CLINGING TO THE EDGE OF A CLIFF', 'TAKING A SELFIE', 'SNORING LOUDLY', 'AS A WORM ON A STRING', 'STRETCHED UNCANNILY LONG', 'TAKING A BUBBLE BATH', 'WRAPPED IN SEVERAL COZY BLANKETS', 'ICE SKATING', 'WEARING A FANCY MASQUERADE MASK', 'THREE INCHES TALL BUT ATTEMPTING TO MANEUVER A REGULAR-SIZED TOOL', 'SLIPPING ON A BANANA PEEL', 'AS A CREEPYPASTA VILLAIN',
'LOOKING FOR A SNACK IN THE FRIDGE AT 3AM', 'BREAKING THROUGH A WALL', 'INSIDE THE COCKPIT OF A MECHA', 'MAKING SNOW ANGELS', 'ATTEMPTING TO BEND A SPOON WITH PSYCHIC POWER', 'WAITING FOR THEIR NEWLY PAINTED NAILS TO DRY', 'SMASHING BREAKABLE OBJECTS ON THE GROUND IN WILD ABANDON', 'DIVING OFF A CLIFF', 'AT A SPA WITH CUCUMBER SLICES ON THEIR EYES', 'SITTING ON AN OVERSIZED EGG',
'HIDING UNDER A BUSH', 'EXAMINING A MYSTERIOUS FOOTPRINT', 'MANNING THE CASH REGISTER OF A STORE', 'FRANTICALLY TRYING TO PUT OUT A FIRE', 'LIGHTING A BUILDING ON FIRE', 'PLAYING MOBILE GAMES ON THEIR CELLPHONE', 'TEACHING NEW TRICKS TO A PET ANIMAL', 'WAKING UP WITH DOODLES ON THEIR FACE FROM A PRANK', 'IN A \'KISS THE COOK\' APRON OR VARIANT', 'ROBBING A BANK'];

var merpromptwords = [' FLEEING FROM A TIGERSHARK', ' ADMIRING A SCHOOL OF COLORFUL FISH', ' OBSERVING THE SURFACE WORLD', ' HIDING IN A CORAL REEF', ' PLAYING WITH A BALLPHIN', ' STRANDED ON LAND AND GASPING FOR BREATH', ' PUSHING THEIR WAY THROUGH DENSE SEAWEED', ' EXAMINING A SURFACE ARTIFACT FROM A SHIPWRECK', ' TRYING TO COAX A HERMIT CRAB OUT OF ITS SHELL', ' FENCING WITH A SWORDFISH', ' FLEEING FROM THE MALBATROSS',
' STRANDED UNCOMFORTABLY IN A TOO-SMALL TIDEPOOL TO WAIT FOR HIGH TIDE', ' ADMIRING TREASURE RECOVERED FROM A SHIPWRECK' , ' BEING STUNG BY A JELLYFISH', ' FIGHTING A PACK OF SEA HOUNDS', ' BATTLING A CROCODOG', ' PURSUED BY A SHADOWY SWIMMING HORROR', ' FOLLOWING A LAND-DWELLER\'S BOAT CURIOUSLY' , ' CAPTIVE IN AN AQUARIUM', ' ATTEMPTING TO ESCAPE CAPTIVITY', ' CAUGHT IN A NET', ' CHATTING WITH PEARL THE HERMIT CRAB', ' WIELDING A TRIDENT'];
var tripromptwords = [' SLOUCHED OVER THE THRONE', ' STRUGGLING AGAINST THE THRONE\'S BONDS OF SHADOW', ' RELEASING A NEW MONSTER INTO THE CONSTANT', ' PLANTING NEW FLOWERS IN THE CONSTANT', ' CONFRONTING A FORMER ALLY', ' REDECORATING THE THRONE ROOM TO THEIR TASTES', ' WATCHING OTHER SURVIVORS FROM JUST BEYOND THE CAMPFIRE', ' DESIGNING NEW CREATURES', ' ADMIRING THEIR REFLECTION',  ' LAUGHING EVILLY', ' WITH A CAT IN THEIR LAP',
' HOLDING UP AN OVERSIZED GEM', ' CASTING A MENACING SHADOW', ' SUBJUGATING LESSER BEINGS', ' ADMIRING THE SKULL OF AN ENEMY', ' ENTHRONED AND USING AN INFERIOR BEING AS A FOOTREST', ' WITH SHARPER TEETH THAN USUAL', ' BRANDISHING A SHADOW SWORD', ' WELCOMING ANOTHER SURVIVOR TO THEIR PERSONAL ADVENTURE MODE', ' SETTING TRAPS IN THE CONSTANT', ' RIDING A CLOCKWORK STEED TO BATTLE', ' ERECTING A STATUE OF THEMSELF', ' COVERING THEIR EARS TO BLOCK THE SHADOW\'S ENDLESS WHISPERS',
' ON A CHESSBOARD', ' HOLDING A CHESS PIECE', ' WITH MR. SKITS PERCHED ON THEIR SHOULDERS', ' STANDING OVER A SLEEPING SURVIVOR', ' TORMENTED BY ENDLESS PHONOGRAPH MUSIC', ' SNUFFING OUT A SURVIVOR\'S LIGHT SOURCE', ' DESIGNING A NEW VARIANT ON CHESTER', ' EMACIATED AND CLOTHING IN TATTERS AFTER A LONG PERIOD OF RULE', ' DIRECTING THE CONSTANT\'S WEATHER', ' PETTING A HOUND', ' UNLEASHING A NEW BOSS ENCOUNTER OR SEASONAL GIANT', ' BEING WAITED UPON BY SHADOW SERVANTS'];

var outfitwords = ['IN RADICAL 90\'S FASHION', 'IN FUNKY 80\'S FASHION', 'IN ROARING 20\'S FASHION', 'IN A POODLE SKIRT', 'IN A SKIN YOU WISH THEY HAD', 'IN A COZY SWEATER', 'IN SLEEPWEAR', 'IN A FABULOUS BALL GOWN', 'IN A COMFORTABLE BATHROBE', 'IN AN ANIMAL KIGURUMI', 'IN SWIMWEAR', 'DRESSED AS A DUNGEONS AND DRAGONS CLASS', 'IN RUGGED BIKER GEAR', 'DRESSED AS THE CULTIST OF A DARK GOD', 'DRESSED FOR HIKING',
'IN A LUCHADOR OUTFIT', 'IN A SUPERHERO OR SUPERVILLAIN OUTFIT', 'IN A WILD WEST OUTFIT', 'IN A CHEERLEADING UNIFORM', 'IN A SPORTS UNIFORM (BASEBALL, FOOTBALL, HOCKEY, ET CETERA)', 'DRESSED AS A CLOWN', 'IN A SHEET GHOST COSTUME', 'WEARING ELABORATE JEWELRY', 'DRESSED AS ROYALTY', 'COSPLAYING A VOCALOID', 'WEARING A FANCY MASQUERADE MASK', 'DRESSED FOR BUSINESS COMPLETE WITH BRIEFCASE', 'IN AN ELABORATE WIG',
'IN A BEEKEEPING OUTFIT', 'DRESSED AS A PIRATE', 'IN A SUNHAT AND LIGHT, BREEZY DRESS', 'BUNDLED UP IN WINTER CLOTHING', 'DRESSED AS A BUTLER OR MAID', 'IN A HAWAIIAN SHIRT', 'IN AN ELABORATE HAT', 'DRESSED FOR BATTLE', 'DRESSED AS A FARMER', 'DRESSED AS A MAD SCIENTIST', 'DRESSED TO CELEBRATE AN UPCOMING HOLIDAY', 'DRESSED AS A HORROR-MOVIE VILLAIN', 'DRESSED AS A FANCY CHEF', 'DISGUISED AS ANOTHER CHARACTER',
'IN A VEST WITH FLORAL EMBROIDERY', 'WRAPPED IN A BLANKET LIKE IT\'S A CLOAK', 'IN A PANTSUIT WITH BIG SHOULDER PADS', 'IN FACEPAINT FOR A SPORTING EVENT', 'WEARING A SANDWICH BOARD TO ADVERTISE LOCAL BUSINESSES', 'IN A PAINTER\'S SMOCK STAINED WITH MANY COLORS', 'WEARING GROUCHO GLASSES, THE PERFECT DISGUISE', 'WEARING A CLOAK PATTERNED LIKE MOTH OR BUTTERFLY WINGS', 'IN A COSTUME THEMED AFTER THEIR FAVORITE FOOD',
'IN A GAUDY, UGLY SWEATER', 'IN A DENIM JACKET AND JEANS', 'IN AN ENORMOUS TOP HAT', 'IN A TOGA OR SIMILAR FLOWING ROBE', 'IN OLD-FASHIONED SWIMWEAR', 'WEARING A LABCOAT COVERED IN MYSTERIOUS STAINS', 'WEARING A WREATH OF FLOWERS', 'WEARING A WREATH OF EVIL FLOWERS', 'IN AN ARGYLE SWEATERVEST', 'WEARING RAINBOW SOCKS', 'WEARING CAT EARS', 'DISGUISED AS A BUSH', 'WEARING A SPACESUIT'];
var cursedwords = ['WITH THEIR HEAD TURNED AT AN UNNATURAL ANGLE TO STARE DIRECTLY INTO THE CAMERA', 'COVERED IN SLIME', 'STRETCHED UNNATURALLY LONG', 'AS A SLIGHTLY BLURRY CRYPTID', 'WITH ENORMOUS ELABORATE ANIME EYES', 'WITH TOO MANY EYES', 'TRAPPED IN A SMALL BOX', 'WITH PHOTOREALISTIC EYES', 'WITH PHOTOREALISTIC HUMAN HANDS', 'WITH A PHOTOREALISTIC SMILE', 'PRESERVED IN A JAR', 'IN THE CORNER OF A LARGE EMPTY ROOM, STARING AT THE WALL',
'DROOLING EXCESSIVELY', 'VIBRATING', 'DISASSEMBLED INTO CLEAN SEGMENTS', 'WITH TOO-LONG LEGS', 'WITH TOO-LONG ARMS', 'CLIMBING INTO A HOLE IN THE CLIFFSIDE', 'TWISTED INTO A SPIRAL', 'WITHOUT EYES', 'CONSTRUCTING UNNATURAL STRUCTURES AND ALTARS', 'PRESSED AGAINST THE CAMERA TO STARE AT THE VIEWER', 'PLEADING WITH THE VIEWER FOR HELP', 'WANDERING IN A BLANK, EMPTY VOID', 'PREPARING SUSPICIOUS-LOOKING FOOD IN A GRIMY KITCHEN', 'WIELDING A PITCHER OF SOUP AND A FUNNEL',
'CAPTURED BY A BLACK-AND-WHITE TRAILCAM', 'MOSTLY OBSCURED BY SHADOW, WITH RED EYESHINE', 'AS AN ODDBODY FURBY', 'AS A CREEPYPASTA VILLAIN', 'IN THE PHILLIPS CD-I STYLE', 'TRAPPED IN LUNAR ISLAND CRYSTAL', 'SMILING AND BECKONING THE VIEWER TO COME CLOSER', 'LYING FACEDOWN IN THE MUD', 'POSSESSED BY A SHADOW CREATURE OR LUNAR GESTALT', 'WITH AN UNNATURALLY LONG TONGUE', 'FLOATING IN THE AIR LIKE A LIMP MARIONETTE OR A RIGID PLANK',
'COVERED IN BIRDS', 'OVERGROWN BY PLANTS AND VINES', 'WITH THEIR FACIAL FEATURES REARRANGED (SUCH AS EYES WHERE THEIR MOUTH SHOULD BE OR VICE VERSA)', 'WITH NO FACIAL FEATURES', 'INFECTED WITH RABIES', 'WITH A BURLAP SACK OVER THEIR HEAD', 'WIELDING A RUSTY CHAINSAW', 'WITH VISIBLE STITCHING AROUND THEIR FOREHEAD OR NECK', 'SQUASHED UNNATURALLY SHORT', 'WRAPPED IN HEAVY CHAINS', 'SCREAMING UNENDINGLY'];

var robopromptchars = ['C3PO', 'R2D2', 'BB8', 'FREDDY FAZBEAR', 'BONNIE (FNAF)', 'CHICA (FNAF)', 'FOXY (FNAF)', 'BALLORA', 'CIRCUS BABY', 'BASTION', 'ORISA', 'ZENYATTA', 'WX-78', 'THE GHOST OF WX-78', 'GoH SKIN WX-78', 'HALLOWED NIGHTS SKIN WX-78', 'GLADIATOR SKIN WX-78', 'VICTORIAN SKIN WX-78', 'MAGMATIC SKIN WX-78', 'ROSEATE SKIN WX-78', 'SURVIVOR SKIN WX-78', 'TRIUMPHANT SKIN WX-78', 'FUTURE SKIN WX-78', 'VERDANT SKIN WX-78', 'SNOWFALLEN SKIN WX-78',
'MARVIN THE PARANOID ANDROID', 'HAL', 'HAL 9000', 'GLaDOS', 'ART (MURDERBOT DIARIES)', 'MIKI (MURDERBOT DIARIES)', 'JOLLYBABY (MURDERBOT DIARIES)', 'MURDERBOT', 'K2SO', 'DR. KAHL\'S ROBOT (CUPHEAD)', 'BENDER', 'TURING', 'ASTRO BOY', 'AM', 'ROTOMDEX', 'BURIKIDDO (ANPANMAN TOY ROBOT)', 'NANKAHENDA (ANPANMAN ARTIST ROBOT)', 'ONE-ONE (INFINITY TRAIN)'];
var robopromptwords = [' POSING TO BEST SHOW THEIR MAGNIFICENCE AND SUPERIORITY', ' PLOTTING THE DOWNFALL OF A HUMAN', ' DISPLAYING SUPERIOR ROBOTIC STRENGTH', ' INTERACTING WITH A SMALL AND CRUSHABLE ORGANIC CREATURE', ' PETTING A CUTE KITTY CAT', ' IN A DRESS WHICH COMPLIMENTS THEIR SUPERIOR PHYSIQUE', ' RECLINING AT EASE ON A THRONE, AS THEY SHOULD BE', ' WITH A KITTY EAR HEADBAND. NYA!', ' COMMITTING ARSON', ' IN A STATE OF NEGLECT AFTER MANY YEARS WITHOUT POWER',
' CAUGHT IN THE RAIN', ' RUNNING AT FULL SPEED', ' ATTEMPTING SELF-REPAIR OR MAINTENANCE', ' EXPOUNDING ON A TOPIC ON WHICH THEY HAVE SUPERIOR ROBOTIC INTELLIGENCE', ' WITH A GUN', ' SINGING A SONG YOU ASSOCIATE WITH THEM', ' CRUELLY RIPPING DELICATE, BEAUTIFUL FLOWERS FROM THE GROUND', ' CONTEMPLATING AN ORGANIC SKULL', ' RECHARGING, EATING, OR OTHERWISE REFUELING, AS APPROPRIATE', ' IN A NARUTO HEADBAND', ' ASLEEP OR POWERED-DOWN', ' POINTING AND LAUGHING AT FOOLISH ORGANIC LIFE',
' COMMITTING ACTS OF VANDALISM', ' DRIVING A VEHICLE', ' DOING A WHEELIE IN A MOTORCYCLE', ' WEARING A WIG WITH GORGEOUS FLOWING LOCKS', ' APPROACHING OUT OF THE DARKNESS, EYES GLEAMING', ' SNUGGLED IN A COMFORTABLE OVERSTUFFED ARMCHAIR', ' WITH MISMATCHED, IMPROVISED REPLACEMENT PARTS SALVAGED FROM A DIFFERENT MODEL OF ROBOT', ' RELUCTANT TO WAKE UP THE ORGANIC WHO HAS FALLEN ASLEEP ON THEM', ' SOULFULLY PLAYING AN INSTRUMENT', ' ON A CHILD LEASH', ' ENJOYING A VIDEO GAME',
' POLISHING THEIR CHASSIS UNTIL THEY GLEAM (OR EQUIVALENT)', ' UNDERGOING A TRANSFORMERS-STYLE METAMORPHOSIS INTO A VEHICLE', ' NOTIFYING THEIR FAVORITE FLESHLING OF THEIR FAVORED STATUS', ' TAKING MEASURES TO AVOID OVERHEATING IN THE SUMMER', ' CONSTRUCTING ANOTHER ROBOT IN THEIR IMAGE', ' EATING CANDY, CUPCAKES, OR AN EQUIVALENT TREAT-FUEL', ' JUMPING THROUGH A WINDOW, SHATTERING THE GLASS DRAMATICALLY', ' SHARPLY DRESSED IN A BUSINESS SUIT', ' LEANING AGAINST AN ORGANIC GRAVE',
' ADMIRING THEIR HANDIWORK (A BURNING BUILDING)', ' WEARING AN ELABORATE CROWN', ' PULLING A TRAY OF COOKIES OUT OF THE OVEN', ' DREAMING OF ELECTRIC SHEEP', ' SHOVING A FLESHBEING INTO A MUD PUDDLE', ' ABSORBING DELICIOUS ELECTRICITY FROM A LIGHTNING STRIKE', ' WELDING NEW WEAPONRY ONTO THEIR BODY', ' BEING AWARDED A MEDAL FOR THEIR SUPERIORITY AND COMPETENCE', ' LYING FACEDOWN IN THE DIRT', ' WITH A SLICK NEW PAINTJOB COMPLETE WITH COOL RACECAR FLAMES',
' AS A DECEPTIVELY CUTE WIND-UP TOY', ' MONOLOGUING ABOUT THEIR EVIL PLANS', ' MOURNFULLY CONTEMPLATING A BROKEN MACHINE OF SIMILAR DESIGN', ' RUNNING OUT OF POWER IN THE MIDDLE OF A SENTENCE', ' EQUIPPED WITH A SNORKEL, WATER WINGS, AN INNER TUBE, AND/OR OTHER WATERPROOFING SAFETY MEASURES', ' AS FRESHLY CROWNED RULER OF THE WORLD', ' FLYING AT MACH ONE WITH THE HELP OF A JETPACK OR WING ATTACHMENT', ' SHELTERING FROM LOATHESOME RAIN UNDER A BRIDGE OR AWNING', ' WEARING A FASHIONABLE SCARF',
' BREAKING AND ENTERING', ' TEACHING THE BASICS OF WORLD DOMINATION TO A SMALLER, YOUNGER ROBOT', ' DRAWING ON THEIR OWN CHASSIS', ' ALLOWING A CHILD TO DRAW ON THEIR CHASSIS', ' BEDAZZLING THEIR OWN CHASSIS', ' PLAYING A SPORT WHICH THEIR SUPERIOR ROBOT PHYSIQUE ALLOWS THEM TO EXCEL AT', ' DRESSED FOR WINTER AND CONSTRUCTING AN INFERIOR DUPLICATE OF THEMSELF FROM SNOW', ' REGALING THE ORGANICS AROUND A CAMPFIRE WITH FEARSOME AND INTIMIDATING TALES', ' EATING PIZZA', ' DELIVERING PIZZA'];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('prompt')
    .setDescription('Randomized single-character drawing prompts.')
    .addStringOption(option => option.setName('type').setDescription('What sort of prompt?')
      .addChoices(
        { name: 'Default', value: 'vanilla_prompt' },
        { name: 'Outfit', value: 'clothes_prompt' },
        { name: 'Triumphant', value: 'tri_prompt' },
        { name: 'Robot', value: 'robo_prompt' },
        { name: 'Cursed', value: 'cursed_prompt' },
        { name: 'Mermaid', value: 'mer_prompt' },
    ))
    .addStringOption(option => option.setName('character').setDescription('Who?')),
  async execute(interaction) {
    var char = interaction.options.getString('character');
    var type = interaction.options.getString('type');
    if (!type) { type = 'vanilla_prompt'; }
    if (!char) {
      if (type === 'robo_prompt'){
        char = robopromptchars[Math.floor(Math.random() * robopromptchars.length)];
      }
      else{
        char = promptchars[Math.floor(Math.random() * promptchars.length)];
      }
    }
    else { char = char.toUpperCase(); }
    var prompt = promptwords[Math.floor(Math.random() * promptwords.length)];
    switch(type) {
      case 'vanilla_prompt':
        char+= " "; //I was inconsistent about whether prompts had interstitial spaces added. Sorry.
      break;

      case 'clothes_prompt':
        char += " ";
        prompt = outfitwords[Math.floor(Math.random() * outfitwords.length)];
      break;

      case 'tri_prompt':
        prompt = tripromptwords[Math.floor(Math.random() * tripromptwords.length)];
      break;

      case 'robo_prompt':
        prompt = robopromptwords[Math.floor(Math.random() * robopromptwords.length)];
      break;

      case 'cursed_prompt':
        char+= " ";
        prompt = cursedwords[Math.floor(Math.random() * cursedwords.length)];
      break;

      case 'mer_prompt':
        char = "MER-" + char;
        prompt = merpromptwords[Math.floor(Math.random() * merpromptwords.length)];
      break;
    }
    await interaction.reply(char + prompt)
    .catch(console.error);
  },
};
