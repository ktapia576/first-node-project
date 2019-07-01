var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer((req, res) => {
  var q = url.parse(req.url, true);   // Get URL object
  var filename = "." + q.pathname;    // Get filename from path in URL

  if(filename === './'){  // If no path specified in URL, send to index.html
    filename = './index.html';
  }

  fs.readFile(filename, (err, data) => {
    if (err) { 
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8766);