const Discord = require("discord.js");
exports.run = async (bot, message, args, level) => { // eslint-disable-line no-unused-vars

  let ids = ("385067115226595339")
let contactMessage = args.join(" ")
  if (!contactMessage) return message.reply("You must supply a Message to send to from the owner.")
let contactEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
	.setTitle('**Contact Recieved!**')
.addField('Contact User', message.member.user.tag)
.addField('​', '​')
.addField('Server Sent', message.guild)
.addField('​', '​')
.addField('Contact Message', contactMessage)


   bot.users.get('385067115226595339').send(contactEmbed)
  
 const remindEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('**Contact Sent!**')
  .setDescription('Your Contact Message will be reviewed by the Bot Owner soon!')
	.setFooter('Thank you for Contacting Support! || Ploots Bot', 'https://cdn.glitch.com/e08038ce-cb82-4a40-8646-d71caed230b9%2Fprofilepic.png?v=1583725629095');
 
  message.channel.send(remindEmbed)
};


// (`**${message.author.username}** punched **${message.mentions.users.first().username}**!`)
exports.help = {
  name: "contact",
};