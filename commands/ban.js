exports.run = (client, message, [mention, ...reason]) => {
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("you don\'t have permission.");
        //message.channel.bulkDelete(1);
    if (message.mentions.members.size === 0) return message.reply("mention someone to ban.");
    message.channel.bulkDelete(1);
    
    const BanMember = message.mentions.members.first();

        BanMember.ban(reason.join(" ")).then(member => {
            message.reply(`✔️ ${member.user.username} banned.`);
            message.channel.bulkDelete(2);
            
          });
        };
    module.exports.help = {
        name: "ban",
        aliases: ["banir"]
   }