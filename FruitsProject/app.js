//jshit esversion:6

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

const client = new MongoClient(url, { useNewUrlParser: true});

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

    insertDocuments(db, function() {
    findDocuments(db, function() {
      client.close();
    });
  });
});
const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Insert some documents
    collection.insertMany([
        {
        name:"Apple",
        score:5,
        review:"IT is an ok FRUIT"
        },
        {
        name:"Orange",
        score:8,
        review:"GREAT FRUIT"
        },
        {
        name:"Banana",
        score:9,
        review:"I love it"
        }
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
}
const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits);
    callback(fruits);
  });
}




// { useUnifiedTopology: true } 

// const mongoose = require('mongoose');


// mongoose.connect('mongodb://localhost:27017/Tododb', { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser:true});

// const fruitSchema = new mongoose.Schema({
//     name: String,
//     rating: Number,
//     review: String
// });
// const Fruit = mongoose.model("fruit", fruitSchema);

// const fruit = new Fruit({
//     name:"Apple",
//     rating:5,
//     review:"Very solid as a fruit."
// });

// fruit.save();

