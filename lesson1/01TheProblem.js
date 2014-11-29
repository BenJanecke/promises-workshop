function fetchPerson() {
  setTimeout(function () {
    return {
      name: 'Tim',
      surname: 'Peterson',
      fullname: function () {
        return this.name + ' ' + this.surname;
      }
    };
  }, 5);
}

console.log(fetchPerson().fullname())
