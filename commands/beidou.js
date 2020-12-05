module.exports = {
    name: "beidou",
    description: "Información de personaje de Beidou",
    execute(message, args){
        message.channel.send("Aquí tienes toda la información que necesitas para usar a Beidou : ");
        message.channel.send("https://pbs.twimg.com/media/EnGJHT9WEAE_8km?format=jpg&name=large"); 
    }
} 