module.exports = {
    name: "error",
    description: "Mensaje de error si el comando no se encuentra.",
    execute(message, args){
        message.channel.send("Tu comando no se encuentra en mi lista");
        message.channel.send("https://cdn.discordapp.com/emojis/775132994813296660.png?v=1");
    }
} 