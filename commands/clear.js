const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have Permission to Clear Messages.");
  var toClear = args.join(" ");
  if(!toClear) return message.channel.send("Give me a number!");
  message.delete().catch();
  setTimeout(function(){
   message.channel.bulkDelete(toClear)
    }, 300); 
}

module.exports.help = {
  name: "clear"
}