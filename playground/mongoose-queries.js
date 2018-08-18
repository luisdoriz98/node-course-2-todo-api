const {ObjectID} = require('mongodb');

const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b787b65a56318328c786444';
//
// if (!ObjectID.isValid(id)){
//   console.log('Id not valid');
// };

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todos By id', todo);
// }).catch((e) => console.log(e));

var id = '5b784d406adcc704a477538c'

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Id not found');
  }
  console.log('User By id', user);
}).catch((e) => console.log('Invalid ID'));
