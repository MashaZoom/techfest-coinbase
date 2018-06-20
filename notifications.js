// var Client = require('coinbase').Client;
// var client = new Client({'apiKey': '38NF0D7sLyZsnXEx',
//                          'apiSecret': 'AauNuFudPvlLldhafci6l0GalNsW8UCt'});
//
// client.getNotifications(null, function(err, notifications) {
//   console.log('notification: ', notifications);
//   console.log('error: ',err);
// });


var Client = require('coinbase').Client;

var client = new Client({'apiKey': '38NF0D7sLyZsnXEx',
                         'apiSecret': 'AauNuFudPvlLldhafci6l0GalNsW8UCt'});

client.getAccount('da98fb1d-c7f1-563a-941d-ee9c02fd7b6e', function(err, account) {
  account.getTransactions(null,function(err, txs) {
    console.log(txs);
  });
});


// client.getAccounts({}, function(err, accounts) {
//   console.log(accounts);
// });
