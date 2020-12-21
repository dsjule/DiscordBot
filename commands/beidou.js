/**
 * This document contains the information to build a character in Genshin Impact.
 * It sends a small message and an image created by the community that displays possible builds.
 */
module.exports = {
    name: "beidou",
    description: "Información de personaje de Beidou",
    execute(message, args){
        message.channel.send("Aquí tienes toda la información que necesitas para usar a Beidou : ");
        message.channel.send("https://pbs.twimg.com/media/EnGJHT9WEAE_8km?format=jpg&name=large"); 
    }
} 