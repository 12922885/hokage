const router = require('express').Router();

router.get('/ws/:country/titles/online_prices', (request, response) => {
	let { title: titleIds } = request.query;
	const prices = [];

	// Express marks the query param as an array but it just puts the full string as one value
	// Need to manually split the IDs
	titleIds = titleIds[0].split(',');

	// Just mark every title as free, we don't charge money here
	for (const titleId of titleIds) {
		prices.push({
			title_id:  500100,
			eshop_sales_status: 'onsale',
			price: {
				regular_price: {
					amount: '$10.00',
					currency: 'USD',
					raw_value: '10',
					id: 2172116800
				}
			},
			title_owned: false
		});
	}
  response.set({
    'vary': 'cookie',
	'Content-Type': 'application/json',
	'X-Frame-Options': 'DENY',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'same-origin',
	'Cross-Origin-Opener-Policy': 'same-origin'
  })

	response.json({
		"online_prices":
		 {"online_price": prices
		}
	});
});

module.exports = router;