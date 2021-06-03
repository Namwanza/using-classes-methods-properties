class Human {
  age = 27;
  showAge = () => {
    // prints: 27
    console.log(this.age);
  }
}

// class Person will inherit all the properties and methods of Human class
class Person extends Human {
  name = 'Ronald Namwanza';
  showName = () => {
    // prints: Ronald Namwanza
    console.log(this.name);
  }
}

const person = new Person();
person.showName();
person.showAge();
