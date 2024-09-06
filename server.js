const http = require('http');
const fs = require('fs/promises');

async function getHome (url) {
    try {
        if(url=='/')(url='/home');
        else if (!['/home', '/about', '/contact'].includes(url)){
            url = '/404'
        }
        const home = await fs.readFile(`.${url}.html`, 'utf-8');
        return home;
    }
    catch (error){
        console.log(error);
    }
}
const server = http.createServer((req, res)=>{
    res.writeHead(200, 'OK', {'Content-type' : 'text/html','connection':'open'});
    let data = getHome(req.url).then((data)=>{
        res.end(data);
    });
    console.log(req.url);
})

server.listen('3000', ()=>{
    console.log('listening on port 3000');
    setTimeout(()=>{
        server.close();
    },250000)
})
