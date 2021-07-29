const { prefix } = require("../config.json");
const fs = require('fs')
const {bot} = require('../index');
const config = require("../config.json");
const discord = require('discord.js')
bot.on("message", async message => {
  if(message.author.bot || message.channel.type === "dm") return;


    //Resposta a menção
    let menE = new discord.RichEmbed()
    .setAuthor('Olá ' + message.author.username + '!', bot.user.avatarURL, 'https://ptero.fhost.xyz/')
    .setDescription(`Eu sou a` + bot.user.username + `, desenvolvida pela Francisca.105#8965! O meu prefixo é \`${prefix}\`, podes ver os meus comandos digitando: \`${prefix}ajuda\`.`)
    .setFooter('Bot desenvolvido pela Francisca.105#8965')
    .setColor('RANDOM')

    let mention = [`<@${bot.user.id}>`, `<@!${bot.user.id}>`];
    mention.find(mention => {
      if (message.content === mention) {
        message.channel.send(menE)
         }})

    //Comandos
    

    let prefixo = prefix;
    let args = message.content.slice(prefixo.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    if(!message.content.startsWith(prefixo)) return;
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))
    if(commandfile) commandfile.run(bot, message, args)


})