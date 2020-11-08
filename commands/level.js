const Discord = require("discord.js");
const botconfig = require("../botconfig");
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {
  

  
  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }
  
if(!args[0]) {
  var user = message.author;
} else {
  var user = message.mentions.users.first() || bot.users.get(args[0]);
}
let curxp = xp[user.id].xp;
let curlvl = xp[user.id].level;
let nxtLvlXp = curlvl * 450;
let difference = nxtLvlXp - curxp;
 
 
  
  let lvlEmbed = new Discord.RichEmbed()         //('Your Current Level: ' + curlvl) 'Your Current XP: ' + curxp)
  .setDescription('Current Level: ' + curlvl + `
`
            + 'Current XP: ' + curxp)
  .setAuthor(user.username)
  .setColor('#d604cf')
  .setFooter(`${difference} XP needed to level up`, user.displayAvatarURL);
  
  
  message.channel.send(lvlEmbed)
  
}

 

module.exports.help = {
  name: "level"
}