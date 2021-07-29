exports.run = (client, message, [mention, ...reason]) => {
    if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("you don\'t have permission.");    
    message.channel.bulkDelete(1);

    if (message.mentions.members.size === 0)
      return message.reply("I need a person to kick.");   
      message.channel.bulkDelete(1); 
  
    const kickMember = message.mentions.members.first();
  if(!kickMember.kickable) return message.reply('I can\'t kick that user.')
    kickMember.kick(reason.join(" ")).then(member => {
      message.reply(` ${member.user.username} kicked successfully.`);
      message.channel.bulkDelete(2);
    });
  };
  module.exports.help = {
    name: "kick",
    aliases: ["kickar"]
   }