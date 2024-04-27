const TelegramBot = require('node-telegram-bot-api');

const token = '7076802732:AAH_592tKXfMmQgEgWQzRAek5VplM7eLtcI';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id
    console.log(msg.chat.first_name + msg.chat.last_name);

    if (msg.text === "/start") {
        bot.sendMessage(chatId, "Salom " + msg.chat.first_name + " botimizga xush kelibsiz!");
    }else if(msg.text === "/help"){
        bot.sendMessage(chatId, "Sizga qanday yordam bera olaman!");
    }else{
        bot.sendMessage(chatId, msg.chat.first_name + " Xato kiritdingiz");
        bot.sendMessage(chatId, "Tushunmasangiz /help so'zini jo'nating");
    }
});