/**
 * Error meesage sent whenever a command that does not exist in the bot is used.
 * A reference to the list of commands is also mentioned.
 */
module.exports = {
    name: "error",
    description: "Mensaje de error si el comando no se encuentra.",
    execute(message, args){
        message.channel.send("Tu comando no se encuentra en mi lista.");
        message.channel.send("https://cdn.discordapp.com/emojis/775132994813296660.png?v=1");
        message.channel.send("Utiliza el comando '--comandos' para ver la lista disponible de comandos para el bot.");
    }
} 