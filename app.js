const express = require('express');
const app = express();
const MessageService = require('./service/MessageService');
const config = require('./app-config/config');


app.use(express.static('dist'));

app.post('message', function (req, res) {
  MessageService
    .sendMessage({})
    .then((status)=> {
      console.log('message send success');
      res.send(status);
    })
    .catch((err)=> {
      console.log('message send failed');
      res.send(err);
    });
});

app.listen(3000);