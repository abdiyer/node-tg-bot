const TelegaApi = require('node-telegram-bot-api')

const token = '5291290036:AAFbeCPZ_j3FkSi8xz-Qx1l9UMDjRCOV_1A'

const bot = new TelegaApi(token,{polling:true})

const chats ={}

const gameOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard:[
            [
                {text:"1", callback_data: "1"},{text:"1.1", callback_data: "1.1"},{text:"1.2", callback_data: "1.2"}
            ],
            [
                {text:"2", callback_data: "2"}
            ],
            [
                {text:"3", callback_data: "3"}
            ],
            [
                {text:"4", callback_data: "4"}
            ],
            [
                {text:"5", callback_data: "5"}
            ]
        ]
    })
}
const start = () => {
    bot.setMyCommands([
        {command : '/start', description : 'Привет, выбери криптовалюту, покажу сколбко это долларов сейчас за один токен'},
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
            await bot.sendMessage(chatId,"В общем игра началась, я загадал число от 1 до 9, угадай")
            const randomNumber = Math.floor(Math.random()*10)
            chats[chatId] = randomNumber
            return bot.sendMessage(chatId,"Отгадывай",gameOptions)
        }
        return bot.sendMessage(chatId,'Я вас не понял')
        
    })
    bot.on('callback_query',msg => {
        const data = msg.data
        const chatId = msg.message.chat.id
        bot.sendMessage(chatId, `Ты выбрал цифру ${data}`)
        console.log(msg)
    })
}

start()