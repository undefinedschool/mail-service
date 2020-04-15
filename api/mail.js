const mailjet = require('node-mailjet');
const paymentBodyTemplate = require('./utils/bodyTemplate');

const { EMAIL_USER, API_KEY, SECRET_KEY, SERVICE_NAME } = process.env;

const mailOptions = payment => ({
  FromEmail: EMAIL_USER,
  FromName: SERVICE_NAME,
  to: EMAIL_USER,
  Recipients: [{ Email: EMAIL_USER }],
  Subject: `${payment.course} - Pago recibido`,
  'Html-part': paymentBodyTemplate(payment)
});

const notifyPayment = payment =>
  mailjet
    .connect(API_KEY, SECRET_KEY)
    .post('send', { version: 'v3' })
    .request(JSON.stringify(mailOptions(payment)))
    .then(res => console.log(res.body))
    .catch(err => console.error(err.statusCode));

module.exports = notifyPayment;
