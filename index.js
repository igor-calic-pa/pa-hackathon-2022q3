// import * as dotenv from 'dotenv'
// dotenv.config()

import express from 'express';


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();


const serveStatic = express.static('public')

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(serveStatic);

app.get('*', (request, response) => {
    response.render('index', {
        agentId: process.env.AGENT_ID,
        chatTitle: process.env.CHAT_TITLE,
        botMessage: process.env.BOT_MESSAGE,
        buttonTitleBarColor: process.env.BUTTON_TITLE_BAR_COLOR,
        chatBgColor: process.env.CHAT_BG_COLOR,
        fontColor: process.env.FONT_COLOR,
        sendIcon: process.env.SEND_ICON,
        userMessage: process.env.USER_MESSAGE,
    });
});

/*
            --df-messenger-button-titlebar-color: #df9b56;
            --df-messenger-chat-background-color: #fafafa;
            --df-messenger-font-color: white;
            --df-messenger-send-icon: #878fac;
            --df-messenger-user-message: #479b3d;

 */
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);