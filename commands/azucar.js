/**
 * This document contains the information to build a character in Genshin Impact.
 * It sends a small message and an image created by the community that displays possible builds.
 */
module.exports = {
    name: "azucar",
    description: "Información de personaje de Sacarosa.",
    execute(message, args){
        message.channel.send("Aquí tienes toda la información que necesitas para usar a la diabetica : ");
        message.channel.send("https://cdn.discordapp.com/attachments/783142780531638344/784627324087304242/image0.jpg"); 
    }
} 