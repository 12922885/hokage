const router = require('express').Router();

router.get('/ws/my/tax_location', (request, response) => {
    response.json({"tax_location": {"postal_code": "444", "state": "44", "city": "WOW", "county": "pretendo", "id": 44917}});
});

module.exports = router;
// This is only really needed for US nnids as the US eShop requests this when purchasing titles
