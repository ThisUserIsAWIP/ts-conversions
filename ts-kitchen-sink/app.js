"use strict";
var myName = 'Colter Crockett';
//name
var states = 50;
//states
var nine = 4 + 5;
//computes 4+5
var sayHello = function () { return alert('Hello World'); };
//says hello
sayHello();
//saying hello
var checkAge = function (age, name) {
    if (age < 21) {
        console.log("Sorry " + name + ", you aren't old enough to view this page!");
    }
    else { }
};
console.log(checkAge(21, 'Charles'));
console.log(checkAge(27, 'Abby'));
console.log(checkAge(18, 'James'));
console.log(checkAge(17, 'John'));
var myVeggies = ['Broccoli', 'Lettuce', 'Kale', 'Spinach', 'Sweet Potato'];
myVeggies.forEach(function (veggie) {
    console.log(veggie);
});
var myPet = {
    name: 'Rocky',
    breed: 'Dog - Mutt'
};
console.log(myPet);
var people = [
    { age: 11, name: 'tom' },
    { age: 16, name: 'steve' },
    { age: 25, name: 'ron' },
    { age: 39, name: 'bob' },
    { age: 7, name: 'mike' }
];
people.forEach(function (person) {
    checkAge(person.age, person.name);
});
var getLength = function (word) {
    var wordLength = word.length;
    if (wordLength % 2 == 0) {
        console.log('The World is nice and even!');
    }
    else {
        console.log('The world is an odd place!');
    }
};
console.log(getLength('Hello World'));
