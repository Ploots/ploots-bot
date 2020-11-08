const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  if(message.channel.type === "dm") return message.channel.send("You Can't Use this in DM's.");
    var member = message.mentions.members.first();
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Be sure to provide a valid user.");
if(kUser.hasPermission('KICK_MEMBERS')) return message.reply("You Don't have Permission to do This!");
    let rreason = args.join(" ").slice(22);
   if (!rreason) return message.reply("You must provide a reason!")

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("User Has Been Kicked!")
    .setColor("#f94040")
    .addField("Kicked User", `${kUser} With ID: ${kUser.id}`)
    .addField("Kicked By", `${message.author} With ID: ${message.author.id}`)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

  let kickEnsure = new Discord.RichEmbed()
    .setDescription(`Successfully kicked ${kUser}`)
  
  
    let incidentchannel = message.guild.channels.find(c => c.name === 'reports' || c.name === 'publiclogs' || c.name === 'logs' || c.name === 'modlogs' || c.name === 'modlog')
   

   if (!incidentchannel) return message.channel.send(reportEmbed);
    incidentchannel.send(reportEmbed);

    await member.kick().then(member)
    await message.channel.send(`kickEnsure`);
   kUser.send(`You were kicked from **${message.guild.name}** for: ` + (rreason));
}
 
module.exports.help = {
  name: "kick"
}