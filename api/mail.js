const nodemailer = require('nodemailer');
const paymentBodyTemplate = require('./utils/bodyTemplate');

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

const mailOptions = payment => ({
  from: EMAIL_USER,
  to: EMAIL_USER,
  subject: `${payment.course} - Pago recibido`,
  html: paymentBodyTemplate(payment)
});

function sendReceivedPaymentEmail(payment) {
  transport.sendMail(mailOptions(payment), (err, info) => {
    if (err) {
      return console.error(err);
    }

    console.log('Message sent: %s', info.response);
  });
}

module.exports = sendReceivedPaymentEmail;
