// VARIABLES
const Discord =  require('discord.js');
const bot = new Discord.Client();

// VARIABLES
const help =
    '__**Commands list:**__' +
    '\n' +
    '\n!helpme'+
    '\n!roleslist' +
    '\n!addrole ---' +
    '\n!removerole ---' +
    '\n!emolist' +
    '\n!emo ---' +
    '\n!choose choice1 or choice2'+
    '\n'+
    "\nDjeeta answers your do you/ don't you /how /why questions !";

const roleslist =
    '__**List of roles:**__'+
    '\n'+
    '\n**Magna2**: *shiva, europa, grimnir, alexiel, metatron, avatar*'+
    '\n**Special**: *go, ubahahl*'+
    '\n**Weird stuff**: *degenerate* tag for ppl interested in trap, futa...'+
    '\n'+
    '\n**WARNING**, roles are case sensitive ! ~~Also, degenerate role cannot be removed if added~~.';

const emolist =
    '__**List of emojis:**__'+
    '\n'+
    '\ncool, salt, bow,'+
    '\nawesome, amazing, cry, claris,'+
    '\neh, help, ping'+
    '\nok, woo, lewd'+
    '\nrainbow, shock, nani'+
    '\nrage, bored, lily,'+
    '\nshy, whale, slack, boldgar,'+
    '\nnice, rekt, leech, yipyuel,'+
    '\nyipsochie, chomp, police'+
    '\nshrug, nio, yes, boldgar2'+
    '\nno'+
    '\n'+
    '\nFeel free to pm Shuura for more emojis.';

bot.on('ready', () => {
    console.log('Server is ready.');
    bot.user.setActivity('Granblue Fantasy');
});


// To welcome the new member
bot.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const welcomeChannel = member.guild.channels.find(channel => channel.name === 'crew_lounge');
    // Do nothing if the channel wasn't found on this server
    if (!welcomeChannel) return;
    // Send the message, mentioning the member
    welcomeChannel.send(`Welcome to the server ${member} ! Feel free to add some roles in #bot_spam channel.`);
});

// To see the commands list
bot.on('message', message => {

    // Get string of input
    let str = message.content;

    // if it's help
    if (str === '!helpme') {
        message.channel.send(help);
    }

    // see roles list
    else if(str.startsWith("!roleslist"))
    {
        message.channel.send(roleslist);
    }

    // see roles list
    else if(str.startsWith("!emolist"))
    {
        message.channel.send(emolist);
    }

    // emojis
    else if (str.startsWith("!emo"))
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
        else if (str.includes("chomp"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/chomp.png"
            });
        }
         else if (str.includes("ping"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/ping.gif"
            });
        }
        else if (str.includes("no"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/no.png"
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
        else if (str.includes("ok"))
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
        else if (str.includes("rage"))
        {
            message.channel.send(" ", {
                file: "https://raw.githubusercontent.com/Xhaj97/Djeeta_bot/master/img/rage.jpg"
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

        else if(str.includes("go"))
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
        else
        {
            message.channel.send("This role does not exist. Please see !addroleslist.");
        }
    }

    // removerole
    else if(str.startsWith("!removerole"))
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
        else if(str.includes("go"))
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
        else
        {
            message.channel.send("This role does not exist. Please see !addroleslist.");
        }
    }

    //Djeeta answers you
    else if(str.includes("Djeeta") === true && str.includes("love you") === true)
    {
        let number = Math.floor(Math.random() * 5);
        if(number ===  0)
        {
            message.channel.send("I love you too !");
        }
        else if(number ===  1)
        {
            message.channel.send("I think i'm in love too...");
        }
        else if(number ===  2)
        {
            message.channel.send("You're not my type of man sorry!");
        }
        else
        {
            message.channel.send("Let's stay friends!");
        }
    }

    else if(str.startsWith("Djeeta") === true && str.includes("!") === true)
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
            message.channel.send("Hi, what's up ?");
        }
    }

    // Do you question
    else if(str.includes("Djeeta") === true && str.includes("do you") === true)
    {
        let number = Math.floor(Math.random() * 4);
        if (number === 0)
        {
            message.channel.send("Yes i do !");
        }
        else if(number === 1)
        {
            message.channel.send("No i don't.");
        }
        else if(number === 2)
        {
            message.channel.send("Hum i'm not sure how to answer sorry !");
        }
        else if(number === 3)
        {
            message.channel.send("Yes !");
            message.channel.send("No !");
            message.channel.send("Hum.... i don't know...");
        }
    }

    //don't you question
    else if(str.includes("Djeeta") === true && str.includes("don't you") === true)
    {
        let number = Math.floor(Math.random() * 4);
        if (number === 0)
        {
            message.channel.send("Yes i do !");
        }
        else if(number === 1)
        {
            message.channel.send("No i don't.");
        }
        else if(number === 2)
        {
            message.channel.send("Hum i'm not sure how to answer sorry !");
        }
        else if(number === 3)
        {
            message.channel.send("Yes !");
            message.channel.send("No !");
            message.channel.send("Hum.... i don't know...");
        }
    }

    // Why question
    else if(str.includes("Djeeta") === true && (str.includes("why") === true || str.includes("Why") === true))
    {
        let number = Math.floor(Math.random() * 4);
        if (number === 0)
        {
            message.channel.send("Hum i don't know...");
        }
        else if(number === 1)
        {
            message.channel.send("That is because things have been done this way i guess...");
        }
        else if(number === 2)
        {
            message.channel.send("That's a good question ! The captain should know the answer!");
        }
        else if(number === 3)
        {
            message.channel.send("Hum, i'm sure you know the answer !");
        }
    }
    
    // Are you question
    else if (str.includes("Djeeta") === true && (str.includes("are you") === true || str.includes("Are you") === true)) 
    {
        let number = Math.floor(Math.random() * 5);

        if(number%2 ===  0)
        {
            message.channel.send("Yes i am.");
        }
        else if(number%2 === 1)
        {
            message.channel.send("Hum, no i am not.");
        }
    }

    //If it's to make a choice
    else if (str.includes("!choose")) {
        let number = Math.floor(Math.random() * 5);
        let temp = message.content;

        if(!str.includes("or"))
        {
            message.channel.send("Use 'or' between the two elements.");
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
    else if (!message.member.roles.has('276934342708690967') && (str.includes("carry") || str.includes("Carry"))){
        let number = Math.floor(Math.random() * 3);
        if (str.includes("need") || str.includes("Need")){
            if(number ===  0)
            {
                message.channel.send("I can carry if you want.");
            }
            else if(number ===  1)
            {
                message.channel.send("You called for carry ? :3");
            }
            else
            {
                message.channel.send("Carry me! ");
            }
        }
    }
    else if (str.includes("arrest this man") || str.includes("arrest this dude")) 
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
