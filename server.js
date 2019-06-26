var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime() + "<br>");
  res.write(req.url);

  var parsedURL = url.parse(req.url, true); // returns a URL object
  var q = parsedURL.query;  // returns an object: { year: 2017, month: 'february', day: 'Monday' }
  var txt = q.year + " " + q.month + " " + q.day;
  
  res.write("<br>"+txt);
  res.end();
}).listen(8766);