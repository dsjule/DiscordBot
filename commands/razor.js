/**
 * This file contains a personalized command for a member of the server.
 */

module.exports = {
    name: "razor",
    description: "Comando para razor. Incluye 1 GIF",
    execute(message, args){
        message.channel.send("https://imgur.com/miCu1CR");
    }
} 