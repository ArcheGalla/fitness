const nodemailer = require('nodemailer');
const emails = (require('./emails.json')).toString();

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: "retinalviv@gmail.com",
    pass: "REtinaLViv02"
  }
});

module.exports.sendMessage = function (data) {
  var mailOptions = {
    from: `dev test`,
    to: emails,
    subject: `from user`,
    text: `email message`,
    html: `
    <div>
      <h2>This is html message</h2>
      <h3>This is html message</h3>
    </div>
    `
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