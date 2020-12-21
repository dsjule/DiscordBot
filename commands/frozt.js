/**
 * This file contains a personalized command for a member of the server.
 */
module.exports = {
    name: "frozt",
    description: "Ya te cargó el FBI papu.",
    execute(message, args){
        message.channel.send("Éste es nuestro objetivo.");
        message.channel.send("https://cdn.discordapp.com/attachments/208294538840768512/784660933616205824/Froozzt2.png");
    }
} 