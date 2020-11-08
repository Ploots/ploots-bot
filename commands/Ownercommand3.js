  const Discord = require("discord.js");
const superagent = require('superagent')

module.exports.run = async (bot, message, args) => {
let ids = ("385067115226595339")
if (!ids.includes(message.author.id)  ) {
  return message.reply("Only the owner can use this Command!")
}
let begCoins = Math.floor(Math.random() * 9999999999999999999999999999999  ) + 1;
  
  
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
const superRandom = randomCharacter*20;
  
  message.channel.send(superRandom);
  
}


module.exports.help = {
  name: "ownertest"
}; 