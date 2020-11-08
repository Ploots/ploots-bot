
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

const coronaTime = new Discord.RichEmbed()
	.setColor('#b70000')
	.setURL('https://discord.js.org/')
	.setAuthor('CORONAVIRUS TIPS')
  .addBlankField(true)

.addField("1. Hands",["Wash them often."],true)
  .addBlankField(true)

.addField("2. Elbow",["Cough into it when you have to Cough."],true)
  .addBlankField(true)

.addField("3. Face",["Don't Touch it."],true)
  .addBlankField(true)

.addField("4. Distance",["Stay at least 6  Feet away from other People."],true)
  .addBlankField(true)

.addField("5. Feel",["If you feel sick, Stay Home and let a Parent/Guardian/Doctor know."],true)
  .addBlankField(true)

	.setFooter('Stay Safe, Ploots Bot', 'https://cdn.glitch.com/e08038ce-cb82-4a40-8646-d71caed230b9%2Fprofilepic.png?v=1583725629095');

 message.channel.send(coronaTime);
  };
  
module.exports.help = {
    name: "corona"
}