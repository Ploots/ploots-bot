const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
 const weed = bot.emojis.get("704366500550672456");
 const opioids = bot.emojis.get("704720631933042808");
 const cocaine = bot.emojis.get("704728682488528977");
  let list = new Discord.RichEmbed()
  .setColor('#0099ff')
	.setAuthor('Drugs you can Use')
  .addField(weed + " Weed", "Smoke some Weed.")
   .addField(opioids + " Opioids", "Swallow some Opioids whole.")
   .addField(cocaine + " Cocaine", "Snort some Cocaine.")
	.setFooter("Ploots Bot", bot.user.displayAvatarURL);

  let weedEmbed = new Discord.RichEmbed()
  .setColor('#0099ff')
	.setAuthor('Puff Puff')
  .addField(weed + " Weed", "You took a blunt and smoked the entire thing, \ngetting high and forgetting about the hardships of life for a while.")
	.setFooter("Ploots Bot", bot.user.displayAvatarURL);
  
  let opioidEmbed = new Discord.RichEmbed()
  .setColor('#0099ff')
	.setAuthor('Perscription? Nah')
  .addField(opioids + " Opioids", "You took a bottle of questionable pills and gulped down\nthe entire thing, blacking out and waking up in a random place.")
	.setFooter("Ploots Bot", bot.user.displayAvatarURL);
  
  let cocaineEmbed = new Discord.RichEmbed()
  .setColor('#0099ff')
	.setAuthor(`Jimmy's Special Sugar`)
  .addField(cocaine + " Cocaine", "You lined up some Cocaine using a Credit Card and snorted it down with\na Plastic Straw, bouncing around the room and not being able to sleep for a week.")
	.setFooter("Ploots Bot", bot.user.displayAvatarURL);
  
  
  
   message.channel.send("What kind of drugs are we doing? type ***list*** to see a list of drugs, and type ***cancel*** to cancel the command."); //704366500550672456
message.channel.awaitMessages(m => m.author.id == message.author.id,{max: 1, time: 30000}).then(collected => {
// only accept messages by the user who sent the command
// accept only 1 message, and return the promise after 30000ms = 30s

// first (and, in this case, only) message of the collection
  
if (collected.first().content.toLowerCase() == 'list') {
     message.channel.send(list)
   message.channel.send('Redo the Command and Type the kind of Drug you want to use!');
  
}
if (collected.first().content.toLowerCase() == 'cancel') {
    message.channel.send('Command Canceled.');
}
  if (collected.first().content.toLowerCase() == 'weed') {
     message.channel.send(weedEmbed)
  }
   if (collected.first().content.toLowerCase() == 'opioids') {
     message.channel.send(opioidEmbed)
  }
  if (collected.first().content.toLowerCase() == 'pills') {
     message.channel.send(opioidEmbed)
  }
   if (collected.first().content.toLowerCase() == 'cocaine') {
     message.channel.send(cocaineEmbed)
  }
}).catch(() => {message.channel.send('No answer after 30 seconds, Command canceled.');

               });
}
module.exports.help = {
  name: "drugs"
}