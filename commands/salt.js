const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {
  if(message.channel.type === "dm") return;
  if (!message.member.hasPermission("ADMINISTRATOR"), (!message.author.id == "385067115226595339")) return;

      let gayUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!gayUser){

  
    let gay = Math.round(Math.random() * 100);

    let gayembed = new Discord.RichEmbed()
        .setColor("#f442d4")
        .setTitle(`:salt: **I think ${message.author.username} is ${gay}% salty!** :salt:`);
    return message.channel.send(gayembed);
    }
  else{
    
   let gay = Math.round(Math.random() * 100);

    let gayembed = new Discord.RichEmbed()
        .setColor("#f442d4")
        .setTitle(`:salt: **I think ${message.mentions.users.first().username} is ${gay}% salty!** :salt:`);
    return message.channel.send(gayembed);
    
  }
};

module.exports.help = {
    name: "=salt"
};