const TelegaApi = require('node-telegram-bot-api')

const {gameOptions, againOptions} = require('./options.js')

const token = '5291290036:AAFbeCPZ_j3FkSi8xz-Qx1l9UMDjRCOV_1A'

const bot = new TelegaApi(token,{polling:true})

const checker = ''

const chats ={}

const startGame = async (chatId) =>{
            await bot.sendMessage(chatId,"В общем игра началась, я загадал число от 1 до 7, угадай")
            const randomNumber = Math.floor(Math.random()*7)
            chats[chatId] = randomNumber
            await bot.sendMessage(chatId,"Отгадывай",gameOptions)
}

const start = () => {
    bot.setMyCommands([
        {command : '/start', description : 'Привет, выбери криптовалюту, покажу сколько это долларов сейчас за один токен'},
        {command : '/choose', description : 'Показать топ криптовалют'},
        {command : '/game', description : 'Игра отгадай число'}
    ])
    
    bot.on('message', async msg => {
        const text = msg.text
        const chatId = msg.chat.id
        if(text =='/start'){
           return bot.sendMessage(chatId,"Добро пожаловать")
        }
        if(text =='/choose'){
            return bot.sendMessage(chatId,"Список топов")
        }
        if(text =='/game'){
            return startGame(chatId)
        }
        return bot.sendMessage(chatId,'Я вас не понял')
        
    })
    bot.on('callback_query', async msg => {
        const data = msg.data
        const chatId = msg.message.chat.id
        if(data === '/again'){
            return startGame(chatId)
        }
        if(data === chats[chatId]){
            return await bot.sendMessage(chatId, "Ты угадал!",againOptions)
        }
        else{
            return await bot.sendMessage(chatId, `Не угадал, бот загадал ${chats[chatId]}`,againOptions)
        }
    })
}

start()