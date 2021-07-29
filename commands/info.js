const Discord = require('discord.js')
const moment = require ('moment');
moment.locale('pt-BR')
 
exports.run = (client, message, args) => {
//module.export.run = (bot,message,args) => {
//
//}
    let gAvatar = message.guild.iconURL;
    let embed = new Discord.RichEmbed()

    .setTimestamp()
    .setTitle(`${message.guild.name}`)
    .setThumbnail(gAvatar)
    .setColor("RANDOM")
    .setDescription(`Some info of ${message.guild.name}!`)
    .addField(`ID`, message.guild.id, true)
    .addField(`Owner`, message.guild.owner, true)
    .addField(`Region`, message.guild.region, true)
    .addField(`Channels`, message.guild.channels.size, true)
    .addField(`Created At`, moment(message.guild.createdAt).format('LLLL'))
    .addField(`You joiend at`, moment(message.member.joinedAt).format('LLLL') )
    .addField(`Joined at`, moment(client.user.joinedAt).format('LLLL'))
    .addField(`Members`, message.guild.memberCount)
    //.addField("IP", "jogar.redelyze.com")

    message.channel.send(embed)

}

module.exports.help = {
    name: "info",
    aliases: ["serverinfo", "si"]
   }