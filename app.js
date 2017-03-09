var express = require('express');
var app = express();

app.use('/', express.static('demo'));

app.get('/', function(request, result) {
	result.sendFile('index.html', { root: 'demo' });
});

app.listen(3000, function () {
  console.log('up')
})