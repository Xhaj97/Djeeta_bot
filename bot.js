// VARIABLES
const Discord = require('discord.js');
const bot = new Discord.Client();

// VARIABLES
const help =
    '__**Commands list:**__' +
    '\n' +
    '\n!helpme'+
    '\n!avatar <ping somebody> or <get his id>' +
    '\n!rolelist' +
    '\n!addrole ---' +
    '\n!removerole ---' +
    '\n!emolist' +
    '\n!emo ---' +
    '\n!choose choice1 or choice2'+
    '\n'+
    "\nThe bot answers you if you call her : 'Chicken !'";

const roleslist =
    '__**List of roles:**__'+
    '\n'+
    '\n**Elements**: *fire, water, earth, wind, dark, light*'+
    '\n**Magna2**: *shiva, europa, grimnir, alexiel, metatron, avatar*'+
	  '\n**Buncles**: *HectorHL, AnubisHL, PromHL, CaOngHL, GilgaHL, MorriHL*'+
    '\n**Dragons**: *6dragontime, fediel, wamdus, galleon, ewiyar, lu woh, wilnas*'+
    '\n**Others**: *grandorder, ubahahl, malice, akasha, lucilius, luciliushard bahaHL, huanglin, bubz*'+
    '\n**Weird stuff**: *degenerate*'+
    '\n'+
    '\n Want more roles ? PM the Officers or directly <@!159687457049280512>' +
    '\n ⚠ **degenerate** role cannot be removed if added. ⚠';

const emolist =
    '__**List of emojis:**__'+
    '\n'+
    '\n **regular:**'+
    '\ncool, salt, bow,'+
    '\nawesome, amazing, cry, claris,'+
    '\neh, help, ok, woo, lewd'+
    '\nrainbow, shock, nani'+
    '\nbored, lily,'+
    '\nshy, whale, slack, boldgar,'+
    '\nnice, rekt, leech, yipyuel,'+
    '\nyipsochie, chomp, police'+
    '\nshrug, nio, yes, boldgar2'+
    '\nno, sadj, homete, altoxi'+
    '\n fight, xarp, gmorning, gnight'+
    '\n lecia, erucry, orotea '+
    '\n eyy, pholieh, smug'+
    '\n zoi, zoi2, smug2'+
    '\n culture, cagj, jslack'+
    '\n saddj, sadl, thx'+
    '\n'+
    '\n **gif:**'+
    '\n jk, niopeek, urg'+
    '\n nade'+
    '\n'+
    '\nFeel free to pm <@!159687457049280512> for more emojis.';

bot.on('ready', () => {
    console.log('Server is ready.');
    bot.user.setActivity('with chickens');
});


// To welcome the new member
bot.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const welcomeChannel = member.guild.channels.find(channel => channel.name === 'crew_lounge');
    // Do nothing if the channel wasn't found on this server
    if (!welcomeChannel) return;
    // Send the message, mentioning the member
    welcomeChannel.send(`Welcome to the server ${member} ! Feel free to add some roles in <#257009251438821386>`);
    welcomeChannel.send(` `, {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/welcome.png"
            });
});

// To bid farewell to a leaving member
bot.on('guildMemberRemove', member => {
    //client.channels.find('log_channel').send(`**${member.username}** has just left server.. Bye Bye`);
    bot.channels.find('log_channel').send(`**${member.username}** has just left server.. Chicken will miss you.... Maybe`);
});

