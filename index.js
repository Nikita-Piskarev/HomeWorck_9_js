"use strict";
function User(firstName, lastName, email, age, isLoggedIn) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.isLoggedIn = isLoggedIn;
}

const userProto = {
  getFullName: function () {
    console.log(`Name ${this.firstName} last name ${this.lastName}`);
  },
  logout: function () {
    this.isLoggedIn = false;
    console.log(`isloggedIn ${this.isLoggedIn}`);
  },
  login: function () {
    this.isLoggedIn = true;
    console.log(`isloggedIn ${this.isLoggedIn}`);
  },
};

User.prototype = userProto;

const user1 = new User("Nikit", "Piskarev", "nik@gmail.com", 22, false);
const user2 = new User("Ivan", "Ivanovich", "ivan@gmail.com", 26, false);
const user3 = new User("Petro", "Petrovich", "petr@gmail.com", 21, false);
