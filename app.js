

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

  res.send(getTransaction);

}

function getTransaction(){
  return client.getAccount('da98fb1d-c7f1-563a-941d-ee9c02fd7b6e', function(err, account) {
    return account.getTransactions(null,function(err, txs) {
      console.log(txs);
      return txt;
    });
  });
}

app.use('/', router);
