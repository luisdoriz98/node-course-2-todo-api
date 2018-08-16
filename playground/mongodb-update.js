// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  };
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b74b4a4bcc69566c0fad4af')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) =>{
  //   console.log(result);
  // });
  db.collection('User').findOneAndUpdate({
    name: 'Melissa'
  }, {
    $set: {
      name: 'Luis'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) =>{
    console.log(result);
  });
  //client.close();
});
