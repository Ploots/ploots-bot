const Discord = require("discord.js");
const talkedRecently = new Set();
let coins = require("../coins.json");

module.exports.run = async (bot, message, args, prefix) => {
    if (talkedRecently.has(message.author.id)) {
            message.channel.send( message.author + ", Wait 15 seconds Inbetween Begging, you Baby!");
    } else {
 var randomName = ["Homer Simpson", 
                      "Peter Griffin", 
                      "Jesse Parker",
                      "PlootsMaster",
                      "Roger the Alien",
                      "Former President Barack Obama",
                      "Donald Trump",
                      "Hillary Clinton",
                      "Shane Dawson",
                      "Markiplier",
                      "Jake from State Farm",
                      "David Dobrik",
                      "Pewdiepie",
                      "Ploots Bot",
                      "Arnold Schwarzen-word",
                      "Batman",
                      "Iron Man",
                      "Some Homeless Guy",
                      "Your Mom",
                      "Your Dad",
                      "Your Two Gay Dads",
                      "Your Retarded Cousin",
                      "Dio Brando",
                      "Jotaro Kujo",
                      "Distrust",
                      "Jesus Christ",
                  "Dream",
                  "GeorgeNotFound",
                  "Snapnap",
                  "JSchlatt",
                  "CallMeCarson",
                  "Pokimane",
                  "Simp Charity",
                  "Gamer Charity",
                  "Notch",
                  "Minecraft Steve",
                  "Minecraft Alex",
                  "TommyInnit",
                  "Wilbur Soot",
                  "Technoblade",
                  "Slimecicle",
                  "Samus Aran",
                  "Joe Biden",
                  "A Homeless Man",
                  "Jaquan from State Farm",
                  "Osama Bin.. wait..",
                  "Scatman John",
                  "Bruce Wayne",
                  "Batman",
                  "Clark Kent",
                  "Superman",
                  "Jack Nicholson",
                  "Heath Ledgers",
                   "James Charles",
                   "Santa Claus",
                   "Jack Skellington"
                  ];
var randomName2 = Math.floor(Math.random() * randomName.length);

  
  
  let begCoins = Math.floor(Math.random() * 30  ) + 1;
  
  if(!coins[message.author.id]) {
    coins[message.author.id] = {
      coins: 0
    }
  }


   coins[message.author.id] = {
      coins: coins[message.author.id].coins + begCoins
    }
  message.reply(`You begged **${randomName[randomName2]}** for coins and got **${begCoins}** Coins!`)
};
         
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 15000);
    }
    
module.exports.help = {
  name: "beg"
};