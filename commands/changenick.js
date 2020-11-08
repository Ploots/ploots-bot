  const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let ids = ("385067115226595339")
if (!ids.includes(message.author.id)  ) {
  return message.reply("Only the owner can use this Command!")
}
var args = args.slice(0);
  var newNickname = args.join(" ");
 if(message.channel.type === "dm") return message.channel.send("You Can't Use this in DM's.");



 message.member.setNickname(newNickname)
setTimeout(function(){
  message.reply(`Set your Name to ${message.guild.me.nickname}!`)
}, 500);

if(!message.member.setNickname(newNickname)) return message.reply("I don't have Permissions, or your role is above mine!")
  
}

module.exports.help = {
  name: "nickname"
};

  