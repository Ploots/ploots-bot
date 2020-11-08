  const Discord = require("discord.js");
const superagent = require('superagent')

module.exports.run = async (bot, message, args) => {
let ids = ("385067115226595339")
if (!ids.includes(message.author.id)  ) {
  return message.reply("Only the owner can use this Command!")
}

  
  
  function doSetTimeout(i) {
  setTimeout(function() {
     superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hentai'})
    .end((err, response) => {
      message.channel.send({ file: response.body.message });
    });
  }, 1000);
}

for (var i = 1; i <= 10; ++i)
  doSetTimeout(i);
  
}


module.exports.help = {
  name: "hentai"
}; 