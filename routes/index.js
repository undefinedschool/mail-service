const express = require('express');
const cors = require('cors');
const sendEmail = require('../api/mail');

const router = express.Router();

router.all('*', cors());

router.get('/health', (req, res) => res.sendStatus(200));

router.get('/', (req, res) => {
  sendEmail();
  res.end();
});

module.exports = router;
