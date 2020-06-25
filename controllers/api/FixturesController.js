const dataFixtures = require('../../services/api/fixtures/exploreDataJsonService');

const getCountryWithDate = (req, res) => {
 
   let data = dataFixtures.getCountryGamesWithDate(req.params.date)
  res.send(data);
};

const getChampionshipWithCountry = (req, res) => {
  let data = dataFixtures.getChampionshipCountryWithDate(req.params.date,req.params.country)
 res.send(data);
};


const getFixturesMatchsWithLeague = (req, res) => {
  let data = dataFixtures.getFixturesChampionshipWithDate(req.params.date,req.params.country,req.params.league)
 res.send(data);
};


module.exports = {getCountryWithDate,getChampionshipWithCountry,getFixturesMatchsWithLeague};