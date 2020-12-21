/**
 * This file will create a message and add reactions to it.
 * The message will allow users to assign roles to themselves by reacting to it.
 * 
 * The message is edited every time the bot is initialized to apply any changes to it.
 * 
 * The best case is to have the channel reverved to this message.
 * 
 * 
 */

const primerMensaje = require('./primer-mensaje')


module.exports = (client) => {
    //channed Id where the message will be sent. Usually reserved for it .
    const channelId = "784925781855043614"

    //look for an emoji in the cache of the server.
    const getEmoji = emojiName => 
        client.emojis.cache.find(emoji => emoji.name === emojiName)

    //Look for the emojis that will be used to create reaction-assigned roles.
    //On the left is the name of the emoji on the server. On the right is the roles that is linked to that emoji.
    const emojis = {
        bennetok: 'Pyro',
        qiqi: 'Cryo',
        coolchilde: 'Hydro',
        scaredventi: 'Anemo',
        angrypaimon: 'Dendro',
        hornylisa: 'Electro',
        ara_ara: 'Geo',
        bruuh: 'Physical'
    }

    const reactions = [];

    //message on channel for users to react.
    let emojiText = 'Reacciona al mensaje para asignarte un rol.\n\n'

    //generate the message structure by adding the role and emoji that will be used inside the message.
    for (const key in emojis){
        const emoji = getEmoji(key)
        reactions.push(emoji)

        const role = emojis[key]
        emojiText += `${emoji} = ${role}\n`
    }  

    //Send a message to the chat room. Normally this will be the only message there.
    //Message will be edited if anything inside this code changes.
    primerMensaje(client,channelId, emojiText, reactions)

    const handleReaction = (reaction, user, add) => {
        if (user.id === '784599990822502410'){
            return
        }

        const emoji = reaction._emoji.name

        const { guild } = reaction.message 

        const roleName = emojis[emoji]
        if(!roleName){
            return
        }

        //look for a role in the cache of the server.
        const role = guild.roles.cache.find(role => role.name === roleName)
        //look for the user in the cache of the sever.
        const member = guild.members.cache.find(member => member.id === user.id)

        //If a reaction is being added(true), then add the role to the user. Else, remove it.
        if (add){
            member.roles.add(role)
        } else {
            member.roles.remove(role)
        }
    }

    //Add rol if the user adds a reaction.
    //A message will be sent on the console to notify of the action.
    client.on('messageReactionAdd', (reaction, user) => {
        if (reaction.message.channel.id === channelId){
            handleReaction(reaction, user, true)
            console.log('add')
        }
       
    })

    //Remove rol if user removes their reaction.
    //A message will be sent on the console to notify of the action.
    client.on('messageReactionRemove', (reaction, user) => {
        if (reaction.message.channel.id === channelId){
            handleReaction(reaction, user, false)
            console.log('remove')
        }
    })

}


