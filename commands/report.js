const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.type === "dm") return;
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user or Command wasn't inputed Correctly.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Report")
    .setColor("#ff6100")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

   
    let incidentchannel = message.guild.channels.find(c => c.name === 'reports' || c.name === 'publiclogs' || c.name === 'logs' || c.name === 'modlogs')
    if(!incidentchannel) return message.channel.send("Couldn't find report or log channel.");


    message.delete().catch(O_o=>{});
    incidentchannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "report"
}