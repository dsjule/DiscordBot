/**
 * Basic Discord bot created for personal use in a private server based on Genshin Impact game.
 * This bot contains reaction messages as well as some replies specific to users.
 * 
 * The commands are divided into different files that are all contained in a folder called "commands"
 * These files are like classes that represent a command.
 * 
 * The bot searches through the folder comparing the command sent by the user. Once the file is found, 
 * it executes the code inside it.
 * 
 * A few flags have been added to avoid spamming of some commands. Specially those that tag a user.
 * A 30 seconds cooldown is added for each command that is included in the switch case.
 * 
 * BOT USES DISCORD.JS and NODEJS to run.
 * 
 * LANGUAGE OF COMMANDS : SPANISH
 * 
 * TODO: 
 * - Move all commands to the switch case.
 * - Improve quality of code(Avoid repetition fo tasks by creating variables or files that execute the tasks.)
 */


//Include Discord.js Library.
const Discord = require("discord.js");

//create discord bot as client.
const client = new Discord.Client();

//Prefix that will be used to call the bot.
const prefix = "--";

//Create an object of the File Library to manage files.
const fs = require("fs");

//File created to make a react message to self assign roles.
const reclamarRol = require("./reclamar-rol")

//A set that will store users who have recently used a command.
//They will be blacks listed for 30 seconds to avoid spam.
const usedCommandRecently = new Set();

client.commands = new Discord.Collection();

