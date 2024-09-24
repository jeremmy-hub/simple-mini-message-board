const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;
const path = require('node:path')
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.use(express.static(path.join(__dirname ,'public')));
server.use(express.urlencoded({extended: true}))
const homeRouter = require('./routes/homePage');
const authenticator = require('./controllers/authenticator');


server.get('/', homeRouter);
server.post('/login', authenticator);

//put the ser(ver on listening state
server.listen(PORT, ()=>{
    console.log(`simple server listening on socket http://localhost:${PORT}`);
}) 