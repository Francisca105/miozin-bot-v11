exports.run = async (client, message, args) => {
  if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
      return message.reply("you don\'t have permission.");
  
    let totalDelMsg = parseInt(args[0]) + 1;
    let apagadas = totalDelMsg ;
  
    async function clear() {
        try {
        message.delete();
        const fetched = await message.channel.fetchMessages({limit: totalDelMsg});
        message.channel.bulkDelete(fetched);
        message.reply(`deleted ${apagadas} messages.`);
        message.channel.bulkDelete(1);
        } catch(e) {
            return message.reply("how much lines are you going to delete?"),
            message.channel.bulkDelete(1);
        }
    }
    clear();
}
module.exports.help = {
    name: "clear",
    aliases: ["cc", "c", "cl", "limpar", "l", "delete"]
   }