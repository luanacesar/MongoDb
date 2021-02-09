//jshit esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("fruit", fruitSchema);

const fruit = new Fruit({
    name:"Apple",
    rating:5,
    review:"Very solid as a fruit."
});

const kiwi = new Fruit({
  name:"Kiwi",
  rating:7,
  review:"good"
})
const orange = new Fruit({
  name:"orange",
  rating:10,
  review:"The best fruit"
})
const banana = new Fruit({
  name:"banana",
  rating:9,
  review:"My second favorite one"
})

// Fruit.insertMany([kiwi,orange, banana], function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Succesfully saved all the fruits");
//   }
// });
// fruit.save();

Fruit.find(function(err, fruits){
  if (err){
    console.log(err);
  }
  else{
    mongoose.connection.close();
    fruits.forEach(fruit => {
      console.log(fruit.name);
    });
  // fruits.forEach(function (fruit){
  //   console.log(fruit.name);
  // });  
  }
});




  const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name:"Luana",
  age:30
});

person.save();

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


