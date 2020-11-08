const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   let ids = "385067115226595339";
  if(!ids.includes(message.author.id)) {
    return message.reply("Oi mate, piss off, only the owner can do this!");
    }
  if(message.channel.type === "dm") return;
    let bicon = bot.user.displayAvatarURL;
    let string = '';
    bot.guilds.forEach(guild => {
    string += guild.name + '    ' + guild.id + '\n';})
    let bt = bot.user.username;
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("Servers I'm In", string)
        .setTimestamp()
        .setFooter("Command Ran By: " + message.author.username, message.author.avatarURL);
    message.channel.send(botembed);
}

module.exports.help = {
    name: "servers"
}
