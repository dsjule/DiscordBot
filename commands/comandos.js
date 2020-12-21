/**
 * List of all the commands for the bot.
 * Author: David Jule
 * Date: December 13th.
 * 
 * 
 * A message in a code-block format is sent where it displays all the commands for the bot.
 */
module.exports = {
    name: "comandos",
    description: "All of the commands for the bot. This needs to be constantly updated.",
    execute(message, args){
        let mensaje = 
`Lista de comandos para Billy:
[Para usar un comando combina "--" más uno de los comandos mencionados en la parte inferior.]
Comandos:
["Link permanente del Server"] ---> "permalink"
["Mapa interactivo de Genshin"] ---> "mapa"
["Guía de espiral del abismo nivel 9-12"] ---> "espiral"
[Información de personajes]
"azucar"
"beidou" 
"bennett" 
"diluc"
"diona"
"jean"
"keqing"
"klee"
"ninguang"
"razor"
"razor2"
"tartaglia"
"venti"
"xiangling"
"xingqiu"
"zhongli"

[Comandos Personalizados]
"hola"  ---> Te manda un saludo personalizado (Si ha sido programado).

"aby"
"alan"
"drak"
"drak2"
"esteban"
"frozt"
"frozt2"
"honos"
"honos2"
"lanlan"
"memo"
"razor"
"razor2"
"setsuna"
"zyred"

[Comandos para los bots de música]  -->  "musica"
[Para más informacion sobre cada bot, usa su respectivo comando + "help" --> ejemplo: !help].
["TODOS LOS COMANDOS PERSONALIZADOS TIENEN UN TIEMPO DE ENFRIAMIENTO DE 30 SEGUNDOS PARA EVITAR SPAM."]
["Si deseas un comando personalizado o deseas agregar un comando nuevo de cualquier tipo, hablar con Honos :)"]
`;
        let codeBlockInitiator = "```css\n" + mensaje + "\n```"; 
        message.channel.send(codeBlockInitiator);
    }
} 