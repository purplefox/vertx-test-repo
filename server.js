load('vertx.js')

vertx.createHttpServer().requestHandler(function(req) {
  if (req.uri.indexOf("..") !== -1) {
    req.response.statusCode = 403
    req.response.end()
  } else {
    var file = req.uri === '/' ? "index.html" : req.uri
    req.response.sendFile(file)
  }
}).listen(8080)