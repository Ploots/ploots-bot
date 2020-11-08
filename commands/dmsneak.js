
const Discord = require("discord.js");
exports.run = async (bot, message, args, level) => {
let ids = ("385067115226595339")



  if (message.mentions.members.size) {
    var dUser = message.guild.members.find(m => m.id === message.mentions.users.first().id)
} else if (message.guild.members.find(m => m.id === [0])) {
    var dUser = message.guild.members.find(m => m.id === args[0])
} else if (message.guild.members.find(m => m.user.username === args[0])) {
    var dUser = bot.users.find(m => m.username === args[0])
} else if (message.guild.members.find(m => m.nickname === args[0])) {
    var dUser = message.guild.members.find(m => m.nickname === args[0])
}
 
  if (!dUser) return message.channel.send("User not Found!")
  
  if (!ids.includes(message.author.id)) {
    return message.reply("Only the Owner can use this Command!")
  };

  
  message.delete().catch();
  
  const dMessage = args.slice(1).join(' ');
  if (dMessage.length < 1) return message.reply('You must Supply a Message.')
  const dmMessage = args.slice(1).join(' ');
    let dmEnsure = new Discord.RichEmbed()
  dUser.send(dmMessage);
  
}
module.exports.help = {
  name: "dmsneak"
}