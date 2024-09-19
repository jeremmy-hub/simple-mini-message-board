const {Router} = require('express');
const messages = require('../public/database/messages');
const newMessageRouter = Router();
createNewMessage = require('../controllers/createNewMessage');
const appendMessage = require('../controllers/writeNewData');





newMessageRouter.use('/', (request, response, next)=>{
    
    try{
        const data = request.body
        if(data.username == ''){throw new Error('username cant be empty')}
        if(data.text == ''){throw new Error('text cant be empty')}
        const newData = createNewMessage(data.username, data.text);
    
        appendMessage('../public/database/messages.js', newData);}
    catch (error){
        console.error(error);
    }    
    response.redirect('/');
    
})

module.exports = newMessageRouter;