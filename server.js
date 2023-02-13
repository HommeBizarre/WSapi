let fs = require('fs')
let http = require('http')
let server = http.createServer()

server.on('request', (request, response) => {
    console.log('Tentative de connection sur le site détécté')

    fs.readFile('frontEnd/index.html', (err, data) => {
        if (err) {
            response.writeHead(404)
            response.end("Ce fichier n'existe pas")
        } 
        
        response.writeHead(200, {
            'Content-type': 'text/html; charset=utf-8'
        })
        response.end(data)
    })
})

server.listen(8080)