var url = "mongodb://is-info430.ischool.uw.edu:27017/mydb";

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://is-info430.ischool.uw.edu:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("lab6");
  var query = { Neighborhood: "ALKI" };
  dbo.collection("seattleCrime_qzhufan").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});