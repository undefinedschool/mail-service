const nodemailer = require('nodemailer');
const paymentBodyTemplate = require('./utils/bodyTemplate');

const { EMAIL_USER, CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } = process.env;

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: EMAIL_USER,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN
  }
});

const mailOptions = payment => ({
  from: EMAIL_USER,
  to: EMAIL_USER,
  subject: `${payment.course} - Pago recibido`,
  html: paymentBodyTemplate(payment)
});

const notifyPayment = payment =>
  transport.sendMail(mailOptions(payment), (err, info) => {
    if (err) {
      return console.error(err);
    }

    console.log('Message sent: %s', info.response);
  });

module.exports = notifyPayment;
