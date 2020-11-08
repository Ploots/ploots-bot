const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let ids = ["385067115226595339"]
if (!ids.includes(message.author.id)) {
  return message.reply("Only the owner can use this Command!")
}
  
  (process.exit(1))
  
  
  }  

module.exports.help = {
    name: "killbot"
} 