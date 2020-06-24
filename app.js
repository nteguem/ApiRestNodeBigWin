const express = require('express')
const port = process.env.PORT || 3004
const app = express()
const cron = require('node-cron');
const getDataApi = require('./services/api/fixtures/fixtureService.js')
//const routeStatCountry = require('./routes/api/countryStatistics');
 
//app.use('/api', routeStatCountry);

//app.use(express.static(`${__dirname}/build`))


cron.schedule("*/350 * * * *",function(){

  getDataApi.writeFixturesDataInFiles();
})

app.get('/', function (req, res) {
  res.send('Hello Roland!')
})

app.listen(port, function () {
  console.log('Listen data football API in 3004!')
})

