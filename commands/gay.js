const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

      let gayUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!gayUser){

  
    let gay = Math.round(Math.random() * 100);

    let gayembed = new Discord.RichEmbed()
        .setColor("#f442d4")
        .setTitle(`:gay_pride_flag: **I think ${message.author.username} is ${gay}% gay!** :gay_pride_flag:`);
    return message.channel.send(gayembed);
    }
  else{
    
  
    let gay = Math.round(Math.random() * 100);

    let gayembed = new Discord.RichEmbed()
        .setColor("#f442d4")
        .setTitle(`:gay_pride_flag: **I think ${message.mentions.users.first().username} is ${gay}% gay!** :gay_pride_flag:`);
    return message.channel.send(gayembed);
    
  }
};

module.exports.help = {
    name: "gay"
};