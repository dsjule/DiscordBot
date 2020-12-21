
/**
 * Generate a message and add reactions to it.
 * @param {message} message channel message that will be used to add reactions.
 * @param {Array} reactions array of emojis that will be added as reactions to the message.
 */

const { Channel } = require("discord.js")

//add reactions to the message in the channel.
const addReactions = (message, reactions) => {
    message.react(reactions[0])
    reactions.shift()
    if (reactions.length > 0){
        setTimeout(() => addReactions(message, reactions), 750)
    }
}

/**
 * @param {DiscordClient} client Instance of a discord client that is used to execute actions.
 * @param {number} id Integer representing the ID of the channel.  
 * @param {string} text String variable containing the message that is sent in the channel.
 * @param {Array} reactions associative array containing the emojis and their respective keys.
 */
module.exports = async (client,id,text,reactions = []) => {
    const channel = await client.channels.fetch(id)

    channel.messages.fetch().then((messages) => {
        if (messages.size === 0){
            //send a new message if the channel is empty.
            channel.send(text).then((message) =>{
                addReactions(message,reactions)
            })
        } else {
            //Edit the existing message.
            for (const message of messages) {
                message[1].edit(text)
                addReactions(message[1], reactions)
            }
        }
    })
}