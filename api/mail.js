const sgMail = require('@sendgrid/mail');
const paymentBodyTemplate = require('./utils/bodyTemplate');

const { EMAIL_USER, SENDGRID_API_KEY } = process.env;

const mailOptions = payment => ({
  to: EMAIL_USER,
  from: EMAIL_USER,
  subject: `Pago recibido - ${payment.course}`,
  html: paymentBodyTemplate(payment)
});

const notifyPayment = (req, res) => {
  const email = mailOptions(req.body);
  sgMail.setApiKey(SENDGRID_API_KEY);

  sgMail
    .send(email)
    .then(response => {
      console.log(`Message sent succesfully :D \n`);
      console.log(response);
      res.status(200).send(response);
    })
    .catch(err => {
      console.error(err);

      if (err.response) {
        console.error(err.response.body);
        res.status(400).send('Message not sent :(');
      }
    });
};

module.exports = notifyPayment;
