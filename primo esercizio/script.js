class User {
  constructor(_firstName, _lastName, _age, _location, _age2) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  verifyOlder = function (user) {
    if (this.age > user.age) {
      return `${this.firstName} è più vecchio di ${user.firstName}`;
    } else if (this.age < user.age) {
      return `${this.firstName} è più giovane di ${user.firstName}`;
    } else {
      return `${this.firstName} e ${user.firstName} hanno la stessa età`;
    }
  };
}

const user1 = new User("Felice", "Liparuli", 27, "Napoli");
const user2 = new User("Mario", "Rossi", 25, "Milano");
const user3 = new User("Alessia", "Allocca", 27, "Napoli");
console.log(user1, user2, user3);
console.log(user1.verifyOlder(user2));
console.log(user1.verifyOlder(user3));
console.log(user2.verifyOlder(user1));
