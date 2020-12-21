/**
 * File that contains a command that will send a message with a link to the interactive map of genshin impact.
 */
module.exports = {
    name: "mapa",
    description: "Mapa interactivo de Genshin Impact",
    execute(message, args){
        message.channel.send("Aquí tienes el mapa interactivo de Genshin -- > https://genshin-impact-map.appsample.com/#/");
    }
}