var Q = require('q');

var car = {
  gas: 20,
  drive: function () {
    var _this = this;
    return Q.Promise(function (resolve, reject) {
      if (_this.gas >= 10) {
        setTimeout(function () {
          _this.gas = _this.gas - 10;
          resolve(_this);
        }, 2);
      } else {
        reject(new Error('out of gas'), null);
      }
    });
  }
}

function dealWithIt(err) {
  console.log(err);
}

function reserves(car) {
  console.log('The car has ' + car.gas + ' units of gas left');
}

car.drive()
   .then(function (car) {
      reserves(car);
      car.drive().then(function () {
        reserves(car);
        car.drive().then(reserves, dealWithIt);
      }, dealWithIt);
   }, dealWithIt);

