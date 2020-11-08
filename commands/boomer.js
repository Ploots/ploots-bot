const Discord = require("discord.js");

//It only says gay because it's a copy of other variables and i'm too lazy to change them.
module.exports.run = async (bot, message, args, prefix) => {
  if(message.channel.type === "dm") return;
  if (!message.member.hasPermission("ADMINISTRATOR"), (!message.author.id == "385067115226595339")) return;

      let gayUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!gayUser) 
      {
          let gay = Math.round(Math.random() * 100);

    let gayembed = new Discord.RichEmbed()
        .setColor("#808080")
        .setTitle(`:grandma: **I think ${message.author.username} is ${gay}% a boomer!** :older_adult:`);
    return message.channel.send(gayembed);
      }
  else{
      let gay = Math.round(Math.random() * 100);

    let gayembed = new Discord.RichEmbed()
        .setColor("#808080")
        .setTitle(`:grandma: **I think ${message.mentions.users.first().username} is ${gay}% a boomer!** :older_adult:`);
    return message.channel.send(gayembed);
  }
  
};

module.exports.help = {
    name: "boomer"
};