const dataFixtures = require('../../services/api/fixtures/exploreDataJsonService');

const getCountryWithDate = (req, res) => {
 
   let data = dataFixtures.getCountryGamesWithDate(req.params.date)
  res.send(data);
};

module.exports = {getCountryWithDate};