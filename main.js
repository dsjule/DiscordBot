const Discord = require("discord.js");;

//create discord bot as client.
const client = new Discord.Client();

const prefix = "!";

const fs = require("fs");

client.commands = new Discord.Collection();

//look for command files in commands folder.
const commandsFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for(const file of commandsFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

//Event listener
client.once("ready", () => { //<--anonymous function.
    console.log("Stupid Bot is online");
}); 




client.on("message", message => {
    //Completely stop if the message doesn't start with a prefix or if the author is the bot.
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    //splice if you want to have multiple commands -- > !check wiki
    const args = message.content.slice(prefix.length).split(/ +/);
    //lower case the command to avoid errors.
    const command = args.shift().toLowerCase();

    //Commands
    if(command === "hola"){
        client.commands.get("saludo").execute(message, args);
    } else if (command === "lanlan"){
        client.commands.get("lanlan").execute(message, args);
    } else if (command === "zyred"){
        client.commands.get("zyred").execute(message, args);
    } else if (command === "frozt"){
        client.commands.get("frozt").execute(message, args);
    } else if (command === "mapa"){
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
    } else {
        client.commands.get("error").execute(message, args);
    }
});


//log in command. Keep this always at the very end of the file.
client.login("Nzg0NTk5OTkwODIyNTAyNDEw.X8rprg.qAd4fFmV8jiw1xvvKUUsgot2Z-0");