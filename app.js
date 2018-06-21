
const express = require('express')

const app = express()

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running at port 3000`)
})

var Client = require('coinbase').Client;

var client = new Client({'apiKey': '38NF0D7sLyZsnXEx',
                         'apiSecret': 'AauNuFudPvlLldhafci6l0GalNsW8UCt'});


const router = express.Router() // 1

router.post("/getCoinbaseTransaction", getCoinbaseTransaction);

function getCoinbaseTransaction(req, res){

  console.log('this is working');

  getTransaction().then(function(result) {
    console.log("result :: ", result);
    res.send(result);
  });

}

const timeInterval = 60000;

function getTransaction(){

  var promise = new Promise(function(resolve,reject) {
      return client.getAccount('da98fb1d-c7f1-563a-941d-ee9c02fd7b6e', function(err, account) {
          return account.getTransactions(null,function(err, txs) {
              console.log(txs);

              txs.sort(function(a, b){
                  return new Date(b.created_at) - new Date(a.created_at);
              });

              let tran = txs[0];
              //console.log(tran);
              let curDate = new Date();
              let latestTransactionDate = new Date(txs[0].created_at);
              var diff = curDate.getTime() - latestTransactionDate.getTime();
              //console.log(diff);
              var result = {
                  "status_code":400
              }
              if (diff <= timeInterval) {
                  if (tran.status === 'completed' || tran.status === 'pending'){
                      var result = {
                          "status_code":200,
                          "amount": tran.amount,
                          "created_at":tran.created_at,
                          "status":tran.status,
                          "usd":tran.native_amount,
                      }
                  }
              }
              return resolve(result);


          });
      });
  });

  return promise;
}

app.use('/', router);
