const TelegaApi = require('node-telegram-bot-api')

const token = '5291290036:AAFbeCPZ_j3FkSi8xz-Qx1l9UMDjRCOV_1A'

const bot = new TelegaApi(token,{polling:true})

bot.setMyCommands([
    {command : '/start', description : 'Привет, выбери криптовалюту, покажу сколбко это долларов сейчас за один токен'},
    {command : '/showTokens', description : 'Показать топ криптовалют'}
])

bot.on('message', msg => {
    const text = msg.text
    const chatId = msg.chat.id
    if(text =='/start'){
        bot.sendMessage(chatId,"Добро пожаловать")
    }
})