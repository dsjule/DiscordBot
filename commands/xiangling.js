/**
 * This document contains the information to build a character in Genshin Impact.
 * It sends a small message and an image created by the community that displays possible builds.
 */
module.exports = {
    name: "xiangling",
    description: "Información de personaje de Xiangling",
    execute(message, args){
        message.channel.send("Aquí tienes toda la información que necesitas para cocinar a Paimon con Xiangling : ");
        message.channel.send("https://pbs.twimg.com/media/EnGMD9fW4AE3Q5I?format=jpg&name=large"); 
    }
} 