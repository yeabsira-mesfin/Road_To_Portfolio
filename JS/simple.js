/// Nested array (arrays in arrays.)
let ourArray = [["the universe", 2],["is inifnite",10]]

console.log(ourArray[1][1])

/// Nested within nested array

let superArray = [[2,3],[5,4],[[6,8],[['Hey','Soul'],['why','you?']]]]
console.log(superArray[0][1]);
console.log(superArray[2][0][1]);
console.log(superArray[2][1][0][0]);
console.log(superArray[2][1][0][1]);
console.log(superArray[2][1][1][0]);
console.log(superArray[2][1][1][1]);