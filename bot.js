
// VARIABLES
const Discord =  require('discord.js');
const bot = new Discord.Client();
const sql = require("sqlite");
sql.open("./score.sqlite");

// VARIABLES
const help =
    '\n__***Commands list:***__' +
    '\n' +
    '\n!choose choice1 or choice2' +
    '\n!ranking' +
    '\n!mylevel' +
    '\n!mypoints';

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
    //For rank bot
    if (message.author.bot) return; // Ignore bots.
    if (message.channel.type === "dm") return; // Ignore DM channels.

    // Get string of input
    let str = message.content;

    // if it's help
    if (str === '!helpme') {
        message.channel.send(help);
    }

    // addrole
    else if(str.includes("!addrole fire"))
    {
        if(message.member.roles.has('256273223019134987')) {
            message.channel.send("You already have this role.");
        } else {
            message.member.addRole('256273223019134987')
                .then(console.log)
                .catch(console.error);
            message.channel.send("Fire role has been added.");
        }
    }
    else if(str.includes("!removerole fire"))
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
    else if(str.includes("!addrole water"))
    {
        if(message.member.roles.has('256273237447671820')) {
            message.channel.send("You already have this role.");
        } else {
            message.member.addRole('256273237447671820')
                .then(console.log)
                .catch(console.error);
            message.channel.send("Water role has been added.");
        }
    }
    else if(str.includes("!removerole water"))
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
    else if(str.includes("!addrole wind"))
    {
        if(message.member.roles.has('256273265922670593')) {
            message.channel.send("You already have this role.");
        } else {
            message.member.addRole('256273265922670593')
                .then(console.log)
                .catch(console.error);
            message.channel.send("Wind role has been added.");
        }
    }
    else if(str.includes("!removerole wind"))
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
    else if(str.includes("!addrole earth"))
    {
        if(message.member.roles.has('256273252417011713')) {
            message.channel.send("You already have this role.");
        } else {
            message.member.addRole('256273252417011713')
                .then(console.log)
                .catch(console.error);
            message.channel.send("Earth role has been added");
        }
    }
    else if(str.includes("!removerole earth"))
    {
        if(!message.member.roles.has('256273252417011713')) {
            message.channel.send("You don't have this role.");
        } else {
            message.member.removeRole('256273252417011713')
                .then(console.log)
                .catch(console.error);
            message.channel.send("Earth role has been removed.");
        }
    }
    else if(str.includes("!addrole dark"))
    {
        if(message.member.roles.has('256273163925717002')) {
            message.channel.send("You already have this role.");
        } else {
            message.member.addRole('256273163925717002')
                .then(console.log)
                .catch(console.error);
            message.channel.send("Dark role has been added");
        }
    }
    else if(str.includes("!removerole dark"))
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
    else if(str.includes("!addrole light"))
    {
        if(message.member.roles.has('256273197681475585')) {
            message.channel.send("You already have this role.");
        } else {
            message.member.addRole('256273197681475585')
                .then(console.log)
                .catch(console.error);
            message.channel.send("Light role has been added");
        }
    }
    else if(str.includes("!removerole light"))
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
    else if(str.includes("!addrole shiva"))
    {
        if(message.member.roles.has('451762194804113408')) {
            message.channel.send("You already have this role.");
        } else {
            message.member.addRole('451762194804113408')
                .then(console.log)
                .catch(console.error);
            message.channel.send("Shiva role has been added");
        }
    }
    else if(str.includes("!removerole shiva"))
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
    else if(str.includes("!addrole europa"))
    {
        if(message.member.roles.has('451762302904172544')) {
            message.channel.send("You already have this role.");
        } else {
            message.member.addRole('451762302904172544')
                .then(console.log)
                .catch(console.error);
            message.channel.send("Europa role has been added");
        }
    }
    else if(str.includes("!removerole europa"))
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
    else if(str.includes("!addrole grimnir"))
    {
        if(message.member.roles.has('451762484882440202')) {
            message.channel.send("You already have this role.");
        } else {
            message.member.addRole('451762484882440202')
                .then(console.log)
                .catch(console.error);
            message.channel.send("Grimnir role has been added");
        }
    }
    else if(str.includes("!removerole grimnir"))
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
    else if(str.includes("!addrole alexiel"))
    {
        if(message.member.roles.has('451762646316744715')) {
            message.channel.send("You already have this role.");
        } else {
            message.member.addRole('451762646316744715')
                .then(console.log)
                .catch(console.error);
            message.channel.send("Alexiel role has been added");
        }
    }
    else if(str.includes("!removerole alexiel"))
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
    else if(str.includes("!addrole metatron"))
    {
        if(message.member.roles.has('451763004510437386')) {
            message.channel.send("You already have this role.");
        } else {
            message.member.addRole('451763004510437386')
                .then(console.log)
                .catch(console.error);
            message.channel.send("Metatron role has been added");
        }
    }
    else if(str.includes("!removerole metatron"))
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
    else if(str.includes("!addrole avatar"))
    {
        if(message.member.roles.has('451763042267693066')) {
            message.channel.send("You already have this role.");
        } else {
            message.member.addRole('451763042267693066')
                .then(console.log)
                .catch(console.error);
            message.channel.send("Avatar role has been added");
        }
    }
    else if(str.includes("!removerole avatar"))
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
    else if(str.includes("!addrole ubahahl"))
    {
        if(message.member.roles.has('451763227341094913')) {
            message.channel.send("You already have this role.");
        } else {
            message.member.addRole('451763227341094913')
                .then(console.log)
                .catch(console.error);
            message.channel.send("UbahaHL role has been added");
        }
    }
    else if(str.includes("!removerole ubahahl"))
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
    else if(str.includes("!addrole go"))
    {
        if(message.member.roles.has('451763323046854666')) {
            message.channel.send("You already have this role.");
        } else {
            message.member.addRole('451763323046854666')
                .then(console.log)
                .catch(console.error);
            message.channel.send("Grand Order role has been added");
        }
    }
    else if(str.includes("!removerole go"))
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
    else if(str.includes("!addrole degenerate"))
    {
        if(message.member.roles.has('445037108386725898')) {
            message.channel.send("You already have this role.");
        } else {
            message.member.addRole('445037108386725898')
                .then(console.log)
                .catch(console.error);
            message.channel.send("Degenerate role has been added. You cannot remove this role.");
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

    else if(str.includes("Djeeta") === true && str.includes("!") === true)
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
            message.channel.send("You better choose : " + temp);
        }
        else if(number%2 === 1)
        {
            temp = temp.substring(str.indexOf("or")+3, );
            message.channel.send("Choose : " + temp);
        }
    }

    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
        if (!row) {
            sql.run("INSERT INTO scores (userId, username, points, level) VALUES (?, ?, ?, ?)", [message.author.id, message.author.tag, 1, 0]);
        } else {
            let curLevel = Math.floor(0.2 * Math.sqrt(row.points + 1));
            if (curLevel > row.level) {
                row.level = curLevel;
                sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
                message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
            }
            sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
        }
    }).catch(() => {
        console.error;
        sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, username TEXT, points INTEGER, level INTEGER)").then(() => {
            sql.run("INSERT INTO scores (userId, username, points, level) VALUES (?, ?, ?, ?)", [message.author.id, message.author.tag, 1, 0]);
        });
    });

    if (message.content.startsWith("!mylevel")) {
        sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
            if (!row) return message.reply("Your current level is 0");
            message.reply(`${row.username}, your current level is ${row.level}`);
        });
    }

    if (message.content.startsWith("!mypoints")) {
        sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
            if (!row) return message.reply("sadly you do not have any points yet!");
            message.reply(`you currently have ${row.points} points, good going!`);
        });
    }

    if (message.content.startsWith("!ranking")) {

        sql.get(`SELECT * FROM scores ORDER BY points DESC LIMIT 0, 1`).then(result => {
            if (!result) return message.channel.send("1 none");
            message.channel.send(`Ranking:\n1 ${result.username}`);

            sql.get(`SELECT * FROM scores ORDER BY points DESC LIMIT 1, 1`).then(result2 => {
                if (!result2) return message.channel.send("2 none");
                message.channel.send(`\n2 ${result2.username}`);

                sql.get(`SELECT * FROM scores ORDER BY points DESC LIMIT 2, 1`).then(result3 => {
                    if (!result3) return message.channel.send("3 none");
                    message.channel.send(`\n3 ${result3.username}`);

                    sql.get(`SELECT * FROM scores ORDER BY points DESC LIMIT 3, 1`).then(result4 => {
                        if (!result4) return message.channel.send("4 none");
                        message.channel.send(`\n4 ${result4.username}`);

                        sql.get(`SELECT * FROM scores ORDER BY points DESC LIMIT 4, 1`).then(result5 => {
                            if (!result5) return message.channel.send("5 none");
                            message.channel.send(`\n5 ${result5.username}`);
                        });
                    });
                });
            });
        });
    }
});

bot.login(process.env.BOT_TOKEN);
//process.env.BOT_TOKEN