const router = require('express').Router();

router.get('/ws/:region/title/:title/ec_info', (request, response) => {
	response.json({
		title_ec_info: {
			title_id: "0004000008B61400",
			content_size: 1030080,
			title_version: 1040,
			disable_download: false,
			content_lock: {
				seed_published: true,
				external_seed: 'abcdefghijklmnopqrstuvwxyz012345'
			}
		}
	});
});

module.exports = router;