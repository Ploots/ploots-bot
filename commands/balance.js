const Discord = require("discord.js");
let coins = require("../coins.json");


module.exports.run = async (bot, message, args, prefix) => {
 
  if(!args[0]) {
  var user = message.author;
} else {
  var user = message.mentions.users.first() || bot.users.get(args[0]);
}
  if(!coins[user.id]) {
    coins[user.id] = {
      coins: 0
    }
  }
  
  let uCoins = coins[user.id].coins;
  
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(user.username)
  .setColor("#00FF00")
  .addField("💰", `Coins: **${uCoins}**`)
  
  message.channel.send(coinEmbed)
};
module.exports.help = {
  name: "balance",
  aliases: "bal"
};