const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njk4MzQ4Mjg0NjcwMTE1ODkz.XtI5uA.47OnzISdthCCcd4CTSsU4eygCBk';

bot.on('ready', () =>{
    consol.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content === "HELLO"){
        msg.reply('HELLO FRIEND!');
    }
})

bot.login(process.env.BOT_TOKEN);
