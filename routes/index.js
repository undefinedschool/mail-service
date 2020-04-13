const express = require('express');
const cors = require('cors');
const sendReceivedPaymentEmail = require('../api/mail');

const router = express.Router();

router.all('*', cors());

router.get('/health', (req, res) => res.sendStatus(200));

router.post('/payments', (req, res) => {
  sendReceivedPaymentEmail(req.body);
  res.json(req.body);
});

module.exports = router;
