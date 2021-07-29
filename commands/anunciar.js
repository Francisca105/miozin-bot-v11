const Discord = require('discord.js')
 
exports.run = (client, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        message.reply("**you don\''t have permission.**")
    } else {
    message.channel.send('**Where is the announcement?**').then(msg1 => {
        let c1 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
        .on('collect', c => {
            canal = c.mentions.channels.first()
            if(!canal){
                message.channel.send('**I didn\'t find that channel.**')
                message.channel.bulkDelete(1);
            } else {
 
                message.channel.send('**Which is the title?**').then(msg2 => {
                    let c2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                    .on('collect', c => {
                        titulo = c.content
 
                        message.channel.send('**What is the announcement?**').then(msg3 => {
                            let c3 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                            .on('collect', c => {
                                anuncio = c.content
                                message.channel.send('**Announcement send successfuly!**')
                                message.channel.bulkDelete(8);
                                let embed = new Discord.RichEmbed()
                                .setTimestamp()
                                .setTitle(titulo)
                                .setColor('RANDOM')
                                .setDescription(anuncio)
                                .setFooter(`${message.author.username}`, message.author.avatarURL)
 
                                
                                canal.send(embed)
                                
                                })
                            })
                        })
                    })
                }
            })
        })
    }
}
module.exports.help = {
    name: "anunciar",
    aliases: ["anuncio", "avisar", "anúncio", "warn"]
   }