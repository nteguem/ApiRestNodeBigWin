var express = require('express');
var router = express.Router();

// Require controller modules.
var country_controller = require('../../controllers/api/CountryStatisticCoronaController');


// GET request for one Country.
//router.get('/country/:countryname', country_controller.country_statistic());

router.get('/country/:country',country_controller.country_statistic);

module.exports = router;
