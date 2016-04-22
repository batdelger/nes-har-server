(function(){

  var http = require('http');
  var fs = require('fs');
  var path = require('path');

  var argv = require('minimist')(process.argv.slice(2));

  var harFile = argv.har || 'test.har';
  
  console.log(path.resolve(harFile));

  http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.write('asdfasdfasd');
   res.end();
 }).listen(6789, function() {
  console.log("I'm listening on port: 6789");
  });
 
}).call(this);