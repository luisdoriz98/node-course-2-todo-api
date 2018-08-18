var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
 mongoose.connect(process.env.'mongodb://luisd:roble219@ds225902.mlab.com:25902/elavoro1' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
