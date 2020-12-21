/**
 * This file is a command that contains personalized responses to a salutation.
 * 
 * The bot will identify what message is going to be sent depending on the role
 * that the user has.
 * 
 * 
 * 
 * OBSERVATION: These could be changed to switch cases to avoid repetition of if statements.
 */

const { ReactionCollector } = require("discord.js");

module.exports = {
    name: "hola",
    description: "Saludo personalizado!",
    execute(message, args){


        if(message.member.roles.cache.has("783936437778120704")){
            //noelle
            if(message.member.roles.cache.has("783936070697746482")){
                message.channel.send("Tus deseos son ordenes " + message.author.toString() + " Goshūjin-sama! <3");
                message.channel.send("https://cdn.discordapp.com/attachments/783142780531638344/785295940898390046/Noelle.jpg");
            } else { //<--Ninguang
                message.channel.send("Hola! " + message.author.toString() + " Ninguang te desea unas felices fiestas. <3");
                message.channel.send("https://cdn.discordapp.com/attachments/780183059697106994/787877500902178826/ChristmasNingPortrait.png");
            }  
        } else if (message.member.roles.cache.has("783456950288515124")){ //Admin
            message.channel.send("https://cdn.discordapp.com/attachments/784192673304281088/786349496552521728/hqdefault.png");
        } else if (message.member.roles.cache.has("783466096710778932")){
            message.channel.send("Hola! " + message.author.toString() + " Fiel amante de Keqing.");//Keqing
            message.channel.send("https://cdn.discordapp.com/emojis/779200090371653672.png?v=1");
        } else if (message.member.roles.cache.has("784641888845561896")){
            message.channel.send("Hola! " + message.author.toString() + " Fiel seguidor de Vennessa");//Vennessa
            message.channel.send("https://cdn.discordapp.com/attachments/783142780531638344/784828771353231360/image0.jpg");
        } else if (message.member.roles.cache.has("783935714910797824")){//Beidou
            message.channel.send("Hola! " + message.author.toString() + " Fiel seguidor de la capitana Beidou.");
            message.channel.send("https://cdn.discordapp.com/attachments/208294538840768512/784828576465158164/unknown.png");
        } else if (message.member.roles.cache.has("783465814238035979")){//QiQi
            message.channel.send("Hola! " + message.author.toString() + " Vamos juntos a buscar una cococabra");
            message.channel.send("https://cdn.discordapp.com/attachments/783142780531638344/786330040526831646/illust_85377856_20201125_121948.jpg");
        } else {
            message.channel.send("Hola! " + message.author.toString() + ". No se te ha asignado un mensaje personalizado asi que probablemente no importas");
            message.channel.send("https://cdn.discordapp.com/emojis/782102464718962699.png?v=1");
        }

        
    }
}