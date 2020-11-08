const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let ids = ("385067115226595339")
if (!ids.includes(message.author.id)  ) {
  return message.reply("Only the owner can use this Command!")
}
var args = args.slice(0);
  var newNickname = args.join(" ");
 if(message.channel.type === "dm") return message.channel.send("You Can't Use this in DM's.");

  let incidentchannel = message.guild.channels.find(c => c.name == "reports" || c.name == "modlog" || c.name == "modlogs" || c.name == "logs")


 message.guild.me.setNickname(newNickname)
setTimeout(function(){
  message.reply(`Set my Name to ${newNickname}!`)
}, 500);


}

module.exports.help = {
  name: "setnick"
};