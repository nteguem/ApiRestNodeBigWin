const dataFixtures = require('./exploreDataJsonService');
const fs = require('fs');





let formatCountry= (country) => {

let countrys  = dataFixtures.getCountryGamesWithDate(country);
let c = countrys.country;
let countryoption =  [];
let countryoptionparse =  [];

c.forEach(function (item,i) {
    countryoption.push(`{ "value": "${item.name}", "label": "<Row><Col><img src='${item.flag}' height='30px' width='30px' />${item.name}</Col></Row>" }`)
    countryoptionparse[i] = JSON.parse(countryoption[i]);  
});
 console.log({countryoptionparse})

};

formatCountry("2020-06-26");