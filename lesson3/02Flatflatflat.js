var Q = require('q');

var plane = Q({
  captain: 'Ahab',
  passengers: [],
  kmPerUnit: 20,
});

var timmy = {
  name: 'Timmy'
};

var jane = {
  name: 'Jane'
};

function putPersonInPlane(person) {
  return function (plane) {
    var deferred = Q.defer();

    setTimeout(function () {
      plane.passengers.push(person);
      deferred.resolve(plane);
    }, 2);

    return deferred.promise;
  }
}

function fly(fuel) {
  return function(plane) {
    var deferred = Q.defer();

    setTimeout(function () {
      console.log(plane.passengers.length +
                  ' passengers on a ' +
                  fuel * plane.kmPerUnit +
                  'km flight with captain ' + plane.captain);
      deferred.resolve(plane);
    }, 2);

    return deferred.promise;
  }
}

plane
.then(putPersonInPlane(timmy))
.then(putPersonInPlane(jane))
.then(fly(200))
