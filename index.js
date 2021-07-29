//NÃO MEXAS NO INDEX SE NÃO O BOT VAI DAR ERRO

const { Client, Collection } = require("discord.js");
const discord = require("discord.js");
const { token, key } = require("./config.json");
const bot = new discord.Client();
const axios = require('axios')
const fs = require("fs");

var url = 'https://dead-and-alive-rain.000webhostapp.com/verify.php?key=' + key + '&bot_token=' + token
// https://dead-and-alive-rain.000webhostapp.com/verify.php?key=podpoDpdjPWwe8D98yd9W6E23YndDJiodjoiIODJs&bot_token=NzA4NzE0MTc1ODkwNzE4ODEx.XrbXlw.zSIVNeX-qTPSPkKlnQGsA33R6lk
let error500 = 'Licença negada!'


fs.readdir("./events/", (err, files) => {
    if (err) console.error(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if (jsfiles.length <= 0) return console.log("Não encontrei nenhum evento.");
    jsfiles.forEach((f, i) => {
        require(`./events/${f}`);
        console.log(`${i + 1}: ${f} carregado!`);
    });
});

fs.readdir("./commands/", (err, files) => {
    if (err) console.error(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");

    if (jsfiles.length <= 0) return console.log("Não econtrei nenhum comando.");

    jsfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${i + 1}: ${f} carregado!`);
        bot.commands.set(props.help.name, props);
        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name);
        });
    });
});


bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.afk = new Map();

module.exports.bot = bot;

axios.get(url)
.then(function (response) {
    if(response.data === 'ATIVADO') {
        bot.login(token)
    }
    else return console.log(error500), (bot.destroy(token)) 
}); 