// To see the commands list
bot.on('message', message => {

    // Get string of input
    let str = message.content.toLowerCase();
    let str0 = message.content.replace(/([^a-z!]+)/gim, '').toLowerCase();
    str0 = str0.replace('L', 'i');
    str0 = str0.replace('l', 'i');

    // if it's help
    if (str === '!helpme') {
        message.channel.send(help);
    }

    if (message.content.startsWith("!avatar")) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: ${message.author.displayAvatarURL}`);
        }
        const avatarList = message.mentions.users.map(user => {
            return `${user.username}\'s avatar: ${user.displayAvatarURL}`;
        });
        message.channel.send(avatarList);
    }

    // see roles list
    else if(str.startsWith("!rolelist"))
    {
        message.channel.send(roleslist);
    }

    // see roles list
    else if(str.startsWith("!emolist"))
    {
        // message.channel.send(emolist);
        message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/emolist.png"
            });
    }

    // emojis
    else if (str.startsWith("!emo") && !message.member.roles.has('276934342708690967'))
    {
        if (str.includes("cool"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/risend/vampy/master/images/cool.png"
            });
        }
        else if (str.includes("salt"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/risend/vampy/master/images/salt.png"
            });
        }
        else if (str.includes("bored"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/bored.png"
            });
        }
		else if (str.includes("oyoyo"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/oyoyo.png"
            });
        }
        else if (str.includes("doggo"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/doggo.png"
            });
        }
        else if (str.includes("goodwork"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/goodwork.png"
            });
        }
        else if (str.includes("goodshit"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/goodshit.jpg"
            });
        }
        else if (str.includes("medugood"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/medugood.png"
            });
        }
        else if (str.includes("praise"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/praise.jpg"
            });
        }
        else if (str.includes("squat"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/squat.png"
            });
        }
        else if (str.includes("yggy"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/yggy.gif"
            });
        }
        else if (str.includes("chomp"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/chomp.png"
            });
        }
        else if (str.includes("cagj"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/CagJ.png"
            });
        }
        else if (str.includes("jk"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/jk.gif"
            });
        }
        else if (str.includes("nade"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/nade.gif"
            });
        }
        else if (str.includes("jslack"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/jslack.png"
            });
        }
        else if (str.includes("niopeek"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/niopeek.gif"
            });
        }
        else if (str.includes("saddj"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/saddj.png"
            });
        }
        else if (str.includes("sadl"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/sadl.png"
            });
        }
        else if (str.includes("thx"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/thx.png"
            });
        }
        else if (str.includes("urg"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/urg.gif"
            });
        }
        else if (str.includes("smug2"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/smug2.png"
            });
        }
        else if (str.includes("zoi2"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/zoi2.png"
            });
        }
        else if (str.includes("altoxi"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/altoxi.png"
            });
        }
        else if (str.includes("xarp"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/xarp.png"
            });
        }
         else if (str.includes("orotea"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/orotea.png"
            });
        }
         else if (str.includes("zoi"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/zoi.png"
            });
        }
         else if (str.includes("smug"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/smug.png"
            });
        }
         else if (str.includes("pholieh"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/pholieh.png"
            });
        }
         else if (str.includes("eyy"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/eyy.png"
            });
        }
        else if (str.includes("gmorning"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/gmorning.png"
            });
        }
        else if (str.includes("gnight"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/gnight.png"
            });
        }
        else if (str.includes("no"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/no.png"
            });
        }
        else if (str.includes("ok"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/ok.png"
            });
        }
        else if (str.includes("culture"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/culture.png"
            });
        }
        else if (str.includes("sadj"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/sadj.png"
            });
        }
        else if (str.includes("homete"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/homete.png"
            });
        }
        else if (str.includes("fight"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/fight.png"
            });
        }
        else if (str.includes("nio"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/nio.png"
            });
        }
        else if (str.includes("shrug"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/shrug.png"
            });
        }
        else if (str.includes("slack"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/slack.png"
            });
        }
        else if (str.includes("whale"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/whale.png"
            });
        }
        else if (str.includes("leech"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/lml.jpg"
            });
        }
        else if (str.includes("nice"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/nice.png"
            });
        }
        else if (str.includes("police"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/police.png"
            });
        }
        else if (str.includes("yipyuel"))
        {
            message.channel.send(" ", {
                file: "http://vampy.moe/images/emojis/official2/yipyuel.png"
            });
        }
        else if (str.includes("yipsochie"))
        {
            message.channel.send(" ", {
                file: "http://vampy.moe/images/emojis/official2/yipsochie.png"
            });
        }
        else if (str.includes("rekt"))
        {
            message.channel.send(" ", {
                file: "http://i0.kym-cdn.com/photos/images/newsfeed/000/739/555/d4c.gif"
            });
        }
        else if (str.includes("lily"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/risend/vampy/master/images/lily.png"
            });
        }
         else if (str.includes("shy"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/shy.png"
            });
        }
        else if (str.includes("erucry"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/erucry.png"
            });
        }
        else if (str.includes("yes"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/yes.jpg"
            });
        }
        else if (str.includes("bow"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/risend/vampy/master/images/bow2.png"
            });
        }
        else if (str.includes("boldgar"))
        {
            if (str.includes("2")){
                message.channel.send(" ", {
                    file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/gold2.png"
                });
            }
            else
            {
                message.channel.send(" ", {
                    file: "http://i65.tinypic.com/lwr6d.png"
                });
            }
        }
        else if (str.includes("awesome"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/risend/vampy/master/images/awesome.png"
            });
        }
        else if (str.includes("amazing"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/risend/vampy/master/images/amazing.png"
            });
        }
        else if (str.includes("cry"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/risend/vampy/master/images/cry.png"
            });
        }
        else if (str.includes("claris"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/risend/vampy/master/images/claris.png"
            });
        }
        else if (str.includes("eh"))
        {
            message.channel.send(" ", {
                file: "https://risend.github.io/vampy/images/eh.png"
            });
        }
        else if (str.includes("help"))
        {
            message.channel.send(" ", {
                file: "https://risend.github.io/vampy/images/help.png"
            });
        }
        else if (str.includes("lecia"))
        {
            message.channel.send(" ", {
                file: "https://risend.github.io/vampy/images/lecia.png"
            });
        }
        else if (str.includes("woo"))
        {
            message.channel.send(" ", {
                file: "https://risend.github.io/vampy/images/ohhh.png"
            });
        }
        else if (str.includes("lewd"))
        {
            message.channel.send(" ", {
                file: "https://risend.github.io/vampy/images/lewd.png"
            });
        }
        else if (str.includes("rainbow"))
        {
            message.channel.send(" ", {
                file: "https://risend.github.io/vampy/images/rainbowplz2.png"
            });
        }
        else if (str.includes("shock"))
        {
            message.channel.send(" ", {
                file: "https://risend.github.io/vampy/images/shock.png"
            });
        }
        else if (str.includes("nani"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/nani.jpg"
            });
        }
        else
        {
            message.channel.send("This emoji doesn't exist. Please see !emolist.");
        }
    }

    // addrole
    else if(str.startsWith("!addrole"))
    {
        if(str.includes("fire"))
        {
            if(message.member.roles.has('256273223019134987')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.addRole('256273223019134987')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Fire role has been added.");
            }
        }
        else if(str.includes("water"))
        {
            if(message.member.roles.has('256273237447671820')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.addRole('256273237447671820')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Water role has been added.");
            }
        }
        else if(str.includes("wind"))
        {
            if(message.member.roles.has('256273265922670593')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.addRole('256273265922670593')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Wind role has been added.");
            }
        }
        else if(str.includes("earth"))
        {
            if(message.member.roles.has('256273252417011713')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.addRole('256273252417011713')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Earth role has been added");
            }
        }
        else if(str.includes("dark"))
        {
            if(message.member.roles.has('256273163925717002')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.addRole('256273163925717002')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Dark role has been added");
            }
        }
        else if(str.includes("light"))
        {
            if(message.member.roles.has('256273197681475585')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.addRole('256273197681475585')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Light role has been added");
            }
        }
        else if(str.includes("shiva"))
        {
            if(message.member.roles.has('451762194804113408')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.addRole('451762194804113408')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Shiva role has been added");
            }
        }
        else if(str.includes("europa"))
        {
            if(message.member.roles.has('451762302904172544')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.addRole('451762302904172544')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Europa role has been added");
            }
        }
        else if(str.includes("grimnir"))
        {
            if(message.member.roles.has('451762484882440202')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.addRole('451762484882440202')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Grimnir role has been added");
            }
        }

        else if(str.includes("alexiel"))
        {
            if(message.member.roles.has('451762646316744715')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.addRole('451762646316744715')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Alexiel role has been added");
            }
        }

        else if(str.includes("metatron"))
        {
            if(message.member.roles.has('451763004510437386')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.addRole('451763004510437386')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Metatron role has been added");
            }
        }

        else if(str.includes("avatar"))
        {
            if(message.member.roles.has('451763042267693066')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.addRole('451763042267693066')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Avatar role has been added");
            }
        }
        else if(str.includes("malice"))
        {
            if(message.member.roles.has('524653613730234398')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.addRole('524653613730234398')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Malice role has been added");
            }
        }
        else if(str.includes("akasha"))
        {
            if(message.member.roles.has('524653709104513024')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.addRole('524653709104513024')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Akasha role has been added");
            }
        }
        else if(str.includes("ubahahl"))
        {
            if(message.member.roles.has('451763227341094913')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.addRole('451763227341094913')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("UbahaHL role has been added. You have now access to ubahahl room.");
            }
        }
        else if(str.includes("bahahl"))
        {
            if(message.member.roles.has('571669323513593856')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.addRole('571669323513593856')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Bahamut HL role has been added");
            }
        }
        else if(str.includes("grandorder"))
        {
            if(message.member.roles.has('451763323046854666')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.addRole('451763323046854666')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Grand Order role has been added");
            }
        }

        else if(str.includes("degenerate"))
        {
            if(message.member.roles.has('445037108386725898')) {
                message.channel.send("Y-you already have this role! B-baka!");
            } else {
                message.member.addRole('445037108386725898')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Degenerate role has been added. You cannot remove this role.");
            }
        }
		else if(str.includes("luciliushard"))
        {
            if(message.member.roles.has('592390712344182785')) {
                message.channel.send("Y-you already have this role! B-baka!");
            } else {
                message.member.addRole('592390712344182785')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("LuciliusHard role has been added.");
            }
        }
        else if(str.includes("lucilius"))
        {
            if(message.member.roles.has('567229397938077696')) {
                message.channel.send("Y-you already have this role! B-baka!");
            } else {
                message.member.addRole('567229397938077696')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Lucilius role has been added.");
            }
        }
        else if(str.includes("huanglin"))
        {
            if(message.member.roles.has('571669068009046016')) {
                message.channel.send("Y-you already have this role! B-baka!");
            } else {
                message.member.addRole('571669068009046016')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Huanglong & Qilin role has been added.");
            }
        }
		else if(str.includes("hectorhl"))
        {
            if(message.member.roles.has('609099460085022720')) {
                message.channel.send("Y-you already have this role! B-baka!");
            } else {
                message.member.addRole('609099460085022720')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("HectorHL role has been added.");
            }
        }
		else if(str.includes("anubishl"))
        {
            if(message.member.roles.has('609098856684060683')) {
                message.channel.send("Y-you already have this role! B-baka!");
            } else {
                message.member.addRole('609098856684060683')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("AnubisHL role has been added.");
            }
        }
		else if(str.includes("promhl"))
        {
            if(message.member.roles.has('609098930910658608')) {
                message.channel.send("Y-you already have this role! B-baka!");
            } else {
                message.member.addRole('609098930910658608')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("PromHL role has been added.");
            }
        }
		else if(str.includes("caonghl"))
        {
            if(message.member.roles.has('609099072489390149')) {
                message.channel.send("Y-you already have this role! B-baka!");
            } else {
                message.member.addRole('609099072489390149')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("CaOngHL role has been added.");
            }
        }
		else if(str.includes("gilgahl"))
        {
            if(message.member.roles.has('609099222658318336')) {
                message.channel.send("Y-you already have this role! B-baka!");
            } else {
                message.member.addRole('609099222658318336')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("GilgaHL role has been added.");
            }
        }
		else if(str.includes("morrihl"))
        {
            if(message.member.roles.has('609099328287408128')) {
                message.channel.send("Y-you already have this role! B-baka!");
            } else {
                message.member.addRole('609099328287408128')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("MorriHL role has been added.");
            }
        }
		else if(str.includes("6dragontime"))
        {
            if(message.member.roles.has('755381937828397168')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.addRole('755381937828397168')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("6 Dragon time! role has been added");
            }
        }
		else if(str.includes("fediel"))
			{
				if(message.member.roles.has('711486614421110877')) {
					message.channel.send("Y-you already have this role!");
				} else {
					message.member.addRole('711486614421110877')
						.then(console.log)
						.catch(console.error);
					message.channel.send("Fediel role has been added");
				}
			}
		else if(str.includes("wamdus"))
			{
				if(message.member.roles.has('755381803879104512')) {
					message.channel.send("Y-you already have this role!");
				} else {
					message.member.addRole('755381803879104512')
						.then(console.log)
						.catch(console.error);
					message.channel.send("Wamdus role has been added");
				}
			}
		else if(str.includes("wilnas"))
			{
				if(message.member.roles.has('755381942387736597')) {
					message.channel.send("Y-you already have this role!");
				} else {
					message.member.addRole('755381942387736597')
						.then(console.log)
						.catch(console.error);
					message.channel.send("Wilnas role has been added");
				}
			}
		else if(str.includes("galleon"))
			{
				if(message.member.roles.has('760457936639098890')) {
					message.channel.send("Y-you already have this role!");
				} else {
					message.member.addRole('760457936639098890')
						.then(console.log)
						.catch(console.error);
					message.channel.send("Galleon role has been added");
				}
			}
		else if(str.includes("luwoh"))
			{
				if(message.member.roles.has('760457934525300737')) {
					message.channel.send("Y-you already have this role!");
				} else {
					message.member.addRole('760457934525300737')
						.then(console.log)
						.catch(console.error);
					message.channel.send("Lu Woh role has been added");
				}
			}
		else if(str.includes("ewiyar"))
			{
				if(message.member.roles.has('760457890011676712')) {
					message.channel.send("Y-you already have this role!");
				} else {
					message.member.addRole('760457890011676712')
						.then(console.log)
						.catch(console.error);
					message.channel.send("Ewiyar role has been added");
				}
			}
		else if(str.includes("bubz"))
			{
				if(message.member.roles.has('760458480582393877')) {
					message.channel.send("Y-you already have this role!");
				} else {
					message.member.addRole('760458480582393877')
						.then(console.log)
						.catch(console.error);
					message.channel.send("Bubz role has been added");
				}
			}
        else
        {
            message.channel.send("This role does not exist. Please see !rolelist.");
        }
    }

    // removerole
    else if(str.startsWith("!removerole") && !message.member.roles.has('276934342708690967'))
    {
        if(str.includes("fire"))
        {
            if(!message.member.roles.has('256273223019134987')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('256273223019134987')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Fire role has been removed.");
            }
        }
        else if(str.includes("water"))
        {
            if(!message.member.roles.has('256273237447671820')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('256273237447671820')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Water role has been removed.");
            }
        }
        else if(str.includes("wind"))
        {
            if(!message.member.roles.has('256273265922670593')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('256273265922670593')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Wind role has been removed.");
            }
        }
        else if(str.includes("earth"))
        {
            if(!message.member.roles.has('256273252417011713')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.removeRole('256273252417011713')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Earth role has been removed.");
            }
        }
        else if(str.includes("dark"))
        {
            if(!message.member.roles.has('256273163925717002')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('256273163925717002')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Dark role has been removed.");
            }
        }
        else if(str.includes("light"))
        {
            if(!message.member.roles.has('256273197681475585')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('256273197681475585')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Light role has been removed.");
            }
        }
        else if(str.includes("shiva"))
        {
            if(!message.member.roles.has('451762194804113408')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('451762194804113408')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Shiva role has been removed.");
            }
        }
        else if(str.includes("europa"))
        {
            if(!message.member.roles.has('451762302904172544')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('451762302904172544')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Europa role has been removed.");
            }
        }
        else if(str.includes("grimnir"))
        {
            if(!message.member.roles.has('451762484882440202')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('451762484882440202')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Grimnir role has been removed.");
            }
        }
        else if(str.includes("alexiel"))
        {
            if(!message.member.roles.has('451762646316744715')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('451762646316744715')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Alexiel role has been removed.");
            }
        }
        else if(str.includes("metatron"))
        {
            if(!message.member.roles.has('451763004510437386')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('451763004510437386')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Metatron role has been removed.");
            }
        }
        else if(str.includes("avatar"))
        {
            if(!message.member.roles.has('451763042267693066')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('451763042267693066')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Avatar role has been removed.");
            }
        }
        else if(str.includes("ubahahl"))
        {
            if(!message.member.roles.has('451763227341094913')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('451763227341094913')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("UbahaHL role has been removed.");
            }
        }
        else if(str.includes("bahahl"))
        {
            if(!message.member.roles.has('571669323513593856')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('571669323513593856')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Bahamut HL role has been removed.");
            }
        }
        else if(str.includes("grandorder"))
        {
            if(!message.member.roles.has('451763323046854666')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('451763323046854666')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Grand Order role has been removed.");
            }
        }
        else if(str.includes("akasha"))
        {
            if(!message.member.roles.has('524653709104513024')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('524653709104513024')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Akasha role has been removed.");
            }524653709104513024
        }
        else if(str.includes("malice"))
        {
            if(!message.member.roles.has('524653613730234398')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('524653613730234398')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Malice role has been removed.");
            }
        }
		else if(str.includes("luciliushard"))
        {
            if(!message.member.roles.has('592390712344182785')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('592390712344182785')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("LuciliusHard role has been removed.");
            }
        }
        else if(str.includes("lucilius"))
        {
            if(!message.member.roles.has('567229397938077696')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('567229397938077696')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Lucilius role has been removed.");
            }
        }
        else if(str.includes("huanglin"))
        {
            if(!message.member.roles.has('571669068009046016')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('571669068009046016')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Huanglong & Qilin role has been removed.");
            }
        }
		else if(str.includes("hectorhl"))
        {
            if(!message.member.roles.has('609099460085022720')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('609099460085022720')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("HectorHL role has been removed.");
            }
        }
		else if(str.includes("anubishl"))
        {
            if(!message.member.roles.has('609098856684060683')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('609098856684060683')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("AnubisHL role has been removed.");
            }
        }
		else if(str.includes("promhl"))
        {
            if(!message.member.roles.has('609098930910658608')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('609098930910658608')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("PromHL role has been removed.");
            }
        }
		else if(str.includes("caonghl"))
        {
            if(!message.member.roles.has('609099072489390149')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('609099072489390149')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("CaOngHL role has been removed.");
            }
        }
		else if(str.includes("gilgahl"))
        {
            if(!message.member.roles.has('609099222658318336')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('609099222658318336')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("GilgaHL role has been removed.");
            }
        }
    else if(str.includes("6dragontime"))
        {
            if(message.member.roles.has('755381937828397168')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.removeRole('755381937828397168')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("6 Dragon time! role has been removed");
            }
        }
    else if(str.includes("fediel"))
        {
            if(message.member.roles.has('711486614421110877')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.removeRole('711486614421110877')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Fediel role has been removed");
            }
        }
    else if(str.includes("wamdus"))
        {
            if(message.member.roles.has('755381803879104512')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.removeRole('755381803879104512')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Wamdus role has been removed");
            }
        }
    else if(str.includes("wilnas"))
        {
            if(message.member.roles.has('755381942387736597')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.removeRole('755381942387736597')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Wilnas role has been removed");
            }
        }
    else if(str.includes("galleon"))
        {
            if(message.member.roles.has('760457936639098890')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.removeRole('760457936639098890')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Galleon role has been removed");
            }
        }
    else if(str.includes("luwoh"))
        {
            if(message.member.roles.has('760457934525300737')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.removeRole('760457934525300737')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Lu Woh role has been removed");
            }
        }
    else if(str.includes("ewiyar"))
        {
            if(message.member.roles.has('760457890011676712')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.removeRole('760457890011676712')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Ewiyar role has been removed");
            }
        }
    else if(str.includes("bubz"))
        {
            if(message.member.roles.has('760458480582393877')) {
                message.channel.send("Y-you already have this role!");
            } else {
                message.member.removeRole('760458480582393877')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Bubz role has been removed");
            }
        }
		else if(str.includes("morrihl"))
        {
            if(!message.member.roles.has('609099328287408128')) {
                message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('609099328287408128')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("MorriHL role has been removed.");
            }
        }
        else
        {
            message.channel.send("This role does not exist. Please see !rolelist.");
        }
    }

	else if(str.includes("chicken") === true && str.includes("love you") === true && !message.member.roles.has('276934342708690967'))
     {
		 // <@&678941651795836958>
         let number = Math.floor(Math.random() * 6);
         if(number ===  0)
         {
             message.channel.send("Chicken loves you too !");

			 if(!message.member.roles.has('678941651795836958')) {
                // message.channel.send("You don't have this role.");
            } else {
                message.member.removeRole('678941651795836958')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("You are not in the friendzone anymore ! Now's your chance !");
            }
         }
         else if(number ===  1)
         {
             message.channel.send("Huum ?");
         }
         else if(number ===  2)
         {
             message.channel.send("Are you a chicken ? I only like chicken.");
         }
		 else if(number ===  3)
         {
             message.channel.send("Who are you again ?");
         }
         else
         {
             message.channel.send("Chicken can be friend with you.");

			 if(message.member.roles.has('678941651795836958')) {
                // message.channel.send("Y-you already have this role! B-baka!");
            } else {
                message.member.addRole('678941651795836958')
                    .then(console.log)
                    .catch(console.error);
                message.channel.send("Chicken gave you a special role ! check it out !");
            }
         }
     }

     else if(str.startsWith("chicken !") === true && !message.member.roles.has('276934342708690967'))
     {
         let number = Math.floor(Math.random() * 4);
         if (number === 0)
         {
             message.channel.send("Hum ?");
         }
         else if(number === 1)
         {
             message.channel.send("Not now i'm trying to play gbf...");
         }
         else if(number === 2)
         {
             message.channel.send("Did you just call me ?");
         }
         else if(number === 3)
         {
             message.channel.send("'Sup chickens?");
         }
     }

