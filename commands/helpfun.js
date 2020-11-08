const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
   let prefix  = botconfig.prefix;
    let sicon = message.guild.iconURL; //message.channel.send(``)
    
  message.channel.send(`${message.author}, **Here's all of the Fun Commands!** \n \n **${prefix}love**:   See how well you Match with Another User! \n **${prefix}penis**:   Measure the size of your peepee! \n **${prefix}snipe:**   Shows the most recent deleted Message in a channel! \n **${prefix}drugs**:   Do some Drugs! \n **${prefix}blessed**:   Sends a Blessed image from r/BlessedImages! \n **${prefix}salt**:   See how Salty a user is! \n **${prefix}rps**   Play Rock Paper Scissors with me! \n **${prefix}coinflip**:   Flip a coin! \n **${prefix}roll**:   Roll a 6 faced Dice! \n **${prefix}gay**:   see how gay a user is! \n **${prefix}hug**:   Hug another User! \n **${prefix}kiss**:   Kiss another User! \n **${prefix}trickshot**:  Trickshot another User! \n **${prefix}jojo**:   Sends a picture/meme from r/shitpostcrusaders, the reddit page for JoJo's Bizarre Adventures! \n **${prefix}cuddle**:   Cuddle with another User! \n **${prefix}slap**:   Slap another User! \n **${prefix}punch**:   Punch another User! \n **${prefix}ascii**:   Make your text a lot bigger! \n **${prefix}8ball**:   Ask the Mystical 8Ball any question you Choose! \n **${prefix}meme**:   Posts a random meme from r/dankmemes! \n **${prefix}quiz**:   Test your Knowledge skills with a Quiz!`)
  
}


module.exports.help = {
  name:"helpfun"
}