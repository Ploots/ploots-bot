const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var roll = Math.floor(Math.random() * 6) + 1;
  message.channel.send(":game_die: Rolling Dice...").then((message) =>{
       setTimeout(function(){
   message.edit("You rolled a " + roll)
    }, 750); 
    }) // The 1750 is how many Miliseconds it waits before executing the process before
};
module.exports.help = {
  name: "roll"
};

  