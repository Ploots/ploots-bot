const Discord = require("discord.js");
exports.run = async (bot, message, args, level) => { // eslint-disable-line no-unused-vars

  let ids = ("385067115226595339")
if (!ids.includes(message.author.id)) {
  return message.reply("Oi mate, piss off, only the owner can do this!")
}
  
   bot.users.get('385067115226595339').send('Reminder: ' + args.join(" "))
  
 const remindEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Reminder Sent!')
	.setFooter('Ploots Bot', 'https://cdn.glitch.com/e08038ce-cb82-4a40-8646-d71caed230b9%2Fprofilepic.png?v=1583725629095');
 
  message.channel.send(remindEmbed)
};


// (`**${message.author.username}** punched **${message.mentions.users.first().username}**!`)
exports.help = {
  name: "remind",
};