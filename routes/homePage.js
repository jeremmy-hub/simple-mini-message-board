const {Router} = require('express');
const homeRoute =  Router();

homeRoute.get('/', (request, response)=>{
    response.render('homePage');
})

module.exports = homeRoute;