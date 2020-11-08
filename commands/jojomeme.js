const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {


    let reddit = [
        "ShitPostCrusaders",
    ]
   

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

   const msg = await

    randomPuppy(subreddit).then(async url => {
            await message.channel.send({
              
              files: [{
                    attachment: url, 
                    name: 'meme.png'
                  
                }]
            }).then(() => message.channel.stopTyping());
    }).catch(err => console.error(err));

};

module.exports.help = {
    name: 'jojo',
    aliases: ['jojomemes']
}