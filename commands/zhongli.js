/**
 * This document contains the information to build a character in Genshin Impact.
 * It sends a small message and an image created by the community that displays possible builds.
 */
module.exports = {
    name: "zhongli",
    description: "Información de personaje de Zhongli.",
    execute(message, args){
        message.channel.send("Aquí tienes toda la información que necesitas para usar al husbando Zhongli uwu: ");
        message.channel.send("https://media.discordapp.net/attachments/779182434448048159/782098619263352832/ZhongliSmug.gif");
        message.channel.send("https://pbs.twimg.com/media/EoREoPFW4AA1xlA?format=jpg&name=large");
    }
} 