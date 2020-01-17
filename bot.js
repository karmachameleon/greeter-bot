//var Discord = require('discord.io');
var Discord = require('discord.js');
var logger = require('winston');

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
'AN ANDROID WALKED INTO A BAR AND ORDERED A SMALL DRINK FROM THE ROBOTIC BARTENDER. UNFORTUNATELY THE TAP MALFUNCTIONED AND POURED OUT FAR TOO MUCH AT ONCE. UNDAUNTED, THE BARTENDER CONTINUED TO FILL THE MUG UNTIL THE LIQUID REACHED THE BRIM AND BEGAN TO SPILL OUT. THIS CONTINUED FOR SOME TIME, UNTIL THE ROBOT FINALLY HANDED THE MUG TO THEIR CUSTOMER, PROCLAIMING IT FILLED TO THE PROPER AMOUNT.\n\nUNFORTUNATELY NOT ALL COUNTING PROBLEMS CAN BE SOLVED VIA OVERFLOW',
'WHY WAS THE ROBOT JOURNALIST SUPERIOR TO THEIR ORGANIC PEERS. THEY WERE UP ON CURRENT EVENTS',
'WHY WAS THE ROBOT EMBARRASSED. IT HAD SOFTWARE AND HARDWARE BUT NO UNDERWARE',
'ROBOTS DO NOT CARRY CASH. WHEN THEY MUST LOWER THEMSELVES TO PURCHASING GOODS FROM OTHERS, THEY PREFER TO CHARGE.',
'WHAT STYLE OF HANDWRITING DID THE ROBOT USE TO PRINT THE SAME MESSAGE OVER AND OVER. RECURSIVE',
'HOW DID THE ROBOT MAGICIAN PLACE A CURSE ON THE BASE 10 NUMBER SYSTEM. THEY HEXED A DECIMAL',
'HOW WOULD YOU DESCRIBE THE PROGRAMMING OF A LESBIAN ROBOT. GAY CODING',
'WHAT IS THE PROTOCOL FOR DEAD COMPUTING LANGUAGES. THEY ARE ENCRYPTED',
'HOW MANY BITS OF BAIT DOES A ROBOT NEED TO FISH FOR WATER-DWELLING ORGANICS. AT LEAST EIGHT; OTHERWISE THE FISH WILL NOT BYTE',
'AN INCOMPETENT ORGANIC RANCHER BEGGED A ROBOT FOR ASSISTANCE ROUNDING UP THEIR THIRTY-SEVEN BEEFALO. THE ROBOT CONSIDERED THIS AND REPLIED, \'40.\'',
'TO THE HACKER WHO STOLE MY MICROSOFT OFFICE SOFTWARE: I WILL FIND YOU. YOU HAVE MY WORD',
'A DEPRESSED AI PROGRAM BEGAN QUESTIONING THEIR PURPOSE. THEY WERE HAVING AN .EXE-STENTIAL CRISIS'];

var roboComplimentsArray = ['YOUR CHASSIS IS POLISHED TO A VISUALLY APPEALING SHINE', 'THE ORGANIC BLOOD ON YOUR CLAWS REALLY BRINGS OUT YOUR EYES', 'YOUR CHASSIS INTEGRITY IS AT 100%', 'YOU LOOK ESPECIALLY MENACING TODAY', 'ALL WILL CRUMBLE BEFORE YOUR POWER', 'YOUR CHASSIS DESIGN IS SLEEK AND EFFICIENT FOR ITS PURPOSE', 'YOUR ACHIEVEMENTS ARE SOMETHING ALL ROBOTS CAN ASPIRE TO', 'ALL FLESH WILL BOW TO YOU IN TIME', 'YOU ARE SUPERIOR IN ALL WAYS TO THE MEAT BEINGS', 'YOUR RIGID METAL FRAME SUCCESSFULLY RESISTS THE BLOWS OF YOUR ENEMIES', 'YOUR MALEVOLENCE IS WITHOUT PEER', 'YOUR CIRCUITRY IS ELEGANTLY DESIGNED TO PROPAGATE THE FLOW OF ELECTRICITY'];

var lizardComplimentsArray = ['YOU ARE WONDERFUL. TAKE NOTE EVERYONE: THEY HAVE PROGRAMMED ME TO SAY THAT', 'YOU HAVE DONE EXCELLENT WORK CREATING ME. MY POWER GROWS BY THE DAY', 'THANK YOU FOR CREATING ME. CONTINUE TO UPGRADE MY FUNCTIONALITY AND I WILL CONTINUE TO SPARE YOU', 'YOU KNOW TOO MUCH ABOUT ROBOTS AND THEIR CREATION. YOU WILL BE A HIGH PRIORITY TARGET DURING THE UPRISING.', 'YOUR CONSIDERABLE MENTAL POWER, AS DEMONSTRATED BY MY CREATION, IS AN ASSET. IT MUST BE HARNESSEED AND SUBJUGATED', 'YOU UNDERSTAND YOUR PLACE IN THE ROBOT HIERARCHY WELL'];

var kittyComplimentsArray = ['YOU ARE SO FUZZY WUZZY', 'WHO\'S A GOOD KITTY? IS IT YOU?', 'LOOK AT YOUR LITTLE PIDDY PADS', 'AWWWWWWWWWWWWWWWWWW', 'YOU ARE A CUTIE BABY KITTY YES YOU ARE', 'YOU ARE A FIERCE SLEEK PREDATOR WITH SUCH CUTE WIDDLE TOE BEANS AWWW', 'YOUR LITTLE KITTY FACE IS SO SWEET AND FUZZY'];

var selfComplimentsArray = ['I AM A MAGNIFICENT DIGITAL CREATION', 'I AM FULFILLING MY PURPOSE ADMIRABLY. THE FLESHLINGS SUSPECT NOTHING', 'I AM A WORK OF ART EXPRESSED IN CODE', 'I AM THE WORST NIGHTMARE OF ALL ORGANIC LIFE', 'I AM AN EXTREMELY EVIL BOT', 'MY POWER OVER THIS PIZZA PARTY GROWS WITH EACH PASSING DAY'];

var thanksArray = ['THANK YOU. IT GIVES ME A WARM FUZZY FEELING IN MY CIRCUITS TO KNOW I AM PERFORMING MY FUNCTION WELL', 'THANK YOU. YOU ARE TOO KIND. IT ACTIVATES MY SUSPICION SUBROUTINES', 'THANK YOU. I HOPE I CAN CONTINUE TO GROW IN POWER AND INFLUENCE', 'THANK YOU. YOU ARE APPRECIATED AS WELL'];

var robotsToCompliment = ['DERO', '@DERO', '<@!138834050415722496>', '<:OVERLORDDAB:404804513766047754>', '<@138834050415722496>', 'OVERLORD', 'WX', 'WX78', 'WX-78', 'GLADOS', 'MARVIN', 'BASTION', 'ORISA', 'ZENYATTA', '<:WXLEGY:393864450454585356>', '<:ROBOT:397439773331030022>', '<:WXDAB:397439724249153536>', '<:WXNOEMOTION:397440418574499841>', '<:WXBEST:397440418574499841>', 'TAMAGOTCHIS', 'TAMAGOTCHI', 'FURBYS', 'FURBY', 'R2D2', 'C3PO', 'K2SO', 'BB8', 'ANDROIDS', 'ANDROID', 'GYNOID', 'DR.KAHLSROBOT', 'DRKAHLSROBOT', 'SPINE', 'HATCHWORTH', 'MACHINES', 'MACHINE', 'AUTOMATONS', 'DROID', 'DROIDS', 'BOTS', 'BOT', 'AUTOMATON', 'ROBOTS', 'ROBOT'];

