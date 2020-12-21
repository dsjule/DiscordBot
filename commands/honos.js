/**
 * This file contains a personalized command for a member of the server.
 */
module.exports = {
    name: "honos",
    description: "El dios del bot",
    execute(message, args , client){
        userId = client.users.cache.get("207173567543115777"); ;
        message.channel.send("Alabado sea ohhh mi creador " +"<@"+userId+">.");
        message.channel.send("https://cdn.discordapp.com/emojis/771007037287039046.png?v=1");
    }
} 