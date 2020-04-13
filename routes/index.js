const express = require('express');
const cors = require('cors');
const notifyPayment = require('../api/mail');
const CORS_OPTIONS = require('../cors/utils');

const router = express.Router();

router.use(cors(CORS_OPTIONS));

router.get('/health', (req, res) => res.sendStatus(200));

router.post('/payments', (req, res) => {
  notifyPayment(req.body);
  res.json(req.body);
});

module.exports = router;
