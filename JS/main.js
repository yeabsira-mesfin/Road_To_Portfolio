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

const todoInstruction = doThis.filter(todo => 
    todo.isCoompleted ===true).map(todo=>
        todo.text);

    console.log(todoInstruction)
// const doThisToJason = JSON.stringify(doThis)
// console.log(doThisToJason)
// console.log(doThis[2].text)



//For Loop

// for(let i = 0; i<10; i++){
//     console.log(`For Loop Number: ${i}`)
// }

// // While Loop

// let i = 0;

<<<<<<< HEAD
// while(i<10){
//     console.log(`While Loop Number ${i}`);
//     i++;
// }
=======
while(i<10){
    console.log(`While Loop Number ${i}`);
    i++;
}
>>>>>>> ee398e0df243eeca85c7f6b26c244dbca675b89a
