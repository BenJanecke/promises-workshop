function fetchPerson(then) {
  setTimeout(function () {
    then({
      name: 'Tim',
      surname: 'Peterson',
      fullname: function () {
        return this.name + ' ' + this.surname;
      }
    });
  }, 5);
}

fetchPerson(function (person) {
  console.log(person.fullname())
});