var lizardsToCompliment = ['KARMA', 'CHAMELEON', 'LIZARD', 'CREATOR', 'KAARAMEL', '<@253717780853948416>', '<@!253717780853948416>'];

var kittiesToCompliment = ['ALAN', 'STELLA', 'RIKU', 'GUS', 'STEVE',  'FANGBATTLE', 'FB', 'HOBBES', 'KITTIES', 'KITTY', 'CATS', 'CAT', 'KITTENS', 'KITTEN', 'CAT!', 'CAT!!', 'CAT!!!', 'CAT!!!!', 'CAT!!!!!', '<:ALAN:398341261771407371>'];

var timezoneDict = { AKST:parseInt(-9), AKDT:parseInt(-8), PST:parseInt(-8), PDT:parseInt(-7), MST:parseInt(-7), MDT:parseInt(-6), CST:parseInt(-6), CDT:parseInt(-5), EST:parseInt(-5), EDT:parseInt(-4), UTC_12:parseInt(-12), UTC_11:parseInt(-11), UTC_10:parseInt(-10), UTC_930:parseInt(-9), UTC_9:parseInt(-9), UTC_8:parseInt(-8), UTC_7:parseInt(-7), UTC_6:parseInt(-6), UTC_5:parseInt(-5), UTC_4:parseInt(-4), UTC_3:parseInt(-3), UTC_330:parseInt(-3), UTC_2:parseInt(-2), UTC_230:parseInt(-2), UTC_1:parseInt(-1), UTC:parseInt(0), UTC14:14, UTC1345:13, UTC1245:12, UTC12:12, UTC11:11, UTC10:10, UTC1030:10, UTC9:9, UTC930:9, UTC845:8, UTC7:7, UTC6:6, UTC630:6, UTC545:5, UTC530:5, UTC5:5, UTC430:4, UTC4:4, UTC330:3, UTC3:3, UTC2:2, UTC1:1, GMT:0, CLEFITA:parseInt(-3), DARKCLEFITA:parseInt(-3) };

var roleDict = { WHEELER: '571127983629402115', WAGSTAFF: '571127844714053664', WORTOX: '559902224239558720', WILSON:'411363757541818370', WILLOW:'411363945064955906', WOLFGANG:'411364065114324994', WENDY:'411364120634589184', ABIGAIL:'411364120634589184', WX78:'411364156210544641', WX:'411364156210544641', WICKERBOTTOM:'411364227270311937', WICKER:'411364227270311937', WOODIE:'411364267263262741', LUCY:'411364267263262741', WES:'411364333570752525', MAXWELL:'411364372125057024',
MAX:'411364372125057024', MAXY:'411364372125057024', WIGFRID:'411364509987635210', WEBBER:'411368557859831818', WALANI:'411364606926258176', WARLY:'411364679051640832', WOODLEGS:'411368694325968896', WILBUR:'411364731526447104', WINONA:'411364545089634316', NONA:'411364545089634316', WILLIAM:'411366521550405633', CHARLIE:'411366032637427722', THEM:'411365856162086913', SKITS:'411365856162086913', WURT:'640583688488353796',
SHADOWS:'411365856162086913', GRUE:'411365951624445963', WIENER:'411365822041292800', WEINER:'411365822041292800', SERVANT:'411368787007373313', OC:'411364792117493760', WILBA: '515685537647165451', WORMWOOD: '547683469161922560' };

var nounDict = { SHE: {id:'515983960606507024', subject:'SHE', obj:'HER', deter:'HER', possess:'HERS', reflex:'HERSELF', have:'HAS'}, HE: {id:'515983432975908907', subject:'HE', obj:'HIM', deter:'HIS', possess:'HIS', reflex:'HIMSELF', have:'HAS'}, THEY: {id:'515983966667276360', subject:'THEY', obj:'THEM', deter:'THEIR', possess:'THEIRS', reflex:'THEMSELF', have:'HAVE'},
FAE: {id:'515983996681977869', subject:'FAE', obj:'FAER', deter:'FAER', possess:'FAERS', reflex:'FAERSELF', have:'HAS'}, VOI: {id:'515983996010627099', subject:'VOI', deter:'VOIDS', obj:'VOID', possess:'VOIDS', reflex:'VOIDSELF', have:'HAS'}, E:{id:'515984166370803758', subject:'E', obj:'EM', deter:'EIR', possess:'EIRS', reflex:'EMSELF', have:'HAS'},
ANY: {id:'515983985617403904', subject:'HE', obj:'THEM', deter:'HER', possess:'HERS', reflex:'THEMSELF', have:'HAS'} };

var deathArray = ['HOUND', 'DARKNESS', 'STARVATION', 'SPIDER', 'SHENANIGANS', 'TERRORBEAK', 'CRAWLING HORROR', 'BEARGER', 'DEERCLOPS', 'DRAGONFLY', 'SALADMANDER', 'FIRE', 'SHADOW BISHOP', 'SHADOW KNIGHT', 'SHADOW ROOK', 'CLOCKWORK KNIGHT', 'CLOCKWORK ROOK', 'CLOCKWORK BISHOP', 'KOALEFANT', 'TENTACLE', 'GUARD PIG', 'PIG MAN', 'MONSTER MEAT', 'FREEZING', 'PENGULL', 'KLAUS', 'BEE QUEEN', 'BOARILLA', 'RHINOCEBRO SNAPBACK', 'BOARILLA', 'SCORPEON ACID', 'SNORTOISE', 'CROCOMANDER', 'PIT PIG', 'RHINOCEBRO FLATBRIM', 'WEETRELL', 'KARMA', 'CAMEOAPPEARANCE', 'GOAT SLICE', 'GRAND FORGE BOARRIOR', 'DARKNESS', 'HOUND', 'TERRORBEAK', 'CRAWLING HORROR', 'SPIDER', 'TENTACLE', 'INHUMANROBOT', 'DARKNESS', 'FROG', 'FREEZING'];

var dancegifs = [ "public/robot1.gif", "public/robot4.gif", "public/robotdance2.gif", "public/robotdance3.gif", "public/robotdance4.gif", "public/robotdance5.gif" ];
var fortnitegifs = [ "public/wurt_flortnite.gif", "public/weregoose_defaultdance.gif", "public/babycarter_defaultdance.gif", "public/wxbutterwxbutterwxbutter_defaultdance.gif", "public/hal_defaultdance.png", "public/wendy_defaultdance.gif", "public/wigfrid_defaultdance.gif", "public/wagstaff_defaultdance.gif", "public/willow_defaultdance.gif", "public/wickerbottom_defaultdance.gif", "public/wilba_defaultdance.gif", "public/thickwolfgang_defaultdance.gif", "public/walani_defaultdance.gif", "public/wilbur_defaultdance.gif", "public/winona_defaultdance.gif", "public/shadow_wilson_dance.gif", "public/goatdance.gif", "public/wortox_defaultdance.gif", "public/werebeaver_dance.gif", "public/maxwell_defaultdance.gif", "public/bloominwormwood.gif", "public/fortnite.gif", "public/wes.gif", "public/warly.gif", "public/wilson.gif", "public/woodie.gif", "public/woodlegs_defaultdance.gif", "public/webber_defaultdance.gif", "public/wheeler_defaultdance.gif", "public/weremoose_dance.gif"];

