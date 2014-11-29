var Q = require('q');

var car = {
  gas: 20,
  drive: function (then) {
    var _this = this;
    if (_this.gas >= 10) {
      setTimeout(function () {
        _this.gas = _this.gas - 10;
        then(null, _this);
      }, 2);
    } else {
      then(new Error('out of gas'), null);
    }
  }
}

function dealWithIt(err) {
  console.log(err);
}

function reserves(car) {
  console.log('The car has ' + car.gas + ' units of gas left');
}

car.drive(function (err, car) {
  if (err) return dealWithIt(err);
  reserves(car);
  car.drive(function (err, car) {
    if (err) return dealWithIt(err);
    reserves(car);
    car.drive(function (err, car) {
      if (err) return dealWithIt(err);
      reserves(car);
    });
  });
});
