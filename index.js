const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (req, res) {
  const q = url.parse(req.url, true);
  var filename =(q.pathname =="/") ?  "./index.html":  "." + q.pathname + '.html' ;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return fs.readFile("./404.html", (err, file) => {
        if (err) {
            throw err;
        } else {
            res.write(file);
            return res.end();
        }
      });
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    }
  });
}).listen(8080); 