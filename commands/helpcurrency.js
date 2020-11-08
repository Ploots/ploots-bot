const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
   let prefix  = botconfig.prefix;
    let sicon = message.guild.iconURL; //message.channel.send(``)
    
  message.channel.send(`${message.author}, **Here's all of the Currency Commands Commands!** \n \n **${prefix}Balance**:   See Your or Another User's Balance! \n **${prefix}Beg**:   Beg for Coins! \n **${prefix}Search**:   Search for Coins! \n **${prefix}Pay**:   Share your Money with another User! \n **${prefix}Rob**:   Rob another User!`)
}


module.exports.help = {
  name:"helpcurrency"
}