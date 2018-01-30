"use strict";

const http = require('http');
const fs = require('fs');
const PORT = 8000;

function handleRequest(req, res){
    var body;
    switch (req.url){
        case "/":
        case "/openhouse.html":
            res.end(fs.readFileSync('public/openhouse.html'));
            break;
        case "/openhouse.css":
            res.end(fs.readFileSync('public/openhouse.css'));
            break;
        case "/openhouse.js":
            res.end(fs.readFileSync('public/openhouse.js'));
            break;
        default:
            res.statusCode = 404;
            res.end('not found');
    }

    res.end(body);
}

var server = http.createServer(handleRequest);
server.listen(PORT, function() {
    console.log("Listening on port " + PORT);
});