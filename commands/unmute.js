const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d
if(message.channel.type === "dm") return message.channel.send("You Can't Use this in DM's.");
  let toUnmute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!toUnmute) return message.reply("Be sure to provide a valid user.");
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("You aren't a Moderator!");
  if(toUnmute.hasPermission('ADMINISTRATOR')) return message.reply("You Can't Unmute Admins!")
  let muterole = message.guild.roles.find(muterole => muterole.name === "Muted");
  let muteReason = args.slice(1).join(" ");
  if(!muteReason) return message.reply("You Must Provide a Reason!")
  
  
    let incidentchannel = bot.channels.find(c => c.name == "reports" || c.name == "modlog" || c.name == "modlogs" || c.name == "logs")
  
    
    let reportEmbed = new Discord.RichEmbed()
    .setDescription("User Has Been Unmuted!")
    .setColor("#f94040")
    .addField("Unmuted User", `${toUnmute} With ID: ${toUnmute.id}`)
    .addField("Unmuted By", `${message.author} With ID: ${message.author.id}`)
    .addField("Time", message.createdAt)
    .addField("Reason", muteReason)
	  .setFooter('Ploots Bot', 'https://cdn.glitch.com/e08038ce-cb82-4a40-8646-d71caed230b9%2Fprofilepic.png?v=1583725629095');
  let muteEnsure = new Discord.RichEmbed()
  .setDescription("Unmuted " + `${toUnmute}`);
  
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  message.channel.send(muteEnsure);
if (!incidentchannel) return message.channel.send(reportEmbed);
    incidentchannel.send(reportEmbed);
  await(toUnmute.removeRole(muterole.id));



//end of module
}

module.exports.help = {
  name: "unmute"
}