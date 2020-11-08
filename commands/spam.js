 const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
  message.delete().catch();
  
  message.channel.send("**SPAM SPAM SPAM SPAM SPAM**", {files: ["https://s2.glbimg.com/YvsrpNQ_mlWSn1LDR1XYxUxkZwk=/0x0:1600x1013/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/i/E/VL3T8rRxAhKg0H3u46jA/spam.jpg"]});


}

module.exports.help = {
    name: "spam"
}