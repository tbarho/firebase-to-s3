var Firebase = require('firebase');
var RSVP     = require('rsvp');
var Promise  = RSVP.Promise;
var config   = require('../config');

var FIREBASE_SECRET        = config.FIREBASE_SECRET;
var FIREBASE_ROOT          = config.FIREBASE_ROOT;
var FirebaseTokenGenerator = require('firebase-token-generator');

var fbRef;

module.exports.initializeFirebase = function() {
  if (!fbRef) {
    fbRef = new Firebase(FIREBASE_ROOT);
  }
  return fbRef;
};

module.exports.get = function(ref) {
  return new Promise(function(resolve, reject) {

    ref.once('value', function (dataSnapshot) {
      resolve(dataSnapshot);
    }, function (err) {
      reject(err);
    });

  });
};

module.exports.set = function(ref, data) {
  return new Promise(function(resolve, reject) {

    ref.set(data, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });

  });
};

module.exports.push = function(ref, data) {
  return new Promise(function(resolve, reject) {

    var newRef = ref.push(data, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(newRef);
      }
    });

  });
};

module.exports.update = function(ref, data) {
  return new Promise(function(resolve, reject) {

    ref.update(data, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });

  });
};

module.exports.remove = function(ref) {
  return new Promise(function(resolve, reject) {

    ref.remove(function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });

  });
};

module.exports.authWithPassword = function(ref, email, password) {
  return new Promise(function(resolve, reject) {

    ref.authWithPassword({
      email: email,
      password: password
    }, function(err, authData) {
      if (err) {
        reject(err);
      } else {
        resolve(authData);
      }
    });

  });
};

module.exports.authWithCustomToken = function(ref, token) {
  return new Promise(function(resolve, reject) {

    ref.authWithCustomToken(token, function(err, authData) {
      if (err) {
        reject(err);
      } else {
        resolve(authData);
      }
    });

  });
};

module.exports.authAsAdmin = function(ref, adminUid) {
  var tokenGenerator = new FirebaseTokenGenerator(FIREBASE_SECRET);
  var adminToken = tokenGenerator.createToken({ uid: adminUid || 'adminUid' }, { admin: true });

  return module.exports.authWithCustomToken(fbRef, adminToken);
};
