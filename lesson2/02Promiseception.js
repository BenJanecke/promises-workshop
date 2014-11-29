var Q = require('q');

var promiseMePete = Q.Promise(function (resolve) {
  resolve({ name: 'pete' })
});

var egoBoost = function (person) {
  return Q.Promise(function (resolve) {
    person.ego = '100%';
    resolve(person);
  });
}

promiseMePete
.then(egoBoost)
.then(console.log);