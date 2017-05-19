var assert = require('assert');
var userCreate = require('../app.js');

describe('userCreate creates a user with a name, email and password', function() {
  userCreate('Testname', 'Test@email.com', 'Testpassword') 
    var name = function() {
      connection.sync().then(function() {
      User.findById(-1).then(function(user) {
        return user.name;
      });
    });
    assert.equal('Testname', name);
  };
});
