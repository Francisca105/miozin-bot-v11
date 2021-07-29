exports.run = async (client, message, args, err) => {
    const discord = require('discord.js')
    let embed = new discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avtarURL, 'https://discord.gg/Jj9suNy')
    .setDescription('addrole- Add a role in someone.\nhelp - send\'s this message.\nwarn- send\'s an announcement.\ndelete - clear the channel.\nban - ban\'s an user.\nbotinfo- send my info.\norder - order a build.\ninfo - send the server info.\nkick - kick an user.\nping - send my ping.')
        message.channel.send(embed)
    }
module.exports.help = {
    name: "help",
    aliases: ["?", "commands", "cmds", "ajuda"]
}    