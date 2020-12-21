/**
 * This document contains the information to build a character in Genshin Impact.
 * It sends a small message and an image created by the community that displays possible builds.
 */
module.exports = {
    name: "ninguang",
    description: "Información de personaje de Ninguang.",
    execute(message, args){
        message.channel.send("Aquí tienes toda la información que necesitas para usar a la Diosa Ninguang: ");
        message.channel.send("https://cdn.discordapp.com/attachments/783142780531638344/784627764035846174/image0.jpg");
        
    }
}