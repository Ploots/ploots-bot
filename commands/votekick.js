const Discord  = module.require('discord.js');

const agree    = "✅";
const disagree = "❌";

module.exports.run = async (bot, message, args) => {

if(message.channel.type === "dm") return message.channel.send("You Can't Use this in DM's.");
  if (message.mentions.users.size === 0){
    return message.reply(":x: " + "| Please mention a User to kick next time.");
  }

  let kickmember = message.guild.member(message.mentions.users.first());
  if(!kickmember){
    message.reply(":x: " + "| That User Does Not Seem Valid!");
  }

  if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
    return message.reply(":x: " + "| i need the \"KICK_MEMBERS\" permission!").catch(console.error);
  }

  let msg = await message.channel.send("Vote now! (10 Seconds)");
  await msg.react(agree);
  await msg.react(disagree);

  const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 10000});
  msg.delete();

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree).count;
  }

  var sumsum = new Discord.RichEmbed()
                                         
            .addField("Voting Finished:", "□□□□□□□□□□□□□□□□□□□\n" +
                                          "Votes Against ❌: " + `${NO_Count-1}\n` +
                                          "Votes in Favor ✅: " + `${YES_Count-1}\n` +
                                          "□□□□□□□□□□□□□□□□□□□\n" +
                                          "NOTE: Votes needed to kick: (4+)\n" +
                                          "□□□□□□□□□□□□□□□□□□□", true)

            .setColor("0x#FF0000")

  await message.channel.send({embed: sumsum});

  if(YES_Count >= 5 && YES_Count > NO_Count){

    kickmember.kick().then(member => {
      message.reply(`${member.user.username} was succesfully kicked`)
    })
  }else{

    message.channel.send("\n" + "Sorry guys, this dude is safe.");
  }

}

module.exports.help = {
    name: "votekick"
}