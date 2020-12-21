module.exports = {
    name: "musica",
    description: "Music Commands",
    execute(message, args){
        let mensaje = 
`Lista de comandos para bots de música:\n
!  --->  Rythm\n
-  ---> Arconte Musical\n
=m ---> Ayana.\n

[Para más informacion sobre cada bot, usa su respectivo comando + "help" --> ejemplo: !help  ].
`;
        let codeBlockInitiator = "```css\n" + mensaje + "\n```"; 
        message.channel.send(codeBlockInitiator);
    }
} 