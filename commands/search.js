const Discord = require("discord.js");
const talkedRecently = new Set();
let coins = require("../coins.json");

module.exports.run = async (bot, message, args, prefix) => {
    if (talkedRecently.has(message.author.id)) {
            message.channel.send( message.author + ", Wait 45 seconds Inbetween Searching!");
    } else {
 var randomName = ["The Local Coffee Shop",
                  "The Cashier at Dollar General",
                  "Your Mom's Purse",
                  "Your Own Pockets",
                  "The Bakery",
                  "The Beach",
                  "The Water Park",
                  "The Mall",
                  "Your Closet",
                  "The Washing Machine",
                  "The Dryer",
                  "An Abandoned Wallet",
                  "The Grocery Store Floor",
                  "Your Front Yard",
                  "Your Back Yard",
                  "Your Dog's Bed",
                  "Your Cat's Litter Box",
                  "The Flower Shop",
                  "The Local Graveyard",
                  "A Grave",
                  "Some Shmuck's Pockets",
                  "A Homeless Guy's Wagon",
                  "The Local Butchery",
                  "In Your Guitar Case",
                  "In The Grotto",
                  "At The Rig",
                  "Inside of The Agency",
                  "At The Shark",
                  "In Deadpool's Yacht",
                  "In the Cardboard Box Factory",
                  "In the Jungle, The Mighty Jungle"];
var randomName2 = Math.floor(Math.random() * randomName.length);

  
  
  let begCoins = Math.floor(Math.random() * 120  ) + 1;
  
  if(!coins[message.author.id]) {
    coins[message.author.id] = {
      coins: 0
    }
  }


   coins[message.author.id] = {
      coins: coins[message.author.id].coins + begCoins
    }
  message.reply(`You Searched **${randomName[randomName2]}** for coins and got ${begCoins} Coins!`)
};
         
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 45000);
    }
    
module.exports.help = {
  name: "search"
};