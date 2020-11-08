const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {
  let ids = "385067115226595339";
 
  if (message.mentions.members.size) {
    var avatarUser = message.guild.members.find(m => m.id === message.mentions.users.first().id)
} else if (message.guild.members.find(m => m.id === [0])) {
    var avatarUser = message.guild.members.find(m => m.id === args[0])
} else if (message.guild.members.find(m => m.user.username === args[0])) {
    var avatarUser = bot.users.find(m => m.username === args[0])
} else if (message.guild.members.find(m => m.nickname === args[0])) {
    var avatarUser = message.guild.members.find(m => m.nickname === args[0])
}
  
     if(!avatarUser) {
    message.channel.send(message.author.avatarURL);
      }
  if (avatarUser) {
    message.channel.send(message.avatarUser.avatarURL);
  }
     if(!ids.includes(message.author.id)) {
    return message.reply("Oi mate, piss off, only the owner can do this!");
    }
};
module.exports.help = {
  name: "avatar"
};