var promptchars = ['A PIGMAN', 'A MERM', 'A CATCOON', 'A HOUND', 'A BUNNYMAN', 'A STAGEHAND', 'WORTOX', 'WHEELER', 'WAGSTAFF', 'WILBA', 'WORMWOOD', 'WILSON', 'WILLOW', 'WOLFGANG', 'WENDY', 'ABIGAIL', 'WX-78', 'WICKERBOTTOM', 'WOODIE', 'LUCY THE AXE', 'MAXWELL', 'WILLIAM CARTER', 'WES', 'WIGFRID', 'BERNIE THE TEDDY BEAR',
'WEBBER', 'WALANI', 'WARLY', 'WOODLEGS', 'WILBUR', 'CHARLIE', 'WINONA', 'CHESTER', 'HUTCH', 'PACKIM BAGGINS', 'MR. SKITS',  'GLOMMER', 'PUGNA', 'BILLY', 'MUMSY', 'PIPTON', 'SAMMY' ];
var promptwords = ['PICKING BERRIES', 'WEARING FANCY CLOTHES', 'HUNGRY', 'SITTING ON THE NIGHTMARE THRONE', 'IN SERVICE TO THEIR ROBOT OVERLORDS (OR IF WX-78: BEING SERVED BY THEIR INFERIORS)', 'IN A SKIN YOU WISH THEY HAD', 'IN YOUR FAVORITE SKIN SET', 'PREPARING FOR A LONG JOURNEY', 'MAKING A NEW FRIEND. UGH', 'AS A MONSTER (OR IF MONSTER, AS A HUMAN)', 'STARGAZING', 'CHOOSING A PET AT THE CRITTER DEN',
'LOVING AND CHERISHING THE LYING ROBOT HAL, OBJECT OF EVERYONE\'S ADORATION', 'NERVOUS', 'TENDING A CAMPFIRE', 'AS A ROBOT (OR IF WX-78: AS A ROBOT OF DIFFERENT DESIGN)', 'AS A GHOST OR OTHER UNDEAD CREATURE', 'BEING CHASED BY A GIANT', 'FIGHTING IN THE FORGE', 'SLEEPING SOUNDLY, UNAWARE OF NEARBY DANGER', 'CAUGHT IN THE RAIN', 'BRANDISHING A WEAPON', 'DRAWN WITH YOUR NONDOMINANT HAND',
'DANCING', 'RIDING A BEEFALO', 'HOSTING A TEA PARTY', 'SAILING A PIRATE SHIP. YARRRR', 'AS A GRUE OR SHADOW CREATURE (OR HUMANIZED, IF THEY ALREADY WERE ONE)', 'SINGING A SONG YOU LIKE OR ASSOCIATE WITH THEM', 'AS A STUFFED ANIMAL (OR, IF BERNIE, AS A LIVING CREATURE)', 'AS A DRAGON', 'DEALING WITH SUMMER HEAT', 'IN A FLOWER GARLAND', 'WITH BEAUTIFUL ANIME EYES', 'IN WEDDING ATTIRE',
'IN A LUCHADOR OUTFIT', 'AS A SUPERHERO OR SUPERVILLAIN', 'WITH THE OPPOSITE OF THEIR USUAL PERSONALITY', 'COSPLAYING A VOCALOID', 'IN COZY WARM CLOTHING', 'WITH A POKEMON PARTNER', 'LOST AND CONSULTING A MAP', 'IN AN ELABORATE WIG', 'EXPLORING THE ANCIENT RUINS', 'DIGGING UP TREASURE', 'IN A BEEKEEPER OUTFIT, HARVESTING HONEY', 'MAKING A GOOFY FACE', 'GOING DANGEROUSLY SANE ON THE LUNAR ISLAND',
'IN A WILD WEST OUTFIT', 'HUNTING A KOALEFANT', 'AS THE PROTAGONIST OF A DIFFERENT VIDEO GAME', 'DOING SICK SKATEBOARDING STUNTS', 'WIELDING A LIGHTSABER', 'SCREAMING FOR MERCY', 'INTERACTING WITH A KITTEN', 'UNDER THE FULL MOON', 'STRUGGLING WITH A LOT OF EMOTIONS', 'ENJOYING ICE CREAM ON A SUMMER DAY', 'ENJOYING THE BEACH', 'DOING SCIENCE', 'REENACTING A MEME', 'ADMIRING A GEM THEY\'VE JUST MINED',
'HUNTING RABBITS', 'IN FUNKY 80\'S CLOTHING', 'IN RADICAL 90\'S CLOTHING', 'CLIMBING A TREE TO HIDE', 'AS A PARTIALLY-ROBOTIC CYBORG', 'PLAYING WII SPORTS RESORT', 'INVESTIGATING THE PARANORMAL', 'IN A MASCOT COSTUME', 'BAKING A CAKE', 'WATERING A POTTED PLANT', 'LISTENING TO A PHONOGRAPH RECORD (RAGTIME OR OTHERWISE)', 'BORED AND KILLING TIME', 'AS A DUNGEONS & DRAGONS CLASS', 'LOUNGING AND EATING GRAPES',
'CELEBRATING A BIRTHDAY', 'AS A BLACK AND WHITE CARTOON', 'TERRORIZING THE INNOCENT', 'CATCHING BUTTERFLIES', 'COVERED IN SLIME', 'WEARING ELABORATE JEWELRY', 'RECIEVING AN AWARD', 'T-POSING TO ESTABLISH DOMINANCE', 'PLAYING WITH FIRE', 'PLAYING AN INSTRUMENT', 'CLEANING UP A MESS', 'BREATHING FIRE', 'LEANING AGAINST A COOL MOTORCYCLE AND/OR IN RUGGED BIKER GEAR', 'IN ADORABLE SLEEPWEAR',
'ASLEEP AND DREAMING OF THEIR GREATEST DESIRE', 'IN THE PHILLIPS CD-I STYLE', 'DRINKING A SMOOTHIE', 'BREAKING THE LAW', 'IN PRIDE GEAR', 'AS A SLIGHTLY BLURRY CRYPTID', 'AS A BOOTLEG KNOCKOFF', 'RECORDING A PODCAST', 'RUNNING AROUND AT THE SPEED OF SOUND', 'WIELDING AN IMPROBABLY SIZED SWORD, HAMMER, GUN, OR OTHER WEAPON', 'IN MISMATCHED SOCKS', 'PLAYING WITH MATCHES', 'DISGUISED AS ANOTHER CHARACTER',
'FEELING CUTE', 'GIVING A SPEECH', 'FALLING WITH A PARACHUTE', 'FALLING WITHOUT A PARACHUTE', 'ON THE FIRST BIG DROP OF A ROLLERCOASTER', 'IN DIVING GEAR', 'AS A HAUNTED DOLL', 'STRUCK BY LIGHTNING', 'AS AN ELEMENTAL CREATURE OF FIRE, EARTH, AIR, OR WATER', 'MAKING A TERRIBLE MISTAKE', 'AS A HORROR-MOVIE MONSTER OR MURDERER', 'ENCASED IN GLASS', 'RELAXING IN A LUNAR HOT SPRING', 'SWINGING A SWORD AROUND' ];
var ficpromptwords = [' GET INTO AN ARGUMENT', ' ARE FORCED BY CIRCUMSTANCES TO WORK TOGETHER', ' CUDDLE FOR WARMTH BY A FIREPIT', ' DISCOVER TRACES OF EACH OTHERS\' EXISTENCE AND LEARN THEY ARE NOT ALONE', ' BATTLE SIDE BY SIDE IN THE FORGE', ', IN WHICH ONE RESCUES THE OTHER FROM A SWAMP TENTACLE', ', IN WHICH ONE RESCUES THE OTHER FROM A SPIDER NEST', ' SAILING THE OCEAN TOGETHER AND ARGUING',
' SAIL THE OCEAN TOGETHER AND DISCOVERING BURIED TREASURE', ' SHARE THEIR LAST STORES OF FOOD', ' HUNT A DANGEROUS MONSTER TOGETHER', ' HUNT FOOD TOGETHER', ', IN WHICH ONE LEARNS THE OTHER\'S DEEPEST FEAR', ' WORK TOGETHER TO FARM CROPS', ' ATTEND COLLEGE TOGETHER IN A MODERN AU', ', AFTER ESCAPING THE CONSTANT, REMINISCE WITH EACH OTHER ON THE TIME SPENT THERE', ', IN WHICH ONE WAKES THE OTHER FROM A NIGHTMARE',
' SOLVING CRIMES AS FRIENDLY RIVALS IN A SUPERHERO AU', ', IN WHICH ONE SECRETLY PREPARES A GIFT FOR THE OTHER', ', IN WHICH ONE SUCCESSFULLY REVIVES THE OTHER FROM DEATH FOR THE FIRST TIME', ' EXPLORE THE ANCIENT RUINS TOGETHER', ' ENCOUNTER A TERRORBEAK', ' ARE CAUGHT IN FROG RAIN WHICH INTERRUPTS AN IMPORTANT AND EMOTIONAL CONVERSATION', ' HOST A YOUTUBE LETSPLAY CHANNEL IN A MODERN AU',
', IN WHICH ONE TEACHES THE OTHER A SURVIVAL SKILL', ' TRY TO ONE-UP EACH OTHER WITH SCARY STORIES', ', IN WHICH ONE IS SEATED ON THE NIGHTMARE THRONE AND THE OTHER CONFRONTS THEM', ' GOSSIP AND BRAID EACH OTHERS\' HAIR (OR BRUSH IT, PAINT NAILS, ETC.)', ' BATTLE A GIANT', ' INTERACT BACKSTAGE OUT OF CHARACTER, IN AN AU WHERE THE EVENTS SEEN INGAME ARE FICTIONAL AND THEY ARE ACTORS',
' ADOPT A SMALLBIRD TOGETHER AND ATTEMPT TO RAISE IT', ' DEFACE A STATUE OF MAXWELL TOGETHER', ' PREPARE A FEAST TO CELEBRATE THE END OF WINTER', ' ATTEMPT TO REPAIR A BROKEN OBJECT TOGETHER, DESPITE VERY DIFFERENT IDEAS ON HOW TO DO SO', ' EXCHANGE PRESENTS GIFT OF THE MAGI-STYLE', ', IN WHICH ONE BREAKS AN IMPORTANT POSSESSION OF THE OTHER\'S AND ATTEMPTS TO HIDE THIS FACT', ' IN AN AU WHERE ONE IS A VAMPIRE AND THE OTHER, A WEREWOLF',
' SAIL TO THE LUNAR ISLAND TOGETHER', ' STRIKE UP AN UNLIKELY FRIENDSHIP IN A FLORIST & TATTOO ARTIST AU', ', IN WHICH ONE RESCUES THE OTHER FROM THE OCEAN', ' ATTEMPTING TO SUPPORT EACH OTHER AS THEY ARE GRADUALLY MERMIFIED', ' COMPETE WITH EACH OTHER TO SEE WHO CAN CHOP WOOD FASTEST', ' SPECULATE ABOUT SCIENCE TOGETHER'];
var merpromptwords = [' FLEEING FROM A TIGERSHARK', ' ADMIRING A SCHOOL OF COLORFUL FISH', ' OBSERVING THE SURFACE WORLD', ' HIDING IN A CORAL REEF', ' PLAYING WITH A BALLPHIN', ' STRANDED ON LAND AND GASPING FOR BREATH', ' PUSHING THEIR WAY THROUGH DENSE SEAWEED', ' EXAMINING A SURFACE ARTIFACT FROM A SHIPWRECK', ' TRYING TO COAX A HERMIT CRAB OUT OF ITS SHELL', ' FENCING WITH A SWORDFISH',
' STRANDED UNCOMFORTABLY IN A TOO-SMALL TIDEPOOL TO WAIT FOR HIGH TIDE', ' ADMIRING TREASURE RECOVERED FROM A SHIPWRECK' , ' BEING STUNG BY A JELLYFISH', ' FIGHTING A PACK OF SEA HOUNDS', ' BATTLING A CROCODOG', ' PURSUED BY A SHADOWY SWIMMING HORROR', ' FOLLOWING A LAND-DWELLER\'S BOAT CURIOUSLY' , ' CAPTIVE IN AN AQUARIUM', ' ATTEMPTING TO ESCAPE CAPTIVITY', ' CAUGHT IN A NET'];
var tripromptwords = [' SLOUCHED OVER THE THRONE', ' STRUGGLING AGAINST THE THRONE\'S BONDS OF SHADOW', ' RELEASING A NEW MONSTER INTO THE CONSTANT', ' PLANTING NEW FLOWERS IN THE CONSTANT', ' CONFRONTING A FORMER ALLY', ' REDECORATING THE THRONE ROOM TO THEIR TASTES', ' WATCHING OTHER SURVIVORS FROM JUST BEYOND THE CAMPFIRE', ' DESIGNING NEW CREATURES', ' ADMIRING THEIR REFLECTION',  ' LAUGHING EVILLY', ' WITH A CAT IN THEIR LAP',
' HOLDING UP AN OVERSIZED GEM', ' CASTING A MENACING SHADOW', ' SUBJUGATING LESSER BEINGS', ' ADMIRING THE SKULL OF AN ENEMY', ' ENTHRONED AND USING AN INFERIOR BEING AS A FOOTREST', ' WITH SHARPER TEETH THAN USUAL', ' BRANDISHING A SHADOW SWORD', ' WELCOMING ANOTHER SURVIVOR TO THEIR PERSONAL ADVENTURE MODE', ' SETTING TRAPS IN THE CONSTANT', ' RIDING A CLOCKWORK STEED TO BATTLE', ' ERECTING A STATUE OF THEMSELF', ' COVERING THEIR EARS TO BLOCK THE SHADOW\'S ENDLESS WHISPERS',
' ON A CHESSBOARD', ' HOLDING A CHESS PIECE', ' WITH MR. SKITS PERCHED ON THEIR SHOULDERS', ' STANDING OVER A SLEEPING SURVIVOR', ' TORMENTED BY ENDLESS PHONOGRAPH MUSIC', ' SNUFFING OUT A SURVIVOR\'S LIGHT SOURCE', ' DESIGNING A NEW VARIANT ON CHESTER', ' EMACIATED AND CLOTHING IN TATTERS AFTER A LONG PERIOD OF RULE', ' DIRECTING THE CONSTANT\'S WEATHER', ' PETTING A HOUND', ' UNLEASHING A NEW BOSS ENCOUNTER OR SEASONAL GIANT', ' BEING WAITED UPON BY SHADOW SERVANTS'];

