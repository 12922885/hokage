const router = require('express').Router();

router.get('/ws/:country/title/:title/prepurchase_info', (request, response) => {
    response.json({"prepurchase_info":{"tax_excluded":false,"purchasing_content":[{"eshop_sales_status":"onsale","content_size":4808,"payment_amount":{"price":{"regular_price":{"amount":"$10.00","currency":"USD","raw_value":"10","id":2172116800}},"total_amount":{"amount":"$10.00","currency":"USD","raw_value":"10"}}}],"current_balance":{"amount":"$100.00","currency":"USD","raw_value":"100"},"post_balance":{"amount":"$90.00","currency":"USD","raw_value":"90"},"total_amount":{"price":{"regular_price":{"amount":"$10.00","currency":"USD","raw_value":"10"}},"total_amount":{"amount":"$10.00","currency":"USD","raw_value":"10"}}}});
});

module.exports = router;