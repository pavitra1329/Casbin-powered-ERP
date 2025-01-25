const express = require('express');
const router = express.Router();

router.post('/marriage/register', (req, res) => {
    res.send('Marriage Registration logic');
});

module.exports = router;
