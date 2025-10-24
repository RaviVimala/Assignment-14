const express = require('express');
const Customer = require('../models/Customer');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Middleware for authentication
function auth(req, res, next) {
  const header = req.headers.authorization;
  if (header) {
    const token = header.split(' ')[1];
    jwt.verify(token, 'your_secret_key', (err, decoded) => {
      if (err) return res.status(403).json({ error: 'Invalid token' });
      req.userId = decoded.id;
      next();
    });
  } else {
    res.status(401).json({ error: 'No token provided' });
  }
}

router.post('/', auth, async (req, res) => {
  const customer = new Customer({ ...req.body, user: req.userId });
  await customer.save();
  res.json(customer);
});

router.get('/', auth, async (req, res) => {
  const customers = await Customer.find({ user: req.userId });
  res.json(customers);
});



module.exports = router;