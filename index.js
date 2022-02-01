'use strict'
import TelegaApi from 'node-telegram-bot-api'

import fetch from 'node-fetch';

// const {gameOptions, againOptions} = require('./options.js')

const token = 'чо там'

const bot = new TelegaApi(token,{polling:true})



const checker = ''

const chats ={}
    bot.setMyCommands([
            {command : '/start', description : 'Начать'},
            {command : '/choose', description : 'Показать топ криптовалют'}
        ])

    bot.on('message', (msg) => {
        const text = msg.text
        if(text == '/start'){
            bot.sendMessage(msg.chat.id, `Привет, ${msg.from.first_name}! Я тут чтоб помочь с курсом крипты. Выбери какая тебе нужна с помощью команды /choose`)
        }
        if(text == '/choose'){
            bot.sendMessage(msg.chat.id, 'Выбери крипту, какая нужна',
            {
                reply_markup: JSON.stringify({
                    inline_keyboard:[
                        [
                            {text:"bitcoin", callback_data: "0"}
                        ],
                        [
                            {text:"etherium", callback_data: "1"}
                        ],
                        [
                            {text:"tether", callback_data: "2"}
                        ],
                        [
                            {text:"binance coin", callback_data: "3"}
                        ],
                        [
                            {text:"cordano", callback_data: "4"}
                        ],
                        [
                            {text:"solana", callback_data: "5"}
                        ]
                    ]
                })
            }
            ) 
        }
        });
    bot.on('callback_query', async (msg) => {
        const data = msg.data
        const response = await fetch('https://blockchain.info/ticker');
        const dataOfCoins = await response.json();
        if(data == 0){
            bot.sendMessage(msg.message.chat.id,`${dataOfCoins.USD.last}$`)
        }
        if(data == 1){
            bot.sendMessage(msg.message.chat.id,`${dataOfCoins.HKD.last}$`)
        }
        if(data == 2){
            bot.sendMessage(msg.message.chat.id,`${dataOfCoins.RUB.last}$`)
        }
        if(data == 3){
            bot.sendMessage(msg.message.chat.id,`${dataOfCoins.GBP.last}$`)
        }
        if(data == 4){
            bot.sendMessage(msg.message.chat.id,`${dataOfCoins.HRK.last}$`)
        }
        if(data == 5){
            bot.sendMessage(msg.message.chat.id,`${dataOfCoins.HUF.last}$`)
        }
    })


// const startGame = async (chatId) =>{
//             await bot.sendMessage(chatId,"В общем игра началась, я загадал число от 1 до 7, угадай")
//             const randomNumber = Math.floor(Math.random()*7)
//             chats[chatId] = randomNumber
//             await bot.sendMessage(chatId,"Отгадывай",gameOptions)
// }

// const start = () => {
//     bot.setMyCommands([
//         {command : '/start', description : 'Начать'},
//         {command : '/choose', description : 'Показать топ криптовалют'},
//         {command : '/game', description : 'Игра отгадай число'}
//     ])

//     bot.on('message', (msg) => {
//         const text = msg.text
//         if(text == '/start'){
//             bot.sendMessage(msg.chat.id, "Привет, я тут чтобы подсказать курс крипты, выбери команду /choose чтобы получить список ")
//         }
//         });
    
    // bot.on('message', async msg => {
    //     const text = msg.text
    //     const chatId = msg.chat.id
    //     if(text =='/start'){
    //        return bot.sendMessage(chatId,"Добро пожаловать")
    //     }
    //     if(text =='/choose'){
    //         return bot.sendMessage(chatId,"Список топов")
    //     }
    //     if(text =='/game'){
    //         return startGame(chatId)
    //     }
    //     return bot.sendMessage(chatId,'Я вас не понял')
        
    // })
    // bot.on('callback_query', async msg => {
    //     const data = msg.data
    //     const chatId = msg.message.chat.id
    //     if(data === '/again'){
    //         return startGame(chatId)
    //     }
    //     if(data === chats[chatId]){
    //         return await bot.sendMessage(chatId, "Ты угадал!",againOptions)
    //     }
    //     else{
    //         return await bot.sendMessage(chatId, `Не угадал, бот загадал ${chats[chatId]}`,againOptions)
    //     }
    // })
// }

// start()
