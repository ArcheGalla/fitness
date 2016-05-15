const nodemailer = require('nodemailer');
const emails = (require('./emails.json')).toString();
const email_template = require('./email_template');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: { user: "retinalviv@gmail.com", pass: "REtinaLViv02" }
});

module.exports.sendMessage = function (name, email, message) {
  var template = email_template(name, email, message);

  var mailOptions = {
    from: email,
    to: emails,
    subject: `from user`,
    text: message,
    html: template
  };

  return new Promise(function (resolve, reject) {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return reject(error);
      }

      return resolve(info);
    });
  });
};