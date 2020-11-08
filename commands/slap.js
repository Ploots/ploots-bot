const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, message, args) => {
if(message.channel.type === "dm") return;
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("Oi mate, ye gotta mention a user to slap, ye dolt!");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/slap`);

    let hugEmbed = new Discord.RichEmbed()
    .setTitle("Slap! >:c")
    .setDescription(`**${message.author.username}** slapped **${message.mentions.users.first().username}**!`)
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("Bot Version: 0.0.4", bot.user.displayAvatarURL);

    message.channel.send(hugEmbed)

}

module.exports.help = {
    name: "slap"
}