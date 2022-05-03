var express = require('express');
var bodyParser = require('body-parser');
var axios = require('../.gitignore/node_modules/axios');
const { response } = require('express');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.json())

const alloy_username = process.env.ALLOY_USERNAME
const alloy_password = process.env.ALLOY_PASSWORD

let data = `${alloy_username}:${alloy_password}`;
let buff = new Buffer(data);
let base64data = buff.toString('base64');


const config = {
  headers: { Authorization: `Basic ${base64data}` }
};


app.post('/onboarding', function (req, res) {
  axios.post('https://sandbox.alloy.co/v1/evaluations', {
    ...req.body.payload
    }, config,
  ).then((response) => {
    console.log(response.data)
    res.send(
      {
        candidateOutcome: response.data.summary.outcome
      })
    }).catch(err => {console.log(err)})
});

app.listen((process.env.PORT || 3000), function() {
  console.log('listening on port ${process.env.PORT || 3000}!');
});
