var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(process.env.PORT || 8080, () => console.log('node app running'))


app.post('/api', function(req, res){
    //console.log('body: ' + JSON.stringify(req.body));
	res.send(req.body);
});