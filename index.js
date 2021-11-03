const http = require('http');
const fs = require('fs');
const port = 4444;


const server = http.createServer((req,res) =>{

    switch(true){
        case req.url === "/" && req.method === "GET":
            fs.readFile("./views/index.html", (err, file) => {
                res.setHeader('Conntent-Type', 'text/html');
                res.writeHead(200);
                res.end(file);
            });
        break;
        case req.url === "/filmek" && req.method === "GET":
            fs.readFile("./data/filmek.json", (err, file) => {
                res.setHeader('Conntent-Type', 'application/json');
                res.writeHead(200);
                res.end(file);
            });
        break;
        case req.url === "/tablazat" && req.method === "GET":
            fs.readFile("./public/tablazat.js", (err, file) => {
                res.setHeader('Conntent-Type', 'application/js');
                res.writeHead(200);
                res.end(file);
            });
        break;
        default:
            fs.readFile("./views/hiba.html", (err,file)=>{
                res.setHeader('content-Type', 'text/html;charset=UTF-8');
                res.writeHead(404);
                res.end(file);
            });
            break;

    }

})

server.listen(port);