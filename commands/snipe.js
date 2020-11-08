const Discord = require("discord.js");
module.exports.run = async (bot, message, args, prefix) => {
  if(message.channel.type === "dm") return message.channel.send("You Can't Use this in DM's.");
  const channel = message.mentions.channels.first() || message.channel;
  const msg = bot.deletedMessages.get(channel.id);
  if (!msg) return message.reply("There's Nothing to snipe!");
  const snipeEmbed = new Discord.RichEmbed()
    .setColor("#0099ff")
    .setAuthor(`Get Sniped! | Deleted message found in ${channel.name}!`)
    .setDescription(bot.deletedMessages.last().content)
    .setFooter(`Deleted by ${msg.author.tag}`);

  message.channel.send(snipeEmbed);
};

module.exports.help = {
  name: "snipe"
};
