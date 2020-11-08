const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
   let prefix  = botconfig.prefix;

    
   message.channel.send(`${message.author}, **Here's all of the Moderation Commands!** \n \n **${prefix}warn**:   Warns a User. \n **${prefix}kick**:   Kicks a User (Also has a **${prefix}yeet** variant for funnier use). \n **${prefix}ban**:   Bans a User (Also has a **${prefix}bean** variant for funnier use). \n **${prefix}mute**:   Mute a pinged user from talking in any channels. \n **${prefix}unmute**:   Unmute a muted person. \n **${prefix}setnick**:   Set my Nickname in the Server! \n **${prefix}ping**:   shows the Latency for the Bot. \n **${prefix}clear**:   Delete a number of Messages from the Channel. \n **${prefix}addrole**:   Adds a pinged role to a User. \n **${prefix}votekick**:   Cast a poll to vote on wether or not a person should be Kicked. \n`)
  
}

module.exports.help = {
  name:"helpmod"
}