exports.run = async (client, message, args, err) => {
    const discord = require('discord.js')

    let title = 'How to order my construction?',
    follow = 'Follow this message pattern',
    Esim = '<:SIM:650715587173154847>',
    Enao = '<:NAO:650715586837479425>',
    id = '727224601322455051',
    canal = client.channels.get(id)

    let tema, estilo, tamanho, construção, ideias, preço;

    let txt = `\n\nTheme: (Theme like medieval fantasy etc)\nStyle: ${Enao} \nSize: ${Enao}\nConstruction: ${Enao}\nIdeas: ${Enao}\nPrice: ${Enao}\nHalf the payment to start construction\n\nAtt: Miozin`
    let txt1 = `\n\nTheme: ${Esim}\nStyle: (rankup factions or etc.)\nSize: ${Enao}\nConstruction: ${Enao}\nIdeas: ${Enao}\nPrice: ${Enao}\nHalf the payment to start construction\n\nAtt: Miozin`
    let txt2 = `\n\nTheme: ${Esim}\nStyle: ${Esim}\nSize: (size 100x100 200x200 etc)\nConstruction: ${Enao} \nIdeas: ${Enao}\nPrice: ${Enao}\nHalf the payment to start construction\n\nAtt: Miozin`
    let txt3 = `\n\nTheme: ${Esim}\nStyle: ${Esim}\nSize: ${Esim}\nConstruction: (spawning lobby etc)\nIdeas: ${Enao}\nPrice: ${Enao}\nHalf the payment to start construction\n\nAtt: Miozin`
    let txt4 = `\n\nTheme: ${Esim}\nStyle: ${Esim}\nSize: ${Esim}\nConstruction: ${Esim}\nIdeas: (impressions or photos of something you already have in mind)\nPrice: ${Enao}\nHalf the payment to start construction\n\nAtt: Miozin`
    let txt5 = `\n\nTheme: ${Esim}\nStyle: ${Esim}\nSize: ${Esim}\nConstruction: ${Esim}\nIdeas: ${Esim}\nPrice: (price you are willing to pay)\nHalf the payment to start construction\n\nAtt: Miozin`
    let txt6 = `\n\nTheme: ${Esim}\nStyle: ${Esim}\nSize: ${Esim}\nConstruction: ${Esim}\nIdeas: ${Esim}\nPrice: ${Esim}\nHalf the payment to start construction\n\nAtt: Miozin`

    let embed = new discord.RichEmbed()
    .setTitle(title)
    .setDescription(follow + txt)
    .setColor('RANDOM')

    let embed1 = new discord.RichEmbed()
    .setTitle(title)
    .setDescription(follow + txt1)
    .setColor('RANDOM')

    let embed2 = new discord.RichEmbed()
    .setTitle(title)
    .setDescription(follow + txt2)
    .setColor('RANDOM')

    let embed3 = new discord.RichEmbed()
    .setTitle(title)
    .setDescription(follow + txt3)
    .setColor('RANDOM')

    let embed4 = new discord.RichEmbed()
    .setTitle(title)
    .setDescription(follow + txt4)
    .setColor('RANDOM')

    let embed5 = new discord.RichEmbed()
    .setTitle(title)
    .setDescription(follow + txt5)
    .setColor('RANDOM')

    
    let embed6 = new discord.RichEmbed()
    .setTitle(title)
    .setDescription(follow + txt6)
    .setFooter('Thanks for hiring me!')
    .setColor('RANDOM')


    message.member.send(embed).then(msg1 => {
        let c1 = msg1.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
        .on('collect', c => {
            tema = c.content
            //c.delete(1000)

            msg1.edit(embed1).then(msg2 => {

                let c2 = msg2.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
        .on('collect', co => {
                estilo = co.content
                //co.delete(1000)

                msg2.edit(embed2).then(msg3 => {
                
                    let c3 = msg3.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
            .on('collect', col => {
                    tamanho = col.content
                    //col.delete(1000)

                    msg3.edit(embed3).then(msg4 => {
                
                        let c4 = msg4.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                .on('collect', coll => {
                            construção = coll.content
                            //coll.delete(1000)

                            msg4.edit(embed4).then(msg5 => {
                
                                let c5 = msg5.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                        .on('collect', colle => {
                                        ideias = colle.content
                                        //colle.delete(1000)

                                        msg5.edit(embed5).then(msg6 => {
                
                                            let c6 = msg6.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                                    .on('collect', collec => {
                                                preço = collec.content
                                                //collec.delete(1000)

                                                message.channel.send('Order send!')
                                                let pedir = new discord.RichEmbed()
                                                .setTitle('New order!')
                                                .setDescription('**Theme**\n' + tema + '\n\n**Style**\n' + estilo + '\n\n**Size**\n' +tamanho + '\n\n**Constructions**\n'+construção + '\n\n**Ideas**\n' + ideias +'\n\n**Price**\n'+ preço)
                                                .setFooter('Ordered by: ' + message.author.username)
                                                .setColor('RANDOM')

                                                canal.send(pedir)
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

    message.channel.send('Check your dm!')
}
module.exports.help = {
    name: "encomendar",
    aliases: ['encomendar', 'pedir', 'order']
}   