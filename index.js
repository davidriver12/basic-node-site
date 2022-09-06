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