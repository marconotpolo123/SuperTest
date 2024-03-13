const request = require('supertest')
const { query, getVariables } = require('./payload')

let variables = getVariables(0, 1, "", "")

request("https://portal-api.aprasit.com.au")
  .post('/private')
  .set('authorization', '')
  .send({query, variables})
  .end(function(err, res) {
    if (err) throw err;
    console.log(res.body.data.searchAgreementWorks.total)
    let jsonData = res.body.data.searchAgreementWorks.works
      for(i = 0; i < jsonData.length; i++) {
            console.log(jsonData[i]['winfkey'])
    }
  });


