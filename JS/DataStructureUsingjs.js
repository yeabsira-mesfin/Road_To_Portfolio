/// Stacks: pushing and popping elements based on their intering order.
/// Functions we use are push, pop, peek, length.

// let letters = 'racecar-';
// let rword = '';
// for(let i = letters.length -1; i>=0 ; i--){
   
//     rword+=letters[i];

//     if(rword === letters){
//         console.log(`${letters} is a palindrome.`)
//     }
   
// }
// console.log(rword);

let letters = [];

let word = 'racecar';

let rword = '';

for(let i = 0; i < word.length; i++){
    letters.push(word[i]);
}

for(let i = 0; i<word.length; i++){
    rword += letters.pop();
}

if(word === rword)
console.log(`${word} is a pali`)
