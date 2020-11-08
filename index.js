const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const xp = require('./xp.json');
let bannedIds = ["644811269123211272", "620147456839122955", "718078316816498770"];
let coins = require("./coins.json");
const cooldowns = new Discord.Collection();
let ids = "385067115226595339";




bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  
  

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  


  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
    bot.commands.set(props.help.aliases, props);
  });
});



bot.on("ready", async () => {
 
  let servers;
  if (bot.guilds.size == 1){
    servers = "server";
  } else {
    servers = "servers";
  }
  
  console.log(`${bot.user.username} is online on ${bot.guilds.size} ${servers}!`);
  bot.user.setStatus('dnd')
    bot.user.setPresence({
        game: {
            name: `${botconfig.prefix}help | ${bot.guilds.size} ${servers} | Owned by PlootsMaster#2433`,
            type: "PLAYING",
            url: "https://bit.ly/PlootsMaster"
          
        }
    });

});


bot.on("message", async message => {

  
   if(!message.content.startsWith(botconfig.prefix)) return;
  if(bannedIds.includes(message.author.id)) return;
  if(message.channel.type === "dm" && !ids.includes(message.author.id)) return;
  if(message.author.bot) return;
  
  
  if(message.author.bot) return;    
  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);
  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }
  
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }
  
  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15  ) + 1;
  
  if(coinAmt === baseAmt) {
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
    fs.writeFile("./coins.json", JSON.stringify(coins), (err) =>{
      if (err) console.log(err)
    });
    let coinEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#0000FF")
    .addField("💰", `${coinAmt} coins Added!`);
    
    message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
  }
  
  
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 450;
  xp[message.author.id].xp = curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle(`${message.author.username}, You Leveled Up!`)
    .setColor("#d604cf")
    .setDescription("You are now Level " + (curlvl + 1) + '!')
    .setFooter("=level for details.");
    message.channel.send(lvlup).then(msg =>  {msg.delete(5000)});
  }
  
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) =>{
      if(err) console.log(err)
    });
  
 
  
  
  let deleteIds = ['385067115226595339', '547907138840690695', '217420932698865675']
  let deleteThis = ['[PlootsDelete]', '[PD]']
  let foundInText = false;
  for (var i in deleteThis) {
    if (message.content.toLowerCase().includes(deleteThis[i].toLowerCase())) foundInText = true;
  }
    if (foundInText && (deleteIds.includes(message.author.id))) {
      message.delete();
    }
  if (foundInText && (!deleteIds.includes(message.author.id))) {
      return;
    }
  
  
  //ids.includes(message.author.id)
  
    
  let prefix  = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
 
  if(commandfile) commandfile.run(bot,message,args);

});

  

bot.deletedMessages = new Discord.Collection()
bot.on("messageDelete", msg => bot.deletedMessages.set(msg.channel.id, msg))
  
bot.on("guildCreate", joinedGuild => {
  const welcomeEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
  .setDescription("Hey Guys! I'm Ploots Bot, created by PlootsMaster#2433. My prefix is =, so use =help for help!")
	.setFooter("Ploots Bot", bot.user.displayAvatarURL);
 joinedGuild.defaultChannel.send(welcomeEmbed).catch(console.log("No default channel!"))
});

  bot.deletedMessages = new Discord.Collection()
 bot.on("messageDelete", msg => {
  bot.deletedMessages.set(msg.id, msg)
  console.log(`Totally ${bot.deletedMessages.size} deleted messages stored!`)
})
  

bot.login(tokenfile.token);
