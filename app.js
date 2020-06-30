const express = require('express')
const port = process.env.PORT || 5000
const cors = require('cors')
const app = express()
const fs = require('fs');
const cron = require('node-cron');
const getDataApi = require('./services/api/fixtures/fixtureService.js')
const pathfixturestoday = './storage/json/fixtures/todayFixturesApi.json';
const pathfixturestomorrow = './storage/json/fixtures/tomorrowFixturesApi.json';
const pathfixturestwodayafter = './storage/json/fixtures/twoDayAfterFixturesApi.json';
const fixturesRoutes = require('./routes/api/fixturesRoutes');

app.use(cors())

app.use('/api', fixturesRoutes);

//app.use(express.static(`${__dirname}/build`))

if (!(fs.existsSync(pathfixturestoday) )|| !(fs.existsSync(pathfixturestomorrow)) || !(fs.existsSync(pathfixturestwodayafter))) {

  try {
    getDataApi.writeFixturesDataInFiles();

  }
  catch (error) {
    console.log(error);
  }
}
cron.schedule("*/350 * * * *", function () {

  getDataApi.writeFixturesDataInFiles();
})

app.get('/', function (req, res) {
  res.send('Hello Roland!')
})


app.listen(port, function () {
  console.log(`Listen data football API in ${port}!`)
})

