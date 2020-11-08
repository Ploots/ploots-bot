// at the top of your file
const Discord = require('discord.js');
exports.run = async (bot, message, args, level) => { 
  let ids = ("385067115226595339")
  
   var penis = [
    "8============================================D"];
var randomLength = Math.floor(Math.random() * penis.length);

// inside a command, event listener, etc.
const penisEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setURL('https://discord.js.org/')
	.setAuthor('Pee Pee Calculator')
  .setDescription(penis[randomLength])
	.setFooter("Ploots Bot", bot.user.displayAvatarURL);
 
  if (!ids.includes(message.author.id)  ) {
  return message.reply("Only the owner can use this Command!")
}

 message.channel.send(penisEmbed);
};

exports.help = {
  name: "superpenis",
  category: "Miscelaneous",
  description: "Sees how long someone's pee pee is",
  usage: "superpenis"
};