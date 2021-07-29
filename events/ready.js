const {bot} = require('../index');
const config = require("../config.json");

bot.on("ready", async message => {
    console.log(`\n${bot.user.username} está online!`)
    bot.user.setActivity("hey gamers!", {type: "STREAMING", url:"https://discord.gg/KBHNPYh"});

//status

   let statuses = [
       `bot desenvolvido pela Francisca.105#8965`
   ]

   setInterval(function() {
       let status = statuses[Math.floor(Math.random() * statuses.length)];
       bot.user.setActivity(status, {type: "STREAMING", url:"https://discord.gg/KBHNPYh"});

   }, 2* 5000)



})
