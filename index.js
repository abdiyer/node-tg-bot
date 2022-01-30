const TelegaApi = require('node-telegram-bot-api')

const token = '5291290036:AAFbeCPZ_j3FkSi8xz-Qx1l9UMDjRCOV_1A'

const bot = new TelegaApi(token,{polling:true})

bot.on('message', msg => {
    const text = msg.text
    const chatId = msg.chatId
    console.log(text,chatId)
})