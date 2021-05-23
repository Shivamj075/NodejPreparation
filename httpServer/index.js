const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url=="/"){
        res.end("Hello from oher sider");
    }
    else if(req.url=="/contact"){
        res.end("Hello from contact page");
    }
    else{
        res.writeHead(404, {"content-type": "text/html"});  //for mention type of doc and status code
        res.end("<h1> 404 error page not found </h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to port no 8000");
});