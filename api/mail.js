const nodemailer = require('nodemailer');

const { SMTP_HOST, SMTP_PORT, EMAIL_USER, EMAIL_PASS } = process.env;

const transport = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});

const mailOptions = {
  from: EMAIL_USER,
  to: EMAIL_USER,
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

function sendEmail() {
  transport.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.error(err);
    }

    console.log('Message sent: %s', info.response);
  });
}

module.exports = sendEmail;
