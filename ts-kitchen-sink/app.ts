let myName = 'Colter Crockett';
//name
let states = 50;
//states
let nine = 4 + 5;
//computes 4+5
let sayHello = () => alert('Hello World')
//says hello
sayHello()
//saying hello
let checkAge = (age: number, name: string) => {
    if(age < 21) {console.log(`Sorry ${name}, you aren't old enough to view this page!`)}
    else {}
}
console.log(checkAge(21, 'Charles')); 
console.log(checkAge(27, 'Abby')); 
console.log(checkAge(18, 'James')); 
console.log(checkAge(17, 'John')); 

let myVeggies = ['Broccoli', 'Lettuce', 'Kale', 'Spinach', 'Sweet Potato']

myVeggies.forEach(veggie => {
    console.log(veggie)
});

let myPet = {
    name: 'Rocky',
    breed: 'Dog - Mutt'
}

console.log(myPet)

let people: {
    age: number;
    name: string;
}[] = [
    { age: 11, name: 'tom' },
    { age: 16, name: 'steve' },
    { age: 25, name: 'ron' },
    { age: 39, name: 'bob' },
    { age: 7, name: 'mike' }
]

people.forEach(person => {
    checkAge(person.age, person.name);
});

let getLength = (word: string) => {
    let wordLength = word.length
    if (wordLength%2 == 0) {
        console.log('The World is nice and even!')
    } else {console.log('The world is an odd place!')}
}

console.log(getLength('Hello World'))

