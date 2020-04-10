const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njk3OTg2MDgxMjc0MjAwMDk0.Xo_jrg.WMGIVOEGD7qPhID7dUeeu8DC_Zk';

bot.on('ready', () =>{
    consol.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content === "HELLO"){
        msg.reply('HELLO FRIEND!');
    }
})

bot.login(process.env.BOT_TOKEN);
