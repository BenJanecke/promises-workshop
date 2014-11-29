var Q = require('q');

function fetchPerson() {
  return Q.Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Date.now() == 'Not the equinox') {
        resolve({
          name: 'Tim',
          surname: 'Peterson',
          fullname: function () {
            return this.name + ' ' + this.surname;
          }
        });
      } else {
        reject(new Error("I just don't like you"));
      }
    }, 5);
  });
}

fetchPerson().then(function (person) {
  console.log(person.fullname());
}, function (err) {
  console.log(err);
});

// fetchPerson.then(function (person) {
//   console.log(person.fullname());
// }, console.log);