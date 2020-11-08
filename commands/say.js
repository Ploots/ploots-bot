  const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let ids = ("385067115226595339")
if (!ids.includes(message.author.id)  ) {
  return message.reply("Only the owner can use this Command!")
}
  // get amount of iterations
  var iterations = parseInt(args[0], 10);

  // format text
  var args = args.slice(1);
  const sayMessage = args.join(" ");

  message.delete().catch();

  // start sending messages
  for (var i = 0; i < iterations; i++) {
    message.channel.send(sayMessage);
  }
};


module.exports.help = {
  name: "say"
};

  