exports.run = async (client, message, args, err) => {
    const { dona } = require('../config.json')
    const discord = require('discord.js')
    const beautify = require('beautify')
    if(message.author.id !== dona) return message.reply(' não podes fazer este comando!')
    let code = args.slice(0).join(" ");
    if(!code) return message.reply('qual o código?')
    let codeTLC = code.toLowerCase()
    
    
    //Eval :)
    try {
        if(codeTLC.includes('token')) return message.reply('Ups :3')
        let evaluated = eval(code)
        let embed = new discord.RichEmbed()
        .setTitle('EVAL')
        .setColor('#f5a742')
        .setDescription('')
        .addField('Entrada:', `\`\`\`js\n${beautify(code), {format: "js"}}\n\`\`\``)
        .addField('Saída:', evaluated)
        .addField('Tipo:', typeof(evaluated))
        message.channel.send(embed)
    } catch (e) {
        let embedE = new discord.RichEmbed()
        .setTitle('EVAL')
        .setColor('#f5a742')
        .setDescription('Error 500')
        .addField('Entrada:',`\`\`\`${code}\`\`\``)
        .addField('Erro:', '\`\`\`' + e + '\`\`\`')
        message.channel.send(embedE)
    }
}
module.exports.help = {
    name: "eval",
    aliases: ['e']
}   