//     else if(str.includes("Chicken") === true && str.includes("what do") === true && !message.member.roles.has('276934342708690967'))
//     {
//         let number = Math.floor(Math.random() * 5);
//         if (number === 0)
//         {
//             message.channel.send("Humm...Not telling you.");
//         }
//         else if(number === 1)
//         {
//             message.channel.send("I want to eat chicken o_o.");
//         }
//         else if(number === 4)
//         {
//             message.channel.send("Give me something to eat first.");
//         }
//         else if(number === 2)
//         {
//             message.channel.send("Chicken don't know the answer.");
//         }
//         else if(number === 3)
//         {
//             message.channel.send("Zzzzz");

//         }
//     }

//     // Do you question
//     else if(str.includes("Chicken") === true && str.includes("do you") === true && !message.member.roles.has('276934342708690967'))
//     {
//         let number = Math.floor(Math.random() * 4);
//         if (number === 0)
//         {
//             message.channel.send("Yes i do !");
//         }
//         else if(number === 1)
//         {
//             message.channel.send("No i don't.");
//         }
//         else if(number === 2)
//         {
//             message.channel.send("Hum. Chicken don't know the answer.");
//         }
//         else if(number === 3)
//         {
//             message.channel.send("Zzzzz");

//         }
//     }

//     //don't you question
//     else if(str.includes("Chicken") === true && str.includes("don't you") === true && !message.member.roles.has('276934342708690967'))
//     {
//         let number = Math.floor(Math.random() * 4);
//         if (number === 0)
//         {
//             message.channel.send("Yes i do !");
//         }
//         else if(number === 1)
//         {
//             message.channel.send("No i don't.");
//         }
//         else if(number === 2)
//         {
//             message.channel.send("Hum i'm not sure how to answer sorry !");
//         }
//         else if(number === 3)
//         {
//             message.channel.send("Zzzzz");