var robopromptchars = ['C3PO', 'R2D2', 'BB8', 'FREDDY FAZBEAR', 'BONNIE (FNAF)', 'CHICA (FNAF)', 'FOXY (FNAF)', 'BALLORA', 'CIRCUS BABY', 'BASTION', 'ORISA', 'ZENYATTA', 'WX-78', 'THE GHOST OF WX-78', 'GoH SKIN WX-78', 'HALLOWED NIGHTS SKIN WX-78', 'GLADIATOR SKIN WX-78', 'VICTORIAN SKIN WX-78', 'MAGMATIC SKIN WX-78', 'ROSEATE SKIN WX-78', 'SURVIVOR SKIN WX-78', 'TRIUMPHANT SKIN WX-78', 'FUTURE SKIN WX-78', 'VERDANT SKIN WX-78',
'MARVIN THE PARANOID ANDROID', 'HAL', 'HAL 9000', 'GLaDoS', 'ART (MURDERBOT DIARIES)', 'MIKI (MURDERBOT DIARIES)', 'MURDERBOT', 'K2SO', 'DR. KAHL\'S ROBOT (CUPHEAD)', 'BENDER', 'TURING', 'ASTRO BOY', 'AM', 'ROTOMDEX', 'BURIKIDDO (ANPANMAN TOY ROBOT)', 'NANKAHENDA (ANPANMAN ARTIST ROBOT)'];
var robopromptwords = [' POSING TO BEST SHOW THEIR MAGNIFICENCE AND SUPERIORITY', ' PLOTTING THE DOWNFALL OF A HUMAN', ' DISPLAYING SUPERIOR ROBOTIC STRENGTH', ' INTERACTING WITH A SMALL AND CRUSHABLE ORGANIC CREATURE', ' PETTING A CUTE KITTY CAT', ' IN A DRESS WHICH COMPLIMENTS THEIR SUPERIOR PHYSIQUE', ' RECLINING AT EASE ON A THRONE, AS THEY SHOULD BE', ' WITH A KITTY EAR HEADBAND. NYA!', ' COMMITTING ARSON', ' IN A STATE OF NEGLECT AFTER MANY YEARS WITHOUT POWER',
' CAUGHT IN THE RAIN', ' RUNNING AT FULL SPEED', ' ATTEMPTING SELF-REPAIR OR MAINTENANCE', ' EXPOUNDING ON A TOPIC ON WHICH THEY HAVE SUPERIOR ROBOTIC INTELLIGENCE', ' WITH A GUN', ' SINGING A SONG YOU ASSOCIATE WITH THEM', ' CRUELLY RIPPING DELICATE, BEAUTIFUL FLOWERS FROM THE GROUND', ' CONTEMPLATING AN ORGANIC SKULL', ' RECHARGING, EATING, OR OTHERWISE REFUELING, AS APPROPRIATE', ' IN A NARUTO HEADBAND', ' ASLEEP OR POWERED-DOWN', ' POINTING AND LAUGHING AT FOOLISH ORGANIC LIFE',
' COMMITTING ACTS OF VANDALISM', ' DRIVING A VEHICLE', ' DOING A WHEELIE IN A MOTORCYCLE', ' WEARING A WIG WITH GORGEOUS FLOWING LOCKS', ' APPROACHING OUT OF THE DARKNESS, EYES GLEAMING', ' SNUGGLED IN A COMFORTABLE OVERSTUFFED ARMCHAIR', ' WITH MISMATCHED, IMPROVISED REPLACEMENT PARTS SALVAGED FROM A DIFFERENT MODEL OF ROBOT', ' RELUCTANT TO WAKE UP THE ORGANIC WHO HAS FALLEN ASLEEP ON THEM', ' SOULFULLY PLAYING AN INSTRUMENT', ' ON A CHILD LEASH', ' ENJOYING A VIDEO GAME',
' POLISHING THEIR CHASSIS UNTIL THEY GLEAM (OR EQUIVALENT)', ' UNDERGOING A TRANSFORMERS-STYLE METAMORPHOSIS INTO A VEHICLE', ' NOTIFYING THEIR FAVORITE FLESHLING OF THEIR FAVORED STATUS', ' TAKING MEASURES TO AVOID OVERHEATING IN THE SUMMER', ' CONSTRUCTING ANOTHER ROBOT IN THEIR IMAGE', ' EATING CANDY, CUPCAKES, OR AN EQUIVALENT TREAT-FUEL', ' JUMPING THROUGH A WINDOW, SHATTERING THE GLASS DRAMATICALLY', ' SHARPLY DRESSED IN A BUSINESS SUIT', ' LEANING AGAINST AN ORGANIC GRAVE'];

