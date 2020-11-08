const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
   let prefix  = botconfig.prefix;
message.channel.send(` ${message.author}, **Here's the List of Command Modules!** \n \n 🎃**HAPPY SPOOKTOBER!!!**🎃 \n **${prefix}helpfun**:   For help on Fun commands to play around with. \n **${prefix}helpcurrency**:  For help with Currency Commands! \n **${prefix}helpmod**:   For help with Moderation Commands, for Moderators and Administrators.\n **${prefix}corona**:   For tips to Keep safe during the growing Coronavirus pandemic. \n **${prefix}helpowner**:   For help with Commands only Accesible by The bot owner (PlootsMaster#2433) \n **${prefix}contact**:   Contact the Owner of the bot for Support... ONLY TO BE USED FOR SERIOUS ISSUES. If used for otherwise, Botbans may be issued.`
                    )
}

module.exports.help = {
  name:"help"
}