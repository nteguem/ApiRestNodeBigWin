var express = require('express');
var router = express.Router();

// Require controller modules.
var fixtures_controller = require('../../controllers/api/FixturesController');



router.get("/:date",fixtures_controller.getCountryWithDate);

module.exports = router;
