const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err,client)=>{
  if (err) return console.log("Unable to connect to MongoDB server");
  console.log("Connected to MongoDB server");
  const db = client.db('TodoApp')
  // db.collection('Users').insertOne({
  //   name: "Hang Nguyen",
  //   age: 20,
  //   location: "Ada, Ohio"
  // }, (err, res)=>{
  //   if (err) return console.log("Unable to insert");
  //   console.log(JSON.stringify(res.ops));
  // })
  db.collection('Users').find({name: "Michael Nguyen"}).toArray().then((obj)=>{
    console.log(obj);
  },(err)=>{
    console.log("No user found");
  })
  client.close()
})
