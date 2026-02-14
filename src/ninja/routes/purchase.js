const router = require('express').Router();

router.post('/ws/US/title/:title/!purchase', (request, response) => {
    response.json({
	"transaction_result": {
		"transaction_id": 1,
		"title_id": "0004000008B61400",
		"ticket_id": 1263790846613937,
		"post_balance": {
			"amount": "$90.00",
			"currency": "USD",
			"raw_value": "90"
		},
		"business_type": "NCL_DIST",
		"integrated_account": true
	}
});
});

module.exports = router;