plane = {
  captain: 'Ahab',
  passengers: [],
  kmPerUnit: 20,
  putPersonInPlane: function (person, then) {
    var _this = this;
    setTimeout(function () {
      _this.passengers.push(person);
      then(_this);
    }, 2);
  },
  fly: function (fuel, then) {
    var _this = this;
    setTimeout(function () {
      console.log(_this.passengers.length +
                  ' passengers on a ' +
                  fuel * _this.kmPerUnit +
                  'km flight with captain ' + _this.captain);
      then(_this);
    }, 2);
  }
}

timmy = {
  name: 'Timmy'
}

jane = {
  name: 'Jane'
}

plane.putPersonInPlane(timmy, function (plane) {
  plane.putPersonInPlane(jane, function (plane) {
    plane.fly(800, function (plane) {

    });
  });
});

