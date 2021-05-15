"use strict";
// ES5
//Оптимизация памяти путём объявления метода вне класса
/*function age(yearOfBirth) {
    return new Date().getFullYear() - yearOfBirth;
}
function Person(name, yearOfBirth) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.calcAge = age(yearOfBirth);
}
var vasya = new Person("Vasya", 1985);
console.log(vasya);*/
//Оптимизация памяти путём объявления метода в прототипе
/*function Person(name, yearOfBirth) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
}
Person.prototype.calcAge = function () {
    return new Date().getFullYear() - this.yearOfBirth;
}
var vasya = new Person("Vasya", 1985);
var ann = new Person("Ann", 1990, "math");
console.log(vasya);
console.log(ann);*/
//Добавление нового конструктора Teacher, и работа с ним
/*function Person(name, yearOfBirth) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
}
Person.prototype.calcAge = function () {
    return new Date().getFullYear() - this.yearOfBirth;
}
function Teacher(name, yearOfBirth, sudject) {
    Person.call(this, name, yearOfBirth);
    this.sudject = sudject;
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
var vasya = new Person("Vasya", 1985);
var ann = new Teacher("Ann", 1990, "math");
console.log(vasya);
console.log(ann);*/
// ES6
class Person {
    constructor(name, yearOfBirth) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.age = this.calcAge();
    }


    calcAge() {
        return new Date().getFullYear() - this.yearOfBirth;
    }
}
class Teacher extends Person {
    constructor(name, yearOfBirth, subject) {
        super(name, yearOfBirth);
        this.subject = subject;
    }

    static triple(x) {
        return x * 3;
    }
}
let vasya = new Person("vasya", 1999);
let ann = new Teacher("ann", 1990, "math");
console.log(vasya);
console.log(ann);