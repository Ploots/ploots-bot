const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   let ids = "385067115226595339";
  if(!ids.includes(message.author.id)) {
    return message.reply("only the owner can do this!");
    }
  let toLeave = args[0];
  bot.guild.find(toLeave).leave();
}

module.exports.help = {
    name: "leave"
}
