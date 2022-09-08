/*
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res){
    var q = url.parse(req.url, true);
    var filename = '.' + q.pathname + '.html';
    if (filename == './.html'){
        fs.readFile('index.html', function(err2, data2){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data2);
            return res.end();
        });
    } else {
    fs.readFile(filename, function(err, data){
        if (err) {
            const errorFile = fs.readFileSync("./404.html", "utf8");
            res.end(errorFile);
          } 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })}
}).listen(8080);
*/

const express = require('express');
const path = require('path')

const app = express();
const port = 8080;


app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/contact-me', function(req,res){
    res.sendFile(path.join(__dirname, '/contact-me.html'));
})

app.get('/about', function(req,res){
    res.sendFile(path.join(__dirname, '/about.html'));
})

app.all('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/404.html'));
})

app.listen(port);