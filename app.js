const express = require('express');
const app = express();
const MessageService = require('./service/MessageService');
const config = require('./app-config/config');
const bodyParser = require('body-parser');

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/message', function (req, res) {

  MessageService
    .sendMessage({
      name: req.body.name || 'err name',
      email: req.body.email || 'err email',
      message: req.body.message || 'err message'
    })
    .then((status)=> {
      res.send(status);
    })
    .catch((err)=> {
      res.send(err);
    });
});


app.listen(3000, ()=> {
  console.log('app is running on port 3000');
});