const { ReactionCollector } = require("discord.js");

module.exports = {
    name: "saludo",
    description: "this is a ping command!",
    execute(message, args){



        if(message.member.roles.cache.has("783936437778120704")){
            message.channel.send("Hola Fiel amante de Ninguang.");
            message.channel.send("https://cdn.discordapp.com/emojis/755380388410687548.png?v=1");
        } else if (message.member.roles.cache.has("783466096710778932")){
            message.channel.send("Hola Fiel amante de Keqing.");
            message.channel.send("https://cdn.discordapp.com/emojis/779200090371653672.png?v=1");
        } 
        
        
        
        else {
            message.channel.send("Hola!");
        }

        
    }
}