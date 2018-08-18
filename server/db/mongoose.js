var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
 mongoose.connect('mongodb://[luisd:roble219@]ds225902.mlab.com:25902/elavoro1');

module.exports = {mongoose};