//         }
//     }

//     // Why question
//     else if(str.includes("Chicken") === true && !message.member.roles.has('276934342708690967') && (str.includes("why") === true || str.includes("Why") === true) )
//     {
//         let number = Math.floor(Math.random() * 4);
//         if (number === 0)
//         {
//             message.channel.send("Hum i don't know...");
//         }
//         else if(number === 1)
//         {
//             message.channel.send("Coz Chicken wanted it to be like this !");
//         }
//         else if(number === 2)
//         {
//             message.channel.send("That's a good question ! Let me sleep now.");
//         }
//         else if(number === 3)
//         {
//             message.channel.send("I am hungry ! I want to watch TV");
//         }
//     }

//     // Are you question
//     else if (str.includes("Chicken") === true && !message.member.roles.has('276934342708690967') && (str.includes("are you") === true || str.includes("Are you") === true))
//     {
//         let number = Math.floor(Math.random() * 5);

//         if(number%2 === 0)
//         {
//             message.channel.send("Chicks !");
//         }

//         else if(number%2 === 1)
//         {
//             message.channel.send("I am too lazy to answer.");
//         }
//         else if(number%2 === 2)
//         {
//             message.channel.send("Chicks! ");
//         }
//         else if(number%2 === 3)
//         {
//             message.channel.send("Not listening ! ");
//         }
//     }

    //If it's to make a choice
    else if (str.includes("!choose") && !message.member.roles.has('276934342708690967')) {
        let number = Math.floor(Math.random() * 5);
        let temp = message.content;

        if(!str.includes("or"))
        {
            message.channel.send("Use 'or' between the TWO elements.");
        }
        else if(number%2 ===  0)
        {
            temp = temp.substring(8, str.indexOf("or"));
            message.channel.send(temp);
        }
        else if(number%2 === 1)
        {
            temp = temp.substring(str.indexOf("or")+3, );
            message.channel.send(temp);
        }
    }
//     else if (!message.member.roles.has('276934342708690967') && (str.includes("carry") || str.includes("Carry"))){
//         let number = Math.floor(Math.random() * 3);
//         if (str.includes("need") || str.includes("Need")){
//             if(number ===  0)
//             {
//                 message.channel.send("I can carry if you want.");
//             }
//             else if(number ===  1)
//             {
//                 message.channel.send("You called for carry ? -_-");
//             }
//             else
//             {
//                 message.channel.send("Carry me! ");
//             }
//         }
//     }
    else if (str.includes("arrest this man") && !message.member.roles.has('276934342708690967') || str.includes("arrest this dude") )
    {
        let number = Math.floor(Math.random() * 5);
        let temp = message.content;

        if(number%2 ===  0)
        {
            message.channel.send("Yes! This is my job after all.");
        }
        else
        {
            message.channel.send("Got it.");
        }

    }

});

bot.login(process.env.BOT_TOKEN);
//process.env.BOT_TOKEN
