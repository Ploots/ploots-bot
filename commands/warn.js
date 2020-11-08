const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

 
   let towarn = message.guild.members.find(mem => mem.user.username.toLowerCase().startsWith(args[0].toLowerCase())) || message.mentions.users.first()

  
 
  
  if(!towarn) return message.reply("Be sure to provide a valid User and Reason.");
  if(!message.member.hasPermission('KICK_MEMBERS', 'MANAGE_MESSAGES')) return message.reply("You Don't have Permission to do This!");
  


  
  let muteReason = args.slice(1).join(" ");
   if(!muteReason) return message.reply("You Must Provide a Reason!")
    let incidentchannel = message.guild.channels.find(c => c.name == "reports" || c.name == "modlog" || c.name == "modlogs" || c.name == "logs" || c.name == "mod-logs")
   let reportEmbed = new Discord.RichEmbed()
    .setDescription("User Has Been Warned!")
    .setColor("#f94040")
    .addField("Warned User", `${towarn} With ID: ${towarn.id}`)
    .addField("Warned By", `${message.author} With ID: ${message.author.id}`)
    .addField("Time", message.createdAt)
    .addField("Reason", muteReason)
	  .setFooter('Ploots Bot', 'https://cdn.glitch.com/e08038ce-cb82-4a40-8646-d71caed230b9%2Fprofilepic.png?v=1583725629095');
  
  
  let warnEnsure = new Discord.RichEmbed()
  .setDescription("Successfully Warned " + `${towarn}`); //DM successfully sent to PlootsMaster!
  
  message.channel.send(warnEnsure);
if (!incidentchannel) return message.channel.send(reportEmbed);
  
    incidentchannel.send(reportEmbed);
  
  towarn.send(`You were Warned in **${message.guild.name}** for: ` + (muteReason));


}

module.exports.help = {
  name: "warn"
}