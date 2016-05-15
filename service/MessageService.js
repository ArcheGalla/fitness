const nodemailer = require('nodemailer');
const emails = (require('./emails.json')).toString();

var transporter = nodemailer.createTransport('SMTP', {
  service: "Gmail",
  auth: {
    user: "retinalviv@gmail.com",
    pass: "REtinaLViv02"
  }
});

module.exports.sendMessage = function (data) {
  // setup e-mail data with unicode symbols
  let mailOptions = {
    from: 'dev test',
    to: emails,
    subject: `from user`,
    text: `email message`
  };

  return new Promise(function (resolve, reject) {
    transporter.sendMail(mailOptions, function (error, info) {
      if (err) {
        return reject();
      }

      return resolve(info);
    });
  });
};