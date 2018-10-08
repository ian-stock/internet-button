const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const request = require('request')

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(process.env.PORT || 8080, () => console.log('node app running'))


app.post('/api', function(req, res){
    var msurl = 'http://particlephotonintegration-txek.us-e2.cloudhub.io/eventpub';
    request({
        url: msurl,
        method: "POST",
        json: req.body
    }, function (error, response, body){
        if (!error && response.statusCode === 200) {
            console.log(body)
        }
        else {
            console.log("error: " + error)
            console.log("response.statusCode: " + response.statusCode)
            console.log("response.statusText: " + response.statusText)
        }
    });
    //console.log('body: ' + JSON.stringify(req.body));
    res.send(req.body);
});