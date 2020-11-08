const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {

let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
  let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
  
  let uptimeEmbed = new Discord.RichEmbed()
  .setTitle("Bot Uptime!")
  .setDescription(uptime)
  .setFooter("Ploots Bot");
  
  
  
  message.channel.send(uptimeEmbed)
}

module.exports.help = {
    name: "uptime"
}
  