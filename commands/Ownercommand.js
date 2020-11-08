const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {
  let ids = "385067115226595339";
  if (ids.includes(message.author.id)) {
   message.react("✅");
  } else {
    return message.react("❎");
  }
  
};
module.exports.help = {
  name: "test"
};
