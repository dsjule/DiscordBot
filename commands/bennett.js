/**
 * This document contains the information to build a character in Genshin Impact.
 * It sends a small message and an image created by the community that displays possible builds.
 */
module.exports = {
    name: "bennett",
    description: "Información de personaje de bennett",
    execute(message, args){
        message.channel.send("Aquí tienes toda la información que necesitas para usar al Diluc de los pobres : ");
        message.channel.send("https://pbs.twimg.com/media/EnGJHT-WMAAYhH3?format=jpg&name=large"); 
    }
} 