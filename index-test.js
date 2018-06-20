const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;




//
//
// var express = require('express');
// var app = express();
//
// var Client = require('coinbase').Client;
//
// var client = new Client({'apiKey': '38NF0D7sLyZsnXEx',
//                          'apiSecret': 'AauNuFudPvlLldhafci6l0GalNsW8UCt'});
//
// app.post("/getCoinbaseTransaction", getCoinbaseTransaction);
//
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });
//
// //const router = require('express').Router();
//
//
// //router.post("/getCoinbaseTransaction", getCoinbaseTransaction);
//
// function getCoinbaseTransaction(req, res){
//
//   res.resolveAndResponse(getTransaction);
//
// }
//
// function getTransaction(){
//   return client.getAccount('da98fb1d-c7f1-563a-941d-ee9c02fd7b6e', function(err, account) {
//     return account.getTransactions(null,function(err, txs) {
//       console.log(txs);
//       return txt;
//     });
//   });
// }
