const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {
let ids = ("385067115226595339")
if (!ids.includes(message.author.id)  ) {
  return message.reply("Only the owner can use this Command!")
}
      let gayUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!gayUser) return message.channel.send("Be sure to Mention a User!");

  
    let gay = Math.round(Math.random() * 100);

    let gayembed = new Discord.RichEmbed()
        .setColor("#f442d4")
        .setTitle(`:gay_pride_flag: **I think ${message.mentions.users.first().username} is ∞% gay!** :gay_pride_flag:`);
    return message.channel.send(gayembed);
};

module.exports.help = {
    name: "infinitegay"
};