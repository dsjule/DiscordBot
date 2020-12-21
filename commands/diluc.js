/**
 * This document contains the information to build a character in Genshin Impact.
 * It sends a small message and an image created by the community that displays possible builds.
 */
module.exports = {
    name: "diluc",
    description: "Información de personaje de Diluc",
    execute(message, args){
        message.channel.send("Aquí tienes toda la información que necesitas para usar al papucho pelirrojo : ");
        message.channel.send("https://pbs.twimg.com/media/EnSynS8W4AQH58E?format=jpg&name=large"); 
    }
} 