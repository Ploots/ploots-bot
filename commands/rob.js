const Discord = require("discord.js");
const talkedRecently = new Set();
let fs = require("fs");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
   if (talkedRecently.has(message.author.id)) {
            message.channel.send( message.author + ", Wait 5 minutes Inbetween robberies.");
   } else {
  
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  
if(!coins[pUser.id]){
  coins[pUser.id] = {
    coins: 0
  };
}

let pCoins = coins[pUser.id].coins;
let sCoins = coins[message.author.id].coins;
  
var foo = Math.floor((Math.random() * 100) + 1);
  
  var foo2 = Math.floor((Math.random() * 500) + 1);
  
  if(pCoins < 500) {
    return message.channel.send("It's Not worth it man, They Don't have 500 coins.")
  }
  
if (foo < 70) {
    coins[message.author.id] = {
  coins: sCoins + foo2
};
  
  
coins[pUser.id] = {
  coins: pCoins - foo2
};
  message.channel.send(`Successfully Stole ${foo2} from ${pUser}.`)
} else 
    coins[message.author.id] = {
  coins: sCoins - foo2
};
  
coins[pUser.id] = {
  coins: pCoins + foo2
};
  message.channel.send(`Yikes! You were Caught! You had to pay ${foo2} to ${pUser}.`)
   }
  
          talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 300000);
  
}
    
   
   
   module.exports.help = {
  name: "rob"
}