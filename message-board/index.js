const express = require('express');
const messages = require('./public/database/messages');
const path = require('node:path')
const newMessageRouter = require('./routes/newMessage');
const PORT = 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));


app.get('/', (request, response)=>{
    response.render('allMessages', { messagesArray: messages.messages});
})

app.get('/messages/:user', (req, res) => {
    const userParam = req.params.user;
    const userMessages = messages.messages.filter(user => user.user === userParam);
    if (userMessages.length === 0) {
        res.render('error', { message: 'User not found' });
    } else {
        res.render('user', { user: userMessages[0] });
    }
});

app.post('/new', newMessageRouter);


app.listen(PORT, ()=>{
    console.log(`server listening on http://localhost:${PORT}...`)
})