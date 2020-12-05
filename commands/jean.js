module.exports = {
    name: "jean",
    description: "Información de personaje de Jean",
    execute(message, args){
        message.channel.send("Aquí tienes toda la información que necesitas para usar a la mami Jean: ");
        message.channel.send("https://pbs.twimg.com/media/EnGMD9dXIAAGI2W?format=jpg&name=large"); 
    }
} 