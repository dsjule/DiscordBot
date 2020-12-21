/**
 * This document contains the information to build a character in Genshin Impact.
 * It sends a small message and an image created by the community that displays possible builds.
 */
module.exports = {
    name: "venti",
    description: "Información de personaje de Venti",
    execute(message, args){
        message.channel.send("Aquí tienes toda la información que necesitas para usar al trapito: ");
        message.channel.send("https://pbs.twimg.com/media/Enojft-XUAMzVtH?format=jpg&name=large");
        
    }
}