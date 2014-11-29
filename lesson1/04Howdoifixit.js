function fetchPerson(then) {
  setTimeout(function () {
    if (Date.now() == 'Not the equinox') {
      then(null, {
        name: 'Tim',
        surname: 'Peterson',
        fullname: function () {
          return this.name + ' ' + this.surname;
        }
      });
    } else {
      then(new Error("I just don't like you"), null);
    }
  }, 5);
}

fetchPerson(function (err, person) {
  if (err) {
    console.log('Ooops! DB error')
  } else {
    console.log(person.fullname());
  }
});