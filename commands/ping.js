exports.run = async (client, message) => {
	const ms = await message.channel.send("Pong?");
	//message.channel.bulkDelete(1);
	const clientms = ms.createdTimestamp - message.createdTimestamp;
	ms.edit('📡 My normal ping is: ' + clientms + 'ms / 🖥 My ping here is: ' + Math.round(client.ping) + 'ms');
}
module.exports.help = {
    name: "ping",
    aliases: ["pong"]
   }
