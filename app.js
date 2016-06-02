'use strict';

const express = require('express');
const app = express();
const MessageService = require('./service/MessageService');
const config = require('./app-config/config');
const bodyParser = require('body-parser');
const port = require('./app-config/env');

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/message', function (req, res) {
  var name = req.body.name || 'err name';
  var email = req.body.email || 'err email';
  var message = req.body.message || 'err message';

  MessageService
    .sendMessage(name, email, message)
    .then((status)=> {
      res.send(status);
    })
    .catch((err)=> {
      res.send(err);
    });
});


app.listen(port(process.env.NODE_ENV), ()=> {
  console.log(`app is running on port ${port(process.env.NODE_ENV)}`);
});
