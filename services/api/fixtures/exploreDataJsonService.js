const fs = require('fs');
const dates = require('../../../utils/variables/Date/Date');

let extractCountryInJson= (path) => {

    try {
        let data = fs.readFileSync(path);
        let rawdata = JSON.parse(data);
        let country = rawdata.country;
        let countrys = { country: [] };
        country.forEach(function (item) {
            countrys.country.push({ "name": item.name, "flag": item.flag });

        })
        console.log(countrys);
        return countrys;

    } catch (error) {
        return error;
    }
};


let extractChampionshipInJson= (path , countryparam) => {

    try {
        let data = fs.readFileSync(path);
        let rawdata = JSON.parse(data);
        let country = rawdata.country;
        let championships = { championship: [] };
        country.forEach(function (item,i) {
            if(item.name == countryparam)
            {
                item.championship.forEach(function (items) {
    
                         championships.championship.push({ "name": items.name,"logo":items.logo});
                })
            }
 
        })
        console.log(championships);
        return championships;

    } catch (error) {
        return error;
    }
};


let extractFixturesInJson= (path , countryparam,championshipparam) => {

    try {
        let data = fs.readFileSync(path);
        let rawdata = JSON.parse(data);
        let country = rawdata.country;
        let fixtures = { fixture: [] };
        country.forEach(function (item,i) {
            if(item.name == countryparam)
            {
                item.championship.forEach(function (items) {
                    if(items.name == championshipparam)
                    {
                        
                        items.matchs.forEach(function (iteme) {
                           
                            fixtures.fixture.push(iteme);                    
                })
                    }
                })
            }
 
        })
        console.log(fixtures);
        return fixtures;

    } catch (error) {
        return error;
    }
};


let getCountryGamesWithDate = (date) => {
    let path;
    if (date === dates.getCurrentDate('-')) {
        path = "./storage/json/fixtures/todayFixturesApi.json";
      return extractCountryInJson(path); 
      
    }
    else if (date === dates.getTomorrowDate('-')) {
        path = "./storage/json/fixtures/tomorrowFixturesApi.json";
        return extractCountryInJson(path); 

    }
    else if (date === dates.get2DayAfterDate('-')) {
        path = "./storage/json/fixtures/twoDayAfterFixturesApi.json";
        return extractCountryInJson(path); 

    }
    else {
        console.log(`enter date between ${dates.getCurrentDate('-')} and ${dates.get2DayAfterDate('-')} for example ${dates.getCurrentDate('-')} or ${dates.getTomorrowDate('-')} or ${dates.get2DayAfterDate('-')}`);
    }
}


let getChampionshipCountryWithDate = (date,country) => {
    let path;
    if (date === dates.getCurrentDate('-')) {
        path = "./storage/json/fixtures/todayFixturesApi.json";
      return extractChampionshipInJson(path,country); 
      
    }
    else if (date === dates.getTomorrowDate('-')) {
        path = "./storage/json/fixtures/tomorrowFixturesApi.json";
        return extractChampionshipInJson(path,country); 

    }
    else if (date === dates.get2DayAfterDate('-')) {
        path = "./storage/json/fixtures/twoDayAfterFixturesApi.json";
        return extractChampionshipInJson(path,country); 

    }
    else {
        console.log(`enter country have game to this date`);
    }
}


let getFixturesChampionshipWithDate = (date,country,championship) => {
    let path;
    if (date === dates.getCurrentDate('-')) {
        path = "./storage/json/fixtures/todayFixturesApi.json";
      return extractFixturesInJson(path,country,championship); 
      
    }
    else if (date === dates.getTomorrowDate('-')) {
        path = "./storage/json/fixtures/tomorrowFixturesApi.json";
        return extractFixturesInJson(path,country,championship); 

    }
    else if (date === dates.get2DayAfterDate('-')) {
        path = "./storage/json/fixtures/twoDayAfterFixturesApi.json";
        return extractFixturesInJson(path,country,championship); 

    }
    else {
        console.log(`enter country have game to this date`);
    }
}

//getCountryGamesWithDate('2020-06-24');
//getChampionshipCountryWithDate('2020-06-25' , 'Ukraine');
//getFixturesChampionshipWithDate('2020-06-24' , 'England','Premier League');

module.exports = {getCountryGamesWithDate,getChampionshipCountryWithDate,getFixturesChampionshipWithDate};