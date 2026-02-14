const router = require('express').Router();

// Main eShop screen layout
router.get('/ws/:region/directories', (request, response) => {
	response.json({
		directories: {
			directory: [
				{
					alias: '60043C3FA22E5D8D3D98D0DADA2B083E',
					banner_url: 'https://i.imgur.com/tbZsSVb.jpg',
					icon_url: 'https://i.imgur.com/dINB9cQ.jpg',
					icon_height: '96',
					icon_width: '128',
					id: 1234567,
					index: 1,
					name: 'RetroArch',
					new: false,
					standard: false,
					type: 'normal'
				}
			],
			length: 1,
			catalog_id: 12345
		}
	});
});

// title bundle
router.get('/ws/:region/directory/:id', (request, response) => {
	titleIds = "0004000008B61400"[0].split(',');

	response.json({
		directory: {
			alias: '60043C3FA22E5D8D3D98D0DADA2B083E',
			component: 'title',
			banner_url: 'https://i.imgur.com/tbZsSVb.jpg',
			icon_url: 'https://i.imgur.com/dINB9cQ.jpg',
			icon_height: '96',
			icon_width: '128',
			id: 1234567,
			name: 'RetroArch',
			type: 'normal',
			contents: {
				content: [
					{
						"title": {
						"platform": {
							"name": "3DS",
							"id": 4,
							"device": "CTR",
							"category": 2
						},
						"publisher": {
							"name": "Pretendo",
							"id": 11
						},
						"display_genre": "test",
						"rating_info": {
							"rating_system": [{
								"name": "ESRB",
								"id": 202
							}]
						},
						"rating": {
							"icons": [{
								"icon": {
									"url": "https://kanzashi-ctr.cdn.nintendo.net/i/d96122dbb89250582816a67461bf8080f030402720e46032980582bca516778d.jpg",
									"type": "normal"
								}
							}, {
								"url": "https://kanzashi-ctr.cdn.nintendo.net/i/2d2bc9f60a5a4dbf44175cf1cfe1adc52abbee7ad66ebd6e3978966f84ae9c58.jpg",
								"type": "small"
							}],
							"name": "E",
							"age": 6,
							"id": 2
						},
						"descriptors": {
							"descriptor": [{
								"name": "Test Esrb desc 1"
							}, {
								"name": "Test Esrb desc 2"
							}]
						},
						"release_date_on_eshop": "2026-02-10",
						"retail_sales": true,
						"eshop_sales": true,
						"demo_available": false,
						"aoc_available": false,
						"in_app_purchase": false,
						"release_date_on_original": "2026-02-10",
						"name": "title",
						"id": 500100,
						"product_code": "CTR-P-ASLE",
						"icon_url": "None",
						"banner_url": "None",
						"new": true
					},
				},
				],
				total: 1
			}
		}
	});
});

module.exports = router;