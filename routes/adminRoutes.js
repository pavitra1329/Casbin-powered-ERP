const express = require('express');
const { createRole, createPolicy, createUser } = require('../controllers/adminController');
const router = express.Router();

router.post('/create-role', createRole);
router.post('/create-policy', createPolicy);
router.post('/create-user', createUser);

module.exports = router;