//look for command files in commands folder.
const commandsFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for(const file of commandsFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

//Event listener. Waits for the bot to completely load and sends a message on the console to notify.
client.once("ready", () => { //<--anonymous function.
    console.log("Stupid Bot is online");
    

    //Method that sends a message to specific chat ID on the server.
    reclamarRol(client)
}); 



//event listener on message.
client.on("message", message => {
    //Completely stop if the message doesn't start with a prefix or if the author is the bot.
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    //splice if you want to have multiple commands -- > !check wiki
    const args = message.content.slice(prefix.length).split(/ +/);
    //lower case the command to avoid errors.
    const command = args.shift().toLowerCase();

    //Commands <--Carefull! These are spammable. They need to be moved to a switch case.
    if(command === "mapa"){
        client.commands.get("mapa").execute(message, args);
    } else if (command === "espiral"){
        client.commands.get("espiral").execute(message, args);
    } else if (command === "ninguang"){
        client.commands.get("ninguang").execute(message, args);
    } else if (command === "azucar"){
        client.commands.get("azucar").execute(message, args);
    } else if (command === "zhongli"){
        client.commands.get("zhongli").execute(message, args);
    } else if (command === "venti"){
        client.commands.get("venti").execute(message, args);
    } else if (command === "klee"){
        client.commands.get("klee").execute(message, args);
    } else if (command === "jean"){
        client.commands.get("jean").execute(message, args);
    } else if (command === "diona"){
        client.commands.get("diona").execute(message, args);
    } else if (command === "tartaglia"){
        client.commands.get("tartaglia").execute(message, args);
    } else if (command === "xiangling"){
        client.commands.get("xiangling").execute(message, args);
    } else if (command === "diluc"){
        client.commands.get("diluc").execute(message, args);
    } else if (command === "jean"){
        client.commands.get("jean").execute(message, args);
    } else if (command === "xingqiu"){
        client.commands.get("xingqiu").execute(message, args);
    } else if (command === "beidou"){
        client.commands.get("beidou").execute(message, args);
    } else if (command === "bennett"){
        client.commands.get("bennett").execute(message, args);
    } else if (command === "keqing"){
        client.commands.get("keqing").execute(message, args);
    } else if (command === "musica"){
        client.commands.get("musica").execute(message, args);
    }
    //error message if the command is not in the list.
    if (!client.commands.get(command)){
        client.commands.get("error").execute(message, args);
    }

    let cooldownMessage = "no puedes usar ese comando en este momento. Por favor espera otros 30 segundos.";

    //Cooldown to avoid tag spamming as these are commands that tag users.
    switch (command){
        case 'hola':
            if(usedCommandRecently.has(message.author.id)){
                message.reply(cooldownMessage);
            } else {
                client.commands.get("hola").execute(message, args);
                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id);
                }, 30000)
            }
        break;
        case 'lanlan':
            if(usedCommandRecently.has(message.author.id)){
                message.reply(cooldownMessage);
            } else {
                client.commands.get("lanlan").execute(message, args);
                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id);
                }, 30000)
            }
        break;
        case 'setsuna':
            if(usedCommandRecently.has(message.author.id)){
                message.reply(cooldownMessage);
            } else {
                client.commands.get("setsuna").execute(message, args);
                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id);
                }, 30000)
            }
        break;
        case 'setsuna2':
            if(usedCommandRecently.has(message.author.id)){
                message.reply(cooldownMessage);
            } else {
                client.commands.get("setsuna2").execute(message, args);
                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id);
                }, 30000)
            }
        break;
        case 'razor':
            if(usedCommandRecently.has(message.author.id)){
                message.reply(cooldownMessage);
            } else {
                client.commands.get("razor").execute(message, args);
                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id);
                }, 30000)
            }
        break;
        case 'razor2':
            if(usedCommandRecently.has(message.author.id)){
                message.reply(cooldownMessage);
            } else {
                client.commands.get("razor2").execute(message, args);
                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id);
                }, 30000)
            }
        break;
        case 'zyred':
            if(usedCommandRecently.has(message.author.id)){
                message.reply(cooldownMessage);
            } else {
                client.commands.get("zyred").execute(message, args);
                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id);
                }, 30000)
            }
        break;
        case 'frozt':
            if(usedCommandRecently.has(message.author.id)){
                message.reply(cooldownMessage);
            } else {
                client.commands.get("frozt").execute(message, args);
                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id);
                }, 30000)
            }
        break;
        case 'frozt2':
            if(usedCommandRecently.has(message.author.id)){
                message.reply(cooldownMessage);
            } else {
                client.commands.get("frozt2").execute(message, args);
                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id);
                }, 30000)
            }
        break;
        case 'honos':
            if(usedCommandRecently.has(message.author.id)){
                message.reply(cooldownMessage);
            } else {
                client.commands.get("honos").execute(message, args, client);
                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id);
                }, 30000)
            }
        break;
        case 'honos2':
            if(usedCommandRecently.has(message.author.id)){
                message.reply(cooldownMessage);
            } else {
                client.commands.get("honos2").execute(message, args);
                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id);
                }, 30000)
            }
        break;
        case 'esteban':
            if(usedCommandRecently.has(message.author.id)){
                message.reply(cooldownMessage);
            } else {
                client.commands.get("esteban").execute(message, args);
                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id);
                }, 30000)
            }
        break;
        case 'drak':
            if(usedCommandRecently.has(message.author.id)){
                message.reply(cooldownMessage);
            } else {
                client.commands.get("drak").execute(message, args);
                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id);
                }, 30000)
            }
        break;
        case 'drak2':
            if(usedCommandRecently.has(message.author.id)){
                message.reply(cooldownMessage);
            } else {
                client.commands.get("drak2").execute(message, args);
                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id);
                }, 30000)
            }
        break;
        case 'aby':
            if(usedCommandRecently.has(message.author.id)){
                message.reply(cooldownMessage);
            } else {
                client.commands.get("aby").execute(message, args);
                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id);
                }, 30000)
            }
        break;
        case 'memo':
            if(usedCommandRecently.has(message.author.id)){
                message.reply(cooldownMessage);
            } else {
                client.commands.get("memo").execute(message, args);
                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id);
                }, 30000)
            }
        break;
        case 'alan':
            if(usedCommandRecently.has(message.author.id)){
                message.reply(cooldownMessage);
            } else {
                client.commands.get("alan").execute(message, args);
                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id);
                }, 30000)
            }
        break;
        case 'permalink':
            if(usedCommandRecently.has(message.author.id)){
                message.reply(cooldownMessage);
            } else {
                client.commands.get("permalink").execute(message, args);
                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id);
                }, 30000)
            }
        break;
        case 'comandos':
            if(usedCommandRecently.has(message.author.id)){
                message.reply(cooldownMessage);
            } else {
                client.commands.get("comandos").execute(message, args);
                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                    usedCommandRecently.delete(message.author.id);
                }, 30000)
            }
        break;
        
    }
});


//log in command. Keep this always at the very end of the file.
//Secret token goes in here.
client.login("SECRET_TOKEN_GOES_HERE");