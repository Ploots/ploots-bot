
const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {
  let ids = "385067115226595339";
     if(ids.includes(message.author.id)) {
    message.channel.send("https://discordapp.com/api/oauth2/authorize?client_id=689520544189644809&permissions=8&scope=bot");
      }
     if(!ids.includes(message.author.id)) {
    return message.reply("Only the Bot Owner can use this command!");
    }
};
module.exports.help = {
  name: "link"
};