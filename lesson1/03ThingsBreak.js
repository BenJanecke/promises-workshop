function fetchPerson(then) {
  setTimeout(function () {
    if (Date.now() == 'Not the equinox') {
      then({
        name: 'Tim',
        surname: 'Peterson',
        fullname: function () {
          return this.name + ' ' + this.surname;
        }
      });
    } else {
      throw new Error("I just don't like you");
    }
  }, 5);
}

try {
  fetchPerson(function (person) {
    console.log(person.fullname())
  });
} catch (e) {
  console.log('Batman?');
}