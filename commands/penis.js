// at the top of your file
const Discord = require('discord.js');
exports.run = async (bot, message, args, level) => { 
  
   var penis = [
    "8D, That's just sad.", 
    "8=D", 
    "8==D", 
    "8===D",
    "8====D", 
    "8=====D",
    "8======D",
    "8=======D",
    "8========D",
    "8=========D",
    "8==========D",
    "8===========D",
    "8============D",
    "8=============D",
    "8==============D",
    "8===============D",
    "8================D"];
var randomLength = Math.floor(Math.random() * penis.length);

// inside a command, event listener, etc.
const penisEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setAuthor('Pee Pee Calculator')
  .setDescription(penis[randomLength])
	.setFooter("Ploots Bot", bot.user.displayAvatarURL);

 message.channel.send(penisEmbed);
};

exports.help = {
  name: "penis",
  category: "Miscelaneous",
  description: "Sees how long someone's pee pee is",
  usage: "penis"
};