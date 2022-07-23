const router = require("express").Router();

router.get('/', function(req, res) {
    res.send('Auth home page');
});

module.exports = router;