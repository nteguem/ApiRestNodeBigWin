const express = require('express')
const app = express()
const cron = require('node-cron');
const getDataApi = require('./services/api/fixtures/fixtureService.js')
//const routeStatCountry = require('./routes/api/countryStatistics');
 
//app.use('/api', routeStatCountry);

//app.use(express.static(`${__dirname}/build`))


cron.schedule("*/1 * * * *",function(){

  getDataApi.writeFixturesDataInFiles();
})

app.listen(3004, function () {
  console.log('Listen data football API in 3004!')
})

