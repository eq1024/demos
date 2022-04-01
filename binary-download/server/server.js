const http = require("http")
const fs = require("fs")
const path =require("path")

const server = http.createServer((req, res) => {
    if (req.url === "/d") {
        res.writeHead(200, {
            "Content-type": "image/jpeg",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "content-type"
        })
        fs.readFile(path.join(__dirname,"../fun.jpg"), (err, data) => {
            res.end(data)
            console.log(data);
        })
    }
    if (req.url === "/") {
        res.writeHead(200, {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "content-type"
        })
        res.end("ok")
    }
})
server.listen(3000)
console.log("server run at 3000")