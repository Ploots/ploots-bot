const Discord = require("discord.js");

exports.run = async (client, message, args, level) => {
  // eslint-disable-line no-unused-vars
  let hugUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!hugUser)
    return message.channel.send("Dude, you have to mention someone to Murder.");
  let hugEmbed = new Discord.RichEmbed()
    .setTitle("Get Killed!")
    .setDescription(
      `**${message.author.username}** killed **${
        message.mentions.users.first().username
      }**!`
    )
    .setColor("RANDOM");
  message.channel.send(hugEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "ADMINISTRATOR"
};

exports.help = {
  name: "kill",
  category: "Miscelaneous",
  description: "Kill People!",
  usage: "kill"
};
