var http = require('http')

var server = http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  //   console.log('Salam')
  res.end(JSON.stringify({ name: 'Ali Mousavi' }))
})

server.listen(3000)
