var Q = require('q');

function fetchPete(then) {
  then({ name: 'pete' });
}

var egoBoost = function (person, then) {
  person.ego = '100%';
  then(person);
}

fetchPete(function (pete) {
  egoBoost(pete, function (pete) {
    console.log(pete);
  });
});