const fs = require('fs');


let restructuredDataApi = () => {

    let data = fs.readFileSync('../../../rencontrefootball20-06-2020.json');
    let rawdata = JSON.parse(data);
    let fixtures = rawdata.api.fixtures;
    let football = {
        results: rawdata.api.results,
        country: []
    };
    fixtures.forEach(function (item) {

        if (football.country.map(function (e) { return e.name; }).indexOf(item.league.country) === -1) {

            let championship = [];
            fixtures.forEach(function (itemleague) {

                if (itemleague.league.country == item.league.country && championship.map(function (e) { return e.name; }).indexOf(itemleague.league.name) === -1) 
                {
                    let matchs = [];
                
                    fixtures.forEach(function (itemmatch) {

                        if (itemmatch.league_id === itemleague.league_id) {
                            matchs.push({"homeTeam":itemmatch.homeTeam,"awayTeam":itemmatch.awayTeam,"event_date":itemmatch.event_date,"stadium":itemmatch.venue,"day saison":itemmatch.round})
                        }
                    });

                    championship.push({ "name": itemleague.league.name, "logo": itemleague.league.logo,"leagueid":itemleague.league_id, matchs });

                }
            })
            football.country.push({ "name": item.league.country, "flag": item.league.flag, championship });
        }
    })


    fs.writeFile('./datatest1.json', JSON.stringify(football, null, 4), (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
}

restructuredDataApi();