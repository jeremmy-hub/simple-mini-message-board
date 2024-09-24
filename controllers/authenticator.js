function authenticator(req, res){
    const { username, userPassword} = req.body;
    console.log(req.body);

    if (username === 'admin' && userPassword==='loginAdmin'){
        res.send('success')
    }
    else {
        res.send('Forbidden authentication failed');
    }
}


module.exports = authenticator;