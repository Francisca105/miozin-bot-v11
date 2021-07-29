const Discord = require('discord.js');
const Client = new Discord.Client();
module.exports.run = (client, message, args) => {
  if(!message.member.hasPermission('MANAGE_ROLES'))  return message.reply("you don't have permission!")
    if(!args[0]) return message.reply('I need a member and a role to give to that person!')
    if(!args[1]) return message.reply(`I need a role to give to ${args[0]}!`)

  var membro = message.mentions.members.first() || client.users.get(args[0]) || message.guild.members.find(a => a.user.username  === args[0])
  var role = message.guild.roles.find("name", args.slice(1).join(' ')) || message.mentions.roles.first() || message.guild.roles.find("id", args[1])
      if(!membro) return message.reply('I dind\'t find that member!')


  
      if(!role) return message.reply('I didn\'t find that role!')

  if(membro.roles.has(role)) return message.reply("the user already has that role.")
  
  let embed = new Discord.RichEmbed()
        .setTitle("Cargo Update")
        .setDescription(`${membro} is now <@&${role.id}> `)
        .setFooter(`${message.author.username} gave the role.`)
        .setColor(`#37d90f`)
        .setTimestamp();

  membro.addRole(role).then(
  message.reply(`The role was successfully added to that user!`).then(message.channel.send(embed))
  )};
  module.exports.help = {
    name: "addcargo",
    aliases: ["darcargo", "addrole", "darrole"]
   }
   