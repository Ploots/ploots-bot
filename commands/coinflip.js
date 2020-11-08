const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

function doRandHT() {
var rand = ['It Landed on Heads!','It Landed on Tails!'];

return rand[Math.floor(Math.random()*rand.length)];
}

 const embed = {
"title": `You Tossed a Coin!`,
"description": doRandHT(),
"color": 7584788,
};
message.channel.send({ embed });
};

module.exports.help = {
    name: "coinflip"
};