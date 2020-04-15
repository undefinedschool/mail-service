const express = require('express');
const cors = require('cors');
const notifyPayment = require('../api/mail');

const router = express.Router();

router.all('*', cors());

router.get('/health', (req, res) => res.sendStatus(200));

router
  .route('/payments')
  .head((req, res) => res.sendStatus(200))
  .post((req, res) => {
    notifyPayment(req.body);
    res.json(req.body);
  });

module.exports = router;
