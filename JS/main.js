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

// const doThis = [ 
//     {
//     id: 1,
//     text: 'Code',
//     isCoompleted: true
//    },
//     {
//     id: 2,
//     text: 'Exercise',
//     isCoompleted: true
//    },
//     {
//     id: 3,
//     text: 'Apply for scholarship',
//     isCoompleted: false
//    },
// ]

// const doThisToJason = JSON.stringify(doThis)
// console.log(doThisToJason)
// console.log(doThis[2].text)



//For Loop

for(let i = 0; i<10; i++){
    console.log(`For Loop Number: ${i}`)
}

// While Loop

let i = 0;

while(i<10){
    console.log(`While Loop Number ${i}`);
    i++;
}
