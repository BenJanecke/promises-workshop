var Q = require('q');

var car = {
  gas: 60
}

function drive(car) {
  return Q.Promise(function (resolve, reject) {
    console.log('vroom!');
    if (car.gas >= 20) {
      car.gas = car.gas - 20;
      resolve(car);
    } else {
      reject(new Error('Out of fuel'));
    }
  });
}

function dealWithIt(err) {
  console.log(err);
}

function reserves(car) {
  console.log('The car has ' + car.gas + ' units of gas left');
  return Q.Promise(function (resolve) {
    resolve(car);
  });
}

// drive 4 times then refuel then drive 2 more

