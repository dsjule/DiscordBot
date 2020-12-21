/**
 * This document contains the information to build a character in Genshin Impact.
 * It sends a small message and an image created by the community that displays possible builds.
 */
module.exports = {
    name: "keqing",
    description: "Información de personaje de keqing",
    execute(message, args){
        message.channel.send("Aquí tienes toda la información que necesitas para usar la reina Keqing : ");
        message.channel.send("https://cdn.discordapp.com/emojis/779200090371653672.png?v=1");
        message.channel.send("https://pbs.twimg.com/media/EnGJHUFXYAEuzvB?format=jpg&name=large"); 
    }
} 