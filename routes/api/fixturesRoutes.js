var express = require('express');
var router = express.Router();

// Require controller modules.
var fixtures_controller = require('../../controllers/api/FixturesController');



router.get("/countrygames/:date",fixtures_controller.getCountryWithDate);
router.get("/championships/:date/:country",fixtures_controller.getChampionshipWithCountry);
router.get("/matchsleague/:date/:country/:league",fixtures_controller.getFixturesMatchsWithLeague);

module.exports = router;
