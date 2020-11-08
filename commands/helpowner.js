const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
  
   let prefix  = botconfig.prefix;
    let ids = ("385067115226595339")
if (!ids.includes(message.author.id)  ) {
  return message.reply("Only the owner can use this Command!")
}
message.channel.send(` ${message.author}, **Here's the List of Owner Only Commands!** \n \n **${prefix}say**:   Say a Certain message through the Bot. \n **${prefix}eval**:   Calculate Equations and Access the Bot's Files and Coding. \n **${prefix}killbot**:   Stop all Bot proccessing Instantly. \n **${prefix}dm**:   Send a User a Direct Message through the Bot! \n **${prefix}link**:   Sends the Link to Invite me to Other Servers!`
                    )
}

module.exports.help = {
  name:"helpowner"
}