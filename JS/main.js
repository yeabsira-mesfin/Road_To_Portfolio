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

const me = {
    firstName: 'Yeabsira',
    lastName: 'Mesfin',
    age: 30,
    hobbies: ['Coding','Reading','Football'],
    address: {
        street: 'this',
        city: 'is',
        state: 'a secret'
    }
}



console.log(me.hobbies[2])
console.log(` My address: ${me.address.street} ${me.address.city} ${me.address.state}`)

// Destructuring

const {firstName,lastName,address: {city}} = me;

console.log(city)

console.log(firstName)
