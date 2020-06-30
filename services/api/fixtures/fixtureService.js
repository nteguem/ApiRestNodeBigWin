const axios = require("axios");
const fs = require('fs');
const date = require('../../../utils/variables/Date/Date');

let parameters = (param) => {
  const config = {
    "method": "GET",
    "url": `https://api-football-v1.p.rapidapi.com/v2/fixtures/date/${param}`,
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      "x-rapidapi-key": "16b32ecd4amsh5afccc14b27dd33p1d211bjsna09e6f4252f1"
    }, "query": {
      "timezone": "Europe%2FLondon"
    }
  }
return config;
}

let getFixtureToday = () => {
  return axios(parameters(date.getCurrentDate('-')))
    .then((response) => {
      return response.data;

    });
}

let getFixtureTomorrow = () => {

  return axios(parameters(date.getTomorrowDate('-')))
    .then((response) => {
      return response.data;

    });
}

let getFixtureTwoDayAfter = () => {
 
  return axios(parameters(date.get2DayAfterDate('-')))
    .then((response) => {
      return response.data;

    });
}

let restructuredDataApi = (dataApi) => {

  let fixtures = dataApi.api.fixtures;
  let football = {
    results: dataApi.api.results,
    country: []
  };
  fixtures.forEach(function (item) {

    if (football.country.map(function (e) { return e.name; }).indexOf(item.league.country) === -1) {

      let championship = [];
      fixtures.forEach(function (itemleague) {

        if (itemleague.league.country == item.league.country && championship.map(function (e) { return e.name; }).indexOf(itemleague.league.name) === -1) {
          let matchs = [];

          fixtures.forEach(function (itemmatch) {

            if (itemmatch.league_id === itemleague.league_id) {
              matchs.push({ "homeTeam": itemmatch.homeTeam, "awayTeam": itemmatch.awayTeam, "event_date": itemmatch.event_date.substring(11, 16), "stadium": itemmatch.venue, "day saison": itemmatch.round,"statuts":itemmatch.status })
            }
          });

          championship.push({ "name": itemleague.league.name, "logo": itemleague.league.logo, "leagueid": itemleague.league_id, matchs });

        }
      })
      football.country.push({ "name": item.league.country, "flag": item.league.flag, championship });
    }
  })

return football;
}

let writeFixturesDataInFiles = () => {

  getFixtureToday().then(data => {
    let datatoday = restructuredDataApi(data);
    fs.writeFile('./storage/json/fixtures/todayFixturesApi.json', JSON.stringify(datatoday, null, 4), (err) => {
      if (err) throw err;
      console.log('Data today written to file');
    });
  })
  getFixtureTomorrow().then(data => {
    let datatomorrow = restructuredDataApi(data);
    fs.writeFile('./storage/json/fixtures/tomorrowFixturesApi.json', JSON.stringify(datatomorrow, null, 4), (err) => {
      if (err) throw err;
      console.log('Data tomorrow today written to file');
    });
  })

  getFixtureTwoDayAfter().then(data => {
    let datatwodayafter = restructuredDataApi(data);
    fs.writeFile('./storage/json/fixtures/twoDayAfterFixturesApi.json', JSON.stringify(datatwodayafter, null, 4), (err) => {
      if (err) throw err;
      console.log('Data two day after written to file');
    });
  })

}


module.exports.writeFixturesDataInFiles = writeFixturesDataInFiles;



