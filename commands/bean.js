const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.type === "dm") return message.channel.send("You Can't Use this in DM's.");
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Provide a valid user, you Fucking Dumbass.");
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You Don't Have Permission To Bean this User, Dumbass!");
    let rreason = args.join(" ").slice(22);
 if (!rreason){
  
    let reportEmbed = new Discord.RichEmbed()
    .setDescription(`Fucker has been Beaned!`)
    .setColor("#840000")
    .addField("Beaned Dumbass", `${bUser} With ID: ${bUser.id}`)
    .addField("Bean-er", `${message.author} With ID: ${message.author.id}`)
    .addField("Time Beaned", message.createdAt)
    .addField("Reason Beaned", "No reason Given.");

    
      let incidentchannel = message.guild.channels.find(c => c.name === 'reports' || c.name === 'publiclogs' || c.name === 'logs' || c.name === 'modlogs' || c.name === 'modlog')
   
      let beanEnsure = new Discord.RichEmbed()
    .setDescription(`Fuckin' beaned ${bUser}`)
      
if (!incidentchannel) return message.channel.send(reportEmbed);
    incidentchannel.send(reportEmbed);
  
  
    await message.guild.ban(bUser.id)
    await message.channel.send(beanEnsure);
  bUser.send(`Hey Fucktard, You were fucking stupid enough to get Banned from **${message.guild.name}**.`);
 }
  else{
    
    
    let reportEmbed = new Discord.RichEmbed()
    .setDescription(`Fucker has been Beaned!`)
    .setColor("#840000")
    .addField("Beaned Dumbass", `${bUser} With ID: ${bUser.id}`)
    .addField("Bean-er", `${message.author} With ID: ${message.author.id}`)
    .addField("Time Beaned", message.createdAt)
    .addField("Reason Beaned", rreason);

    
      let incidentchannel = message.guild.channels.find(c => c.name === 'reports' || c.name === 'publiclogs' || c.name === 'logs' || c.name === 'modlogs' || c.name === 'modlog')
   
      let beanEnsure = new Discord.RichEmbed()
    .setDescription(`Fuckin' beaned ${bUser}`)
      
if (!incidentchannel) return message.channel.send(reportEmbed);
    incidentchannel.send(reportEmbed);
  
  
    await message.guild.ban(bUser.id)
    await message.channel.send(beanEnsure);
  bUser.send(`Hey Fucktard, You were fucking stupid enough to get Banned from **${message.guild.name}** for: ` + (rreason));
    
  }
}
 
module.exports.help = {
  name: "bean"
}