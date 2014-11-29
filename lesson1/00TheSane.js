function fetchPerson() {
  return {
    name: 'Tim',
    surname: 'Peterson',
    fullname: function () {
      return this.name + ' ' + this.surname;
    }
  };
}

var person = fetchPerson();

console.log(person.fullname());
