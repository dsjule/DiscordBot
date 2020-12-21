/**
 * Displays and embedded message that contains a welcoming message and a permalink of the server.
 */

const Discord = require("discord.js");
module.exports = {
    name: "permalink",
    description: "Informacion del servidor. Incluye Comandos y permalinks",
    execute(message, args){

        const roles = new Discord.MessageEmbed()
        
        .setColor('#0099ff')
            .setTitle('Stupid People!')
            .setAuthor('Stupid Bot', 'https://cdn.discordapp.com/avatars/784599990822502410/15cd520e4a523c25f244b85932b7c2ac.png?size=512', 'https://discord.js.org')
            .setDescription('Bienvenido a Stupid People!')
            .setThumbnail('https://cdn.discordapp.com/avatars/784599990822502410/15cd520e4a523c25f244b85932b7c2ac.png?size=512')
            .addField('Permalink del servidor', 'https://discord.gg/atXvXK9gkf')
            .addFields(
                { name: 'Asignate un rol con nuestro Stupid Bot', value: '#roles' },
                { name: '\u200B', value: '\u200B' }
            )
            
            .setTimestamp()
            .setFooter('Mayor informacion contactarse con Setsuna', 'https://cdn.discordapp.com/emojis/786029584973561867.png?v=1')

        message.channel.send(roles)
        
    }
}