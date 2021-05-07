var path    = require('path')
var express = require('express') // require('/usr/local/lib/node_modules/express/')
var app     = express()
var port    = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, '/')))

app.get('/', function (req, res) {
	
  res.sendFile(__dirname + '/index.html');
  
})

app.listen(port)

console.log(`Running at port ${port}`)
