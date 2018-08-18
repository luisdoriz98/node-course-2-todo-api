var mongoose = require('mongoose');
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }});

  var user = new User({
    email: ' ldorizsalazar@gmail.com    '
  });

module.exports = {User};
