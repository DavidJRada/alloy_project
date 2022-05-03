var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
const { response } = require('express');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.json())

let data = 'Insert Token';
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

app.listen([process.env.PORT || 3000], function() {
  console.log('listening on port 3000!');
});
