module.exports = {
     gameOptions : {
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
    },
    againOptions : {
        reply_markup: JSON.stringify({
            inline_keyboard:[
                [
                    {text:"Сыграть еще раз", callback_data: "/again"}
                ]
            ]
        })
    }
}