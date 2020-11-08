const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  if(message.channel.type === "dm") return message.channel.send("You Can't Use this in DM's.");
    var member = message.mentions.members.first();
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Provide a valid user, you Fucking Dumbass.");
  if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("You Don't have Permission to do This!");
    let rreason = args.join(" ").slice(22);
    if (!rreason) return message.reply("You must provide a reason!")

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Bitch Has Been Yeeted!")
    .setColor("#f94040")
    .addField("Dumbass Yeeted", `${kUser} With ID: ${kUser.id}`)
    .addField("Person who Yeeted the Dumbass", `${message.author} With ID: ${message.author.id}`)
    .addField("Time the Yeetening Happened", message.createdAt)
    .addField("Reason the Dumbass was Yeeted", rreason);

   let incidentchannel = message.guild.channels.find(c => c.name === 'reports' || c.name === 'publiclogs' || c.name === 'logs' || c.name === 'modlogs' || c.name === 'modlog')
   
   let yeetEnsure = new Discord.RichEmbed()
    .setDescription(`Fuckin' yeeted ${kUser}`)
   
    if(message.channel.type === "dm") return;

   if (!incidentchannel) return message.channel.send(reportEmbed);
    incidentchannel.send(reportEmbed);
   

    await member.kick().then(member)
    await message.channel.send(yeetEnsure);
  kUser.send(`You were so fucking dumb that you got Kicked from **${message.guild.name}** for: ` + (rreason));
}
 
module.exports.help = {
  name: "yeet"
}