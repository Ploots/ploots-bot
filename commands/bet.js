const Discord = require("discord.js");
const talkedRecently = new Set();
let fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
   if (talkedRecently.has(message.author.id)) {
            message.channel.send( message.author + ", Wait 5 minutes Inbetween robberies.");
   } else {
  
  let pUser = message.author.id;
  
if(!coins[pUser.id]){
  coins[pUser.id] = {
    coins: 0
  };
}

let pCoins = coins[pUser.id].coins;
let sCoins = coins[message.author.id].coins;
  
var foo = Math.floor((Math.random() * 100) + 1);
  
  var foo2 = Math.floor((Math.random() * 500) + 1);
  
  if(sCoins < 500) {
   return message.channel.sen("You need at least 500 Coins to Bet.")
  }
  
if (foo < 70) {
    coins[message.author.id] = {
  coins: sCoins + foo2
};
  
  message.channel.send(`You won ${foo2} coins!`)
} else 
    coins[message.author.id] = {
  coins: sCoins - foo2
};
  message.channel.send(`Yikes! You lost! You had to pay the Slot Machine ${foo2} coins.`)
   }
  
          talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 300000);
  
}
    
   
   
   module.exports.help = {
  name: "bet"
}    