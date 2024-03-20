// alert('Hi JavaScript')
// let age = 24;
// console.log(age)
// let name = 'Yeab, Mesfin'
// const age = 24
// const rating = 4.6
// const isFunny = true
// const sadness = null
// const badperson = undefined

// console.log(typeof sadness)
// console.log(`My name is ${name} and I am ${age} years old and I rate my self ${rating} out of 5 for hardworking`)
// console.log(name.split(', '))

// let fruits = ['Banana','Apple','Mango','Strawberries']
// fruits.push('Grapes')
// fruits.unshift('Strawberries')
// fruits.pop()

// console.log(Array.isArray(fruits))
// console.log(Array.isArray('grape'))
// console.log(fruits.indexOf('Apple'))
// console.log(fruits)

// const me = {
//     firstName: 'Yeabsira',
//     lastName: 'Mesfin',
//     age: 30,
//     hobbies: ['Coding','Reading','Football'],
//     address: {
//         street: 'this',
//         city: 'is',
//         state: 'a secret'
//     }
// }

// me.email = 'yabidesta@gmail.com';


// console.log(me.hobbies[2])
// console.log(` My address: ${me.address.street} ${me.address.city} ${me.address.state}`)

// // Destructuring

// const {firstName,lastName,address: {city}} = me;

// console.log(city)

// console.log(firstName + " " +lastName);

// console.log(me)
/// Object.


const doThis = [ 
    {
    id: 1,
    text: 'Code',
    isCoompleted: true
   },
    {
    id: 2,
    text: 'Exercise',
    isCoompleted: true
   },
    {
    id: 3,
    text: 'Apply for scholarship',
    isCoompleted: false
   },
]

/// Iterating through object elements.

/// for loop 
// for(let i = 0; i<doThis.length;i++){
//     console.log(doThis[i].text);
// }

/// for of loop

// for(let todo of doThis){
//     console.log(todo.text)
// }

/// advanced array iterating methods: forEach, map, filter.

/// forEach

// doThis.forEach(todo =>
//     console.log(todo.isCoompleted)
// );

// doThis.forEach(function(todo){
//     console.log(todo.text)
// });


// const todoInstruction = doThis.map(todo =>
//     todo.text
//     );

//     console.log(todoInstruction);

///filter

// const todoInstruction = doThis.filter(todo => 
//     todo.isCoompleted ===true).map(todo=>
//         todo.text);

//     console.log(todoInstruction)
// const doThisToJason = JSON.stringify(doThis)
// console.log(doThisToJason)
// console.log(doThis[2].text)



//For Loop

// for(let i = 0; i<10; i++){
//     console.log(`For Loop Number: ${i}`)
// }

// // While Loop

// let i = 0;


// while(i<10){
//     console.log(`While Loop Number ${i}`);
//     i++;
// }

//while(i<10){
//     console.log(`While Loop Number ${i}`);
//     i++;
// }


/// Statements
// const x = 20;
// const y = 10;
// if(x>5 || y>10){
//     console.log('X is greater than 10 or y is greater than 10');

// const x = 20;
// const y = 10;
// if(x>5 || y>10){
//     console.log('X is greater than 10 or y is greater than 10');


// }else {
//     console.log('x is less than 10 or y is less than 10');
// }
// if(x>5 && y>10){
//     console.log('X is greater than 10 and y is greater than 10');

// }else {
//     console.log('x is less than 10 and y is less than 10');
// }


/// Ternary operator

// const x =20;

// const color = x>10? 'red':'blue';

// console.log(color)

/// switch

// const x = 7;

// const color = x >  5? 'red': 'blue';

// switch(color){
//     case 'red':
//         console.log('The color is red');
//         break;
//     case 'blue':
//         console.log('The color is blue');
//         break;
//         default:
//             console.log('color is NOT red or blue');
//             break;
// }

/// functions

// function addNums(num1, num2){
//     return num1 + num2;
// }

// console.log(addNums(4,5))

// /// function with default values.

// function addNums(num1= 4, num2 = 5){
//     return num1 + num2;
// }

// console.log(addNums())

// /// another way of returning method called arrow function is shown below

// const addNumss = (num1,num2) => num1 + num2;

// console.log(addNumss(4,5))

// /// using it with an object

// const increasedId = doThis.map(todo => todo.id + 5);
// console.log(increasedId)

function Person(firstName, lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    // this.getBirthYear = () =>{
    //     return this.dob.getFullYear();
    // }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person('Yeab', 'Mesfin','7-6-1999');
const person2 = new Person('Soul', 'Aleme','7-1-1999');

console.log(`${person1.firstName} ${person1.lastName} and I was born in ${person1.dob}`)
console.log(`${person2.firstName} ${person2.lastName} and I was born in ${person2.dob}`)


console.log(person1.getBirthYear())
console.log(person2.getFullName());