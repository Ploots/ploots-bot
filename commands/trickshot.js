// at the top of your file
const Discord = require('discord.js');
exports.run = async (client, message, args, level) => { 
   let snipePerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(message.channel.type === "dm") return message.channel.send("You Can't Use this in DM's.");
  if(!snipePerson) return message.channel.send("You have to Mention a User to Trickshot!");
  //`**${message.author.username}** kissed **${message.mentions.users.first().username}**!`)
 
  
  
  var snipe = [`**${message.author.username}** Shoots at **${message.mentions.users.first().username}**, But misses by an Inch!`,
              `**${message.author.username}** Does a Backflip off of the Balcony, and Brutally Noscopes **${message.mentions.users.first().username}** in the Face!`,
              `**${message.author.username}** Randomly Waves his Sniper, Pulls his Trigger, and Hits **${message.mentions.users.first().username}** in his Kneecap!`,
               `**${message.author.username}** Trips and Hits his Head on the Concrete.`,
               `**${message.author.username}** Randomly Waves his Sniper, Pulls his Trigger, and Hits Himself in the Foot.`,
                `**${message.author.username}** Quickscopes **${message.mentions.users.first().username}** in the Chest!`,
              `**${message.author.username}** Quickscopes **${message.mentions.users.first().username}** in the Shoulder!`,
              `**${message.author.username}** Shoots, and the Bullet Misses, Ricochets, and the Bullet goes through **${message.author.username}**'s Skull.`,
               `**${message.author.username}** Throws a Knife from Across the Map, and Hits **${message.mentions.users.first().username}** in the Chest, instantly Killing Them!`,
               `**${message.author.username}** Throws a Grenade from Across the Map, and Blows up **${message.mentions.users.first().username}**!`,
               `**${message.author.username}** Smacks **${message.mentions.users.first().username}** In the Face with the Barrel of their Sniper, Breaking Their Jaw!`,
               `**${message.author.username}** Stealthily Stabs **${message.mentions.users.first().username}** In the Heart!`,
               `**${message.author.username}** Shoots at **${message.mentions.users.first().username}** and Hits them in the Nose, killing them Instantly!`,
                `**${message.author.username}** Shoots at **${message.mentions.users.first().username}** and Hits them in the Leg, Crippling Them Instantly!`,
               `**${message.author.username}** Shoots at **${message.mentions.users.first().username}** and Hits them in the Privates, Killing Them Instantly!`,
               `**${message.author.username}** Shoots at **${message.mentions.users.first().username}** and Hits them in the Hand, Crippling Them Instantly!`,
               `**${message.author.username}** Shoots at **${message.mentions.users.first().username}** and Hits them in the Neck, Breaking Their Collarbone Instantly!`,
               `**${message.author.username}** Shoots at **${message.mentions.users.first().username}**, But completely Misses!`,
                `**${message.author.username}** Shoots at **${message.mentions.users.first().username}**, But accidentaly Drops their Gun, Rendering them Defenseless!`,
               `**${message.author.username}** Shoots at **${message.mentions.users.first().username}** And hits them in the Spine, Paralyzing them Instantly!`,
              ];
  
  
  
  
  
var random = Math.floor(Math.random() * snipe.length);

// inside a command, event listener, etc.
const trickshotMessage = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setURL('https://discord.js.org/')
	.setAuthor('Trickshot Time!')
  .setDescription(snipe[random])
	.setFooter(`Command by **${message.author.username}**`, 'https://cdn.glitch.com/e08038ce-cb82-4a40-8646-d71caed230b9%2Fprofilepic.png?v=1583725629095');
 message.channel.send( `You ready your Sniper Rifle for an Epic trickshot at **${message.mentions.users.first().username}**.`)
 setTimeout(function(){
  message.channel.send(trickshotMessage);
    }, 1000);
};

exports.help = {
  name: "trickshot",
  category: "Miscelaneous",
  description: "Sees how long someone's pee pee is",
  usage: "trickshot"
};