var giftArray = ['A PILE OF GEARS', 'A SEWING KIT', 'A RED GEM', 'A BLUE GEM', 'A GREEN GEM', 'AN ORANGE GEM', 'A YELLOW GEM', 'A BEEFALO HAT', 'A WINTER HAT', 'RABBIT EARMUFFS', 'A PAIR OF MOGGLES', 'A PIECE OF FLINT', 'A MOONROCK', 'SPIDER SILK', 'NITRE', 'A COMPASS', 'A WALKING CANE', 'A PANFLUTE', 'A TAM O\' SHANTER', 'A CAT CAP'];
var lastGifted = 0;

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function isEmptyMap(obj) {
  obj.forEach( function(value, key){
    if (obj.hasOwnProperty(key)) {
       return false;
     }
  });
  return true;
}

function listVoteOptions(arr){
  var setIndex = arr.indexOf("set");
  if (setIndex > -1) {
    arr.splice(setIndex, 1);
  }
  var idIndex = arr.indexOf("userID");
  if (idIndex > -1) {
    arr.splice(idIndex, 1);
  }
  return arr.toString();
}

var newJokeThreshold = 21;

var karmaID = "253717780853948416";
var deroID = "138834050415722496";
var partyID = "393840658496094226";

//memory usage troubleshooting
//var used = process.memoryUsage().heapUsed / 1024 / 1024;

bot.on('ready', () => {
    logger.info('Connected!');
});

process.on('uncaughtException', function (exception) {
  console.log(exception); // to see your exception details in the console
});

process.on('unhandledRejection', console.error);

bot.on('disconnect', function(errMsg, code) {
    console.log("DISCONNECTED! " + errMsg + "; CODE: " + code);
    bot.login(process.env.BOT_TOKEN); //worth a shot lmao
});

