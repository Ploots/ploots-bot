const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.type === "dm") return message.channel.send("You Can't Use this in DM's.");
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Be sure to provide a valid User.");
    if(bUser.hasPermission("BAN_MEMBERS")) return message.reply("You don't have permission to ban this User!");
    let rreason = args.join(" ").slice(22);
 if (!rreason) {

    let reportEmbed = new Discord.RichEmbed()
    .setDescription(`User Has Been Banned!`)
    .setColor("#840000")
    .addField("Banned User", `${bUser} With ID: ${bUser.id}`)
    .addField("Banned By", `${message.author} With ID: ${message.author.id}`)
    .addField("Time", message.createdAt)
    .addField("Reason", "No reason Given.");

    
      let incidentchannel = message.guild.channels.find(c => c.name === 'reports' || c.name === 'publiclogs' || c.name === 'logs' || c.name === 'modlogs' || c.name === 'modlog')
   
      let beanEnsure = new Discord.RichEmbed()
    .setDescription(`Successfully banned ${bUser}`)
      
    
if (!incidentchannel) return message.channel.send(reportEmbed);
    incidentchannel.send(reportEmbed);
  
    await message.guild.ban(bUser.id)
    await message.reply(`${bUser} Has Been Banned From The Server!`);
  bUser.send(`You were Banned from **${message.guild.name}**.`);
   
   }
  else{
    
    let reportEmbed = new Discord.RichEmbed()
    .setDescription(`User Has Been Banned!`)
    .setColor("#840000")
    .addField("Banned User", `${bUser} With ID: ${bUser.id}`)
    .addField("Banned By", `${message.author} With ID: ${message.author.id}`)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

    
      let incidentchannel = message.guild.channels.find(c => c.name === 'reports' || c.name === 'publiclogs' || c.name === 'logs' || c.name === 'modlogs' || c.name === 'modlog')
   
      let beanEnsure = new Discord.RichEmbed()
    .setDescription(`Successfully banned ${bUser}`)
      
    
if (!incidentchannel) return message.channel.send(reportEmbed);
    incidentchannel.send(reportEmbed);
  
    await message.guild.ban(bUser.id)
    await message.reply(`${bUser} Has Been Banned From The Server!`);
  bUser.send(`You were Banned from **${message.guild.name}** for: ${rreason}`);
    
  }
}
 
module.exports.help = {
  name: "ban"
}