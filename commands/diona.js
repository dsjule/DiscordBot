/**
 * This document contains the information to build a character in Genshin Impact.
 * It sends a small message and an image created by the community that displays possible builds.
 */
module.exports = {
    name: "diona",
    description: "Información de personaje de diona",
    execute(message, args){
        message.channel.send("Aquí tienes toda la información que necesitas para usar a la nekko: ");
        message.channel.send("https://pbs.twimg.com/media/EnJI-SiW8AEWACM?format=jpg&name=large");
        
    }
}