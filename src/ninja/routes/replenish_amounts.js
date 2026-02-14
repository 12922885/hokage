const router = require('express').Router();

router.get('/ws/country/US/replenish_amounts', (request, response) => {
    response.json({"error": {"code": "9012", "message": "The credit card menu isn't developed yet!"}});
});

module.exports = router;