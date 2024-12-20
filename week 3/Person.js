// Defining a Person class
class Person {
    constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
    }
  
    // Method to get person info
    getPersonInfo() {
      return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }
  }
  
  // Exporting the Person class
  module.exports = Person;
  