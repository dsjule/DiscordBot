/**
 * This file contains a personalized command for a member of the server.
 */
module.exports = {
    name: "lanlan",
    description: "El mejor canal de Twitch!",
    execute(message, args){
        message.channel.send("https://www.twitch.tv/llan_lan");
    }
}


