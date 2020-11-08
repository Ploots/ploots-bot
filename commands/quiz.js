const Discord = require('discord.js');
const quiz = [
  { q: "What is the Town John Lennon Grew up in?", a: ["strawberry fields", "liverpool", "strawberry fields, liverpool", "strawberry fields liverpool"] },
  { q: "What is Ringo's full name?", a: ["Richard", "richard Starkey"] },
  { q: "What Beatles song did BBC Ban?", a: ["the walrus", "i am the Walrus", "walrus"] },
  { q: "Who started the Beatles?", a: ["john lennon"] },
  { q: "Who created me?", a: ["ploots", "Ploots Master#2433", "PlootsMaster", "plootsmaster", "jesse"] },
  { q: "What is the First Beatles album that made Top Charts?", a: ["help!", "help"] },
  { q: "What disease did ALL FOUR Beatles contract early in their career?", a: ["gonorrhea"] },
  { q: "What was the Beatles' Longest Single?", a: ["hey jude",] },
  { q: "Which Beatles Member became a Grandfather first?", a: ["ringo"] },
  { q: "The Beatles' Last album Released was *Let it Be*, But what was their last album ***recorded?***", a: ["abbey road"] },
  { q: "Which Beatles love song did Frank Sinatra described as the 'best song ever'?", a: ["something"] },
  { q: "In what Song did Paul McCartney curse in the background, following a mistake in the recording?", a: ["hey jude"] },
  { q: "Which Beatles Member was Dyslexic, and Legally Blind?", a: ["John", "John Lennon", "Lennon"] },
  { q: "In 1969, John Lennon changed his name from Winston to ***what***, after Marrying Yoko Ono?", a: ["ono"] },
  { q: "True or false: The Beatles couldn't Read Music.", a: ["true"] },
  { q: "Where were the Beatles formed?", a: ["liverpool"] },
  { q: "In what year was the Beatles formed?", a: ["1960"] },
  { q: "How manny Grammies do the Beatles hold?", a: ["7", "seven"] },
  { q: "Which Beatles Member died of Lung Cancer?", a: ["george", "george harrison", "harrison"] },
  { q: "Which Beatles Member was murdered?", a: ["john", "john lennon", "lennon"] },
  { q: "Who murdered one of the Beatles Members?", a: ["mark chapman", "chapman", "mark", "mark david chapman"] },
  { q: "Which famous Singer introduced the Beatles to Weed?", a: ["Bob Dylan"] },
  { q: "John Lennon claimed the Beatles were more poplar than who himself?", a: ["jesus Christ", "Jesus", "God"] }
];
const options = {
  max: 1,
  time: 60000,
  errors: ["time"],
};

module.exports.run = async (bot, message, args) => {
  
  const item = quiz[Math.floor(Math.random() * quiz.length)];
  await message.channel.send(item.q);
  try {
    const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor(`Winner: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                                 .setTitle(`Correct Answer: \`${winnerMessage.content}\``)
                                 .setFooter(`Question: ${item.q}`)
                                 .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 0xffffff}`)
                                })
  } catch (_) {
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor('No one got the answer in time!')
                                 .setTitle(`Correct Answer(s): \`${item.a}\``)
                                 .setFooter(`Question: ${item.q}`)
                                })
  }
}
module.exports.help = {
name: "quiz"
}