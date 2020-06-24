//import returnBodyContentApi from'../../services/api/coronaServiceApi';
//const testServiceApi = require('../../services/api/testServiceApi');

const coronaServiceApi = require('../../services/api/coronaServiceApi');

let infoApi;

exports.country_statistic = (req, res) => {
    

  coronaServiceApi.returnBodyContentApi(req.params.country).then((responses) => {
  (infoApi = responses)
})
    res.send(infoApi);
};