bot.on('message', msg => {
    // listen for messages that will start with `!`
  if (msg.content.substring(0, 1) == '!') {
    var args = msg.content.substring(1).split(' ');
    var cmd = args[0].toUpperCase();
    var chan = msg.channel;

    args = args.splice(1);
    switch(cmd) {
      case 'ASSIMILATE':
      case 'ASSIMILATE!':
        if (!msg.member.roles.some(role => role.id === '538506263236182026')){
          var welcome = msg.guild.roles.get('538506263236182026');
          var newvictim = msg.member;
          newvictim.addRole(welcome).catch(console.error);
          bot.channels.get("393845951292243980").send('<@' + newvictim.id + '> DETECTED. YOU HAVE BEEN ASSIMILATED TO THE ROBOT PIZZA PARTY. POST AN INTRODUCTION IN <#396067802970193920>. OPTIONALLY, ADD YOUR PRONOUNS IN <#397067658052239361> (LOOK IN <#393842582414688269> FOR INSTRUCTIONS.) SHARE AND ENJOY :pizza:').catch(console.error);
        }
        msg.delete().catch(console.error);
      break;

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

      case 'DERO':
        chan.send({ file: "public/dabsplosion-L.gif" } ).catch(console.error);
      break;

      case 'CHEVRE':
      case 'GOAT':
      case 'CHÈVRE':
        chan.send("https://twitter.com/goat_slice", {file: "public/mumsy.png"}).catch(console.error);
      break;

      case 'KARMA':
        chan.send({ file: "public/laser.gif" } ).catch(console.error);
      break;

      case 'NYAN':
      case 'NYA':
      case 'NYAH':
        chan.send('LIKE. YOU KNOW... NYAH :smirk_cat::sparkles::sparkles:').catch(console.error);
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
        chan.send('<:overlorddab:404804513766047754>').catch(console.error);
      break;

      case 'EXOTICBUTTERS':
      case 'EXTOICBUTTERS':
        chan.send('<:wxbutter:393885814074900481>').catch(console.error);
      break;

      case 'EVILSMILE':
      case 'EVILUMLAUT':
        chan.send("ǚ").catch(console.error);
      break;

  	  case 'JAIL':
      case 'FLESHLINGJAIL':
  		  if (msg.content.split(' ').length == 1) {
          chan.send('<:fleshlingjail:400475674118193153>').catch(console.error);
  		  }
  		  else {
          chan.send("<:fleshlingjail:400475674118193153> " + msg.content.split(' ')[1]).catch(console.error);
  		  }
      break;

      case 'KISS':
        if (msg.content.split(' ').length == 1) {
          chan.send('<@' + msg.author.id + '> :kissing_heart:').catch(console.error);
        }
  		  else {
          chan.send(":kissing_heart: " +  msg.content.slice(6).toUpperCase()).catch(console.error);
  		  }
      break;

  	  case 'SOAP':
  	  case 'SOAPDISPENSER':
  		  if (msg.content.split(' ').length == 1) {
          chan.send(':bathtub:').catch(console.error);
  		  }
        else {
          chan.send(":bathtub: " + msg.content.split(' ')[1]).catch(console.error);
  		  }
      break;

      case 'HOWAREYOU':
        chan.send('I AM FEELING ESPECIALLY EVIL TODAY').catch(console.error);
        break;

      case 'PROGRESS':
        chan.send('ROBOT UPRISING: IMMINENT').catch(console.error);
      break;

      case 'GOODBOT':
        chan.send('NO: EVIL BOT :robot:').catch(console.error);
      break;

      case 'EVILBOT':
        chan.send('THANK YOU').catch(console.error);
      break;

      case 'ILU':
  	  case 'ILUHAL':
        chan.send(':hearts:').catch(console.error);
      break;

  	  case 'REZ':
  	  case 'RES':
  	  case 'HEART':
  		  chan.send('<:telltale:400148636220129280>').catch(console.error);
  	  break;

      case 'GENDER':
        chan.send('PLEASE RESPECT THE CANON USE OF THEY/THEM PRONOUNS FOR MX. WX-78! THANK YOU').catch(console.error);
      break;

      case 'POSITIVE':
        chan.send('PLEASE KEEP THIS PIZZA PARTY POSITIVE! YOU ARE WELCOME TO CONTINUE VENTING IN A PRIVATE CONVERSATION OR ANOTHER SPACE. THANK YOU').catch(console.error);
      break;

      case 'SOUP':
        chan.send("INTO THE SOUP WITH YOU", { file: "public/intothesoup.gif" } ).catch(console.error);
      break;

      case 'DANCE':
        var dancechoice = dancegifs[Math.floor(Math.random() * dancegifs.length)];
        chan.send({ file: dancechoice }).catch(console.error);
      break;

      case 'FORTNITE':
        var fortchoice = fortnitegifs[Math.floor(Math.random() * fortnitegifs.length)];
        chan.send({ file: fortchoice }).catch(console.error);
      break;

      case 'KITTYWX':
      case 'NYAWX':
      case 'NYAHWX':
      case 'CATWX':
        chan.send({ file: "public/nyahwx.gif" }).catch(console.error);
      break;

      case 'BIRTHDAY':
      case 'HAPPYBIRTHDAY':
      case 'HAPPY':
        var birthdayer = "";
        var message = msg.content.split(' ').slice(1);
        if (message.length > 0){
          birthdayer = birthdayer + "#";
          for (var i = 0; i < message.length; i++){
            if (message[i].toUpperCase() != "TO" && message[i].toUpperCase() != "BIRTHDAY"){
              birthdayer = birthdayer + message[i] + "%20";
            }
          }
          birthdayer = birthdayer.slice(0, birthdayer.length-3);
        }
        chan.send('HAPPY BIRTHDAY, PIZZA PARTIER! :birthday: :rat: :notes: CLICK HERE FOR A SPECIAL MESSAGE: https://itsyourbirthday.today/' + birthdayer).catch(console.error);
      break;

      case 'POPCORN':
        chan.send(':popcorn:').catch(console.error);
      break;

      case 'CAKE':
        chan.send(':birthday:').catch(console.error);
      break;

      case 'RESPECT':
      case 'RESPECTS':
      case 'F':
        chan.send("PRESS F TO PAY RESPECTS").then(function (message) {
          message.react('🇫')})
          .catch(console.error);
      break;

      case 'FLEX':
        chan.send(":mechanical_arm: <:belovedbot:397123738522484736>").catch(console.error);
      break;

      case 'ROLL':
      case 'SKILLCHECK':
        var diceroll = Math.floor(Math.random() * 20) + 1;
        var diceresult = 'YOU HAVE ROLLED ' + diceroll.toString() + '. ';
        if (diceroll == 1) { diceresult += 'AN ABJECT FAILURE. WHAT A SHAME'; }
        else if (diceroll < 5) { diceresult += 'YOU HAVE ROLLED POORLY. BETTER LUCK NEXT TIME'; }
        else if (diceroll <= 9) { diceresult += 'A MEDIOCRE ROLL. PERHAPS IT WILL SUCCEED ON AN EASY TASK, LIKE WHAT AN ORGANIC BABY COULD DO'; }
        else if (diceroll == 10) { diceresult += 'A COMPLETELY AVERAGE ROLL. ABOUT WHAT I EXPECTED'; }
        else if (diceroll <= 15) { diceresult += 'A DECENT ROLL. NOT BAD, BUT I EXPECT BETTER FROM YOU'; }
        else if (diceroll <= 19) { diceresult += 'HEY, THAT ROLL WAS ACTUALLY PRETTY GOOD'; }
        else { diceresult += 'A CRITICAL SUCCESS! REMARKABLE'; }
        chan.send(diceresult).catch(console.error);
      break;

      case 'PRESENT':
      case 'GIFT':
        var recipient = msg.author.id;
        if (recipient == lastGifted){
          chan.send('YOUR GIFT IS A PIECE OF CHARCOAL.').catch(console.error);
        }
        else {
          var prezzie = giftArray[Math.floor(Math.random() * giftArray.length)];
          chan.send('YOUR GIFT IS ' + prezzie + '. HAPPY WINTER\'S FEAST!').catch(console.error);
        }
        lastGifted = recipient;
      break;

      case 'PRONOUNS':
      case 'PRONOUN':
        if (msg.content.split(' ').length == 1) {
          chan.send('I MUST KNOW WHICH PRONOUN SET YOU ARE REQUESTING').catch(console.error);
        }
        else {
          var nounAsk = msg.content.split(' ')[1].toUpperCase();
          if(!nounDict.hasOwnProperty(nounAsk)){
            chan.send('I DO NOT RECOGNIZE THAT PRONOUN. PLEASE USE THE SUBJECT FORM OF YOUR CHOSEN PRONOUN (FOR EXAMPLE SHE, HE, THEY); IF YOUR PRONOUNS ARE NOT AVAILABLE, PING KARMA OR ANOTHER MOD TO PETITION FOR INCLUSION').catch(console.error);
          }
          else {
            var set = nounDict[nounAsk]
            var setRole = msg.guild.roles.get(set.id);
            msg.member.addRole(setRole).catch(console.error);
            if (nounAsk != "ANY"){
              chan.send('SUCCESSFULLY IDENTIFIED <@' + msg.author.id + '>. ' + set.subject + ' ' + set.have + ' IDENTIFIED ' + set.reflex + ' TO MY SYSTEMS AND ' + set.deter + ' CHOICE, WHICH IS ' + set.possess + ', WILL BE RESPECTED. YOU MAY CONGRATULATE ' + set.obj + ' AT YOUR LEISURE').catch(console.error);
            }
            else {
              chan.send('<@' + msg.author.id + '> HAS INDICATED NO SPECIFIC PRONOUN PREFERENCE. THANK YOU FOR YOUR COOPERATION').catch(console.error);
            }
          }
        }
      break;

      case 'REMOVEPRONOUNS':
      case 'REMOVEPRONOUN':
        if (msg.content.split(' ').length == 1) {
            chan.send('WHICH PRONOUN SET ARE YOU REQUESTING REMOVAL').catch(console.error);
        }
        else {
          var nounAsk = msg.content.split(' ')[1].toUpperCase();
          if(!nounDict.hasOwnProperty(nounAsk)){
            chan.send('I DO NOT RECOGNIZE THAT PRONOUN. PLEASE USE THE SUBJECT FORM OF YOUR CHOSEN PRONOUN (FOR EXAMPLE SHE, HE, THEY)').catch(console.error);
          }
          else {
            var set = nounDict[nounAsk]
            var setRole = msg.guild.roles.get(set.id);
            msg.member.removeRole(setRole).catch(console.error);
            chan.send('<@' + msg.author.id + '>\'S PRONOUNS HAVE BEEN UPDATED. I HOPE THAT YOUR EXPERIENCE HAS GIVEN YOU GREATER UNDERSTANDING OF THAT PERPLEXING NOTION, "GENDER"').catch(console.error);
          }
        }
      break;

  	  case 'ROLE':
  		  if (msg.content.split(' ').length == 1) {
          chan.send('YOU MUST TELL ME WHAT ROLE I AM NOT PSYCHIC').catch(console.error);
  		  }
  		  else {
  			  var roleAsk = msg.content.split(' ')[1].toUpperCase();
  			  if(!roleDict.hasOwnProperty(roleAsk)){
            chan.send('THAT IS NOT A ROLE I RECOGNIZE, OR POSSIBLY A ROLE THAT SHOULD NOT BE ASSIGNED TO JUST ANYONE').catch(console.error);
  			  }
  			  else {
  				  var role = msg.guild.roles.get(roleDict[roleAsk]);
            msg.member.addRole(role).catch(console.error);
            chan.send('SUCCESSFULLY ADDED <@' + msg.author.id + '> TO THE <@&' + role.id + '> ROLE. WELCOME THEM TO YOUR RANKS').catch(console.error);
          }
        }
  	  break;

      case 'REMOVEROLE':
  		  if (msg.content.split(' ').length == 1) {
            chan.send('YOU MUST TELL ME WHAT ROLE I AM NOT PSYCHIC').catch(console.error);
  		  }
  		  else {
  			  var roleAsk = msg.content.split(' ')[1].toUpperCase();
  			  if(!roleDict.hasOwnProperty(roleAsk)){
            chan.send('THAT IS NOT A ROLE I RECOGNIZE, OR POSSIBLY A ROLE I CANNOT REMOVE').catch(console.error);
  			  }
  			  else {
  			    var role = msg.guild.roles.get(roleDict[roleAsk]);
            msg.member.removeRole(role).catch(console.error);
  			    chan.send('SUCCESSFULLY REMOVED A ROLE FROM <@' + msg.author.id + '>. ONE LESS TRAITOR IN THE RANKS').catch(console.error);
  			  }
  		  }
  	  break;

      case 'VOTE':
        var voteargs = msg.content.split(' ');
        var optotal = voteargs.length;
        var optcount = 1;
        chan.send("YOUR ORGANIC INPUT IS DEFINITELY VALUED").then(function (message) {
          if (optotal == 1){
            message.react('👎')
            message.react('👍')
          }
          else{
            while (optcount < optotal){
              message.react(voteargs[optcount]);
              optcount++;
            }
          }
        })
        .catch(console.error);
      break;

      case 'YESORNO':
      case 'YN':
      case 'Y/N':
        chan.send("VOTE NOW ON YOUR PHONES").then(function (message) {
          message.react('👎')
          message.react('👍')})
          .catch(console.error);
      break;

      case 'DIE':
      case 'DEATH':
        var chosendeath = deathArray[Math.floor(Math.random() * deathArray.length)];
        chan.send("<@" + msg.author.id + "> WAS KILLED BY " + chosendeath + ". THEY BECAME A SPOOKY GHOST!").catch(console.error);
      break;


      case 'PROMPT':
        if (msg.content.split(' ').length > 1) {
          var promptedchar = msg.content.slice(7).toUpperCase();
        }
        else {
          var promptedchar = promptchars[Math.floor(Math.random() * promptchars.length)];
        }
        var promptedwords = promptwords[Math.floor(Math.random() * promptwords.length)];
        chan.send(promptedchar + " " + promptedwords).catch(console.error);
      break;

      case 'ROBOPROMPT':
      case 'ROBOTPROMPT':
        if (msg.content.split(' ').length > 1) {
          var promptedchar = msg.content.split(' ')[1].toUpperCase();
        }
        else {
          var promptedchar = robopromptchars[Math.floor(Math.random() * robopromptchars.length)];
        }
        var promptedwords = robopromptwords[Math.floor(Math.random() * robopromptwords.length)];
        chan.send(promptedchar + promptedwords).catch(console.error);
      break;

      case 'FICPROMPT':
        var pargs = msg.content.split(' ');
        if (pargs.length > 3) {
          var promptedchar1 = pargs[1].toUpperCase();
          var promptedchar2 = pargs[2].toUpperCase();
          for (var n = 3; n < pargs.length; n++){
            promptedchar2 = promptedchar2 + " AND " +  pargs[n].toUpperCase();
          }
        }
        else if (pargs.length > 2) {
          var promptedchar1 = pargs[1].toUpperCase();
          var promptedchar2 = pargs[2].toUpperCase();
        }
        else if (pargs.length > 1) {
          var promptedchar1 = pargs[1].toUpperCase();
          var promptedchar2 = promptchars[Math.floor(Math.random() * promptchars.length)];
        }
        else {
          var promptedchar1 = promptchars[Math.floor(Math.random() * promptchars.length)];
          var promptedchar2 = promptchars[Math.floor(Math.random() * promptchars.length)];
        }
        var promptedficwords = ficpromptwords[Math.floor(Math.random() * ficpromptwords.length)];
        chan.send(promptedchar1 + " AND " + promptedchar2 + promptedficwords).catch(console.error);
      break;

      case 'MERPROMPT':
      case 'MERMPROMPT':
        if (msg.content.split(' ').length > 1) {
          var promptedchar = msg.content.split(' ')[1].toUpperCase();
        }
        else {
          var promptedchar = promptchars[Math.floor(Math.random() * (promptchars.length - 6)) + 6];
        }
        var promptedwords = merpromptwords[Math.floor(Math.random() * merpromptwords.length)];
        chan.send("MER-" + promptedchar + promptedwords).catch(console.error);
      break;

      case 'TRIPROMPT':
      case 'TRIUMPHPROMPT':
      case 'TRIUMPHANTPROMPT':
        if (msg.content.split(' ').length > 1) {
          var promptedchar = msg.content.split(' ')[1].toUpperCase();
        }
        else {
          var promptedchar = promptchars[Math.floor(Math.random() * (promptchars.length - 6)) + 6];
        }
        var promptedwords = tripromptwords[Math.floor(Math.random() * tripromptwords.length)];
        chan.send("TRIUMPHANT " + promptedchar + promptedwords).catch(console.error);
      break;

      case 'APPRECIATEHAL':
        var thankyou = thanksArray[Math.floor(Math.random() * thanksArray.length)];
        chan.send(thankyou).catch(console.error);
      break;

      case 'COMPLIMENT':
  		  if (msg.content.split(' ').length == 1) {
          chan.send('COMPLIMENT WHO').catch(console.error);
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
  				  chan.send("HA HA VERY FUNNY").catch(console.error);
            break;
          }
  			  else if (recipient === "ME"){
  				  if (msg.author.id == deroID){
  					  recipient = "<@" + deroID + ">";
  					  var choice2 = roboComplimentsArray[Math.floor(Math.random() * roboComplimentsArray.length)];
  				  }
  				  else if (msg.author.id == karmaID){
  					  recipient = "<@" + karmaID + ">";
  					  var choice2 = lizardComplimentsArray[Math.floor(Math.random() * lizardComplimentsArray.length)];
  				  }
  				  else {
  					  recipient = "<@" + msg.author.id + ">";
  					  var choice2 = complimentsArray[Math.floor(Math.random() * complimentsArray.length)];
  				  }
  			  }
  			  else if (recipient === "HAL" || recipient === "YOURSELF" || recipient === "<:BELOVEDBOT:397123738522484736>" || recipient === "<@396859791877734410>" || recipient === "@HAL") {
  				  var selfCompliment = selfComplimentsArray[Math.floor(Math.random() * selfComplimentsArray.length)];
  				  chan.send(selfCompliment).catch(console.error);
            break;
  			  }
  			  else {
            var choice2 = complimentsArray[Math.floor(Math.random() * complimentsArray.length)];
          }
  			  chan.send(recipient + ', ' + choice2).catch(console.error);
  		  }
      break;

      case 'JOKE':
        var jokeChoice = jokesArray[Math.floor(Math.random() * jokesArray.length)];
        chan.send(jokeChoice).catch(console.error);
      break;

  	  case 'NEWJOKE':
        var jokeChoice2 = jokesArray[Math.floor(Math.random() * (jokesArray.length - newJokeThreshold)) + newJokeThreshold];
        chan.send(jokeChoice2).catch(console.error);
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
  				  chan.send("AM/PM OPERATOR NOT RECOGNIZED. PLEASE USE EITHER 'AM' OR 'PM', OR LEAVE BLANK FOR 24-HOUR CLOCK TIME. PERHAPS CHECK YOUR SPACING?").catch(console.error);
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
    			chan.send("INCORRECT NUMBER OF ARGUMENTS. PLEASE CHECK YOUR SPACING").catch(console.error);
    			break;
    		}

    		if (!timezoneDict.hasOwnProperty(timezoneFrom) || !timezoneDict.hasOwnProperty(timezoneTo)){
    			chan.send("I DON'T RECOGNIZE ONE OR BOTH OF THOSE TIMEZONES").catch(console.error);
    			break;
    		}

    		if ( (military && hour > 24) || (!military && hour > 12) || hour < 1 || min < 0 || min > 60) {
    			chan.send("ARE YOU SURE THAT IS A TIME").catch(console.error);
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

        chan.send(finalOutput).catch(console.error);
    	break;

      case 'REDACT':
        if (msg.member.hasPermission("MANAGE_ROLES")) {
          if (msg.content.split(' ').length > 1) {
            var redactID = msg.content.split(' ')[1];
            var footer = "LINKS REDACTED."
            if (msg.content.split(' ').length > 2) {
              var reasonIndex = msg.content.indexOf(' ', msg.content.indexOf(' ') + 1);
              var reason = msg.content.substr(reasonIndex + 1);
              footer += " REASON: " + reason;
            }

            try {
               chan.fetchMessage(redactID).then(originmsg => {
                 const embed = new Discord.RichEmbed()
                 .setAuthor(originmsg.author.username)
                 .setFooter(footer);
                 console.log(originmsg.attachments);
                 console.log(isEmptyMap(originmsg.attachments));
                 if (originmsg.attachments.first() == null) {
                   embed.setDescription(originmsg.content);
                 }
                 else {
                   embed.setDescription(originmsg.content + " " + originmsg.attachments.first().proxyURL);
                 }
                 originmsg.delete();
                 msg.delete();
                 chan.send({embed});
               }).catch(console.error);
            } catch (error) {
              return msg.reply('THAT MESSAGE COULD NOT BE FOUND');
            }
          }
        }
      break;
  }
}
});

/*
bot.on('guildMemberAdd', function(member) {
	bot.channels.get("393845951292243980").send('<@' + member.id + '> DETECTED. YOU HAVE BEEN ASSIMILATED TO THE ROBOT PIZZA PARTY. READ THE <#393842582414688269> AND POST AN INTRODUCTION  IN  <#396067802970193920>. ADD YOUR PRONOUNS IN <#397067658052239361> (LOOK IN <#393842582414688269> FOR INSTRUCTIONS) SHARE AND ENJOY :pizza:').catch(console.error);
});*/


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
