 const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
  message.delete().catch();
  
  message.channel.send("RIP CHAT :pensive:", {files: ["https://miro.medium.com/max/1000/1*cHawxobVg5wVmnMm6CaSFQ.jpeg"]});


}

module.exports.help = {
    name: "deadchat"
}