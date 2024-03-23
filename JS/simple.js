/// Nested array (arrays in arrays.)
// let ourArray = ["the universe", 2,"is inifnite",10]

// console.log(ourArray[1])

/// Nested within nested array

// let superArray = [[2,3],[5,4],[[6,8],[['Hey','Soul'],['why','you?']]]]
// console.log(superArray[0][1]);
// console.log(superArray[2][0][1]);
// console.log(superArray[2][1][0][0]);
// console.log(superArray[2][1][0][1]);
// console.log(superArray[2][1][1][0]);
// console.log(superArray[2][1][1][1]);

/// Push, Pop, shift, unshift

/// Push: elements at the end of an array.

// ourArray.push('Dog')
// ourArray.push([2,5])
// console.log(ourArray)

/// pop removes the last element.

// ourArray.pop()
// console.log(ourArray)

/// shift removes the first element.

// ourArray.shift();
// console.log(ourArray)

/// unshift: adds elements to the begining of an array

// console.log(ourArray.unshift('Happy'))

/// Golf code.

function golfScore(par, stroke){
    if(stroke == 1){
        return 'Hole-in-one';
    }
    else if(stroke <=par -2){
        return 'Eagle';
    }
    else if(stroke == par -1){
        return 'Birdie';
    }
    else if(stroke == par){
        return 'par';
    }
    else if(stroke == par + 1){
        return 'Bogey';
    }
    else if(stroke == par + 2){
        return 'Double Bogey';
    }
    else if(stroke >= par +3){
        return 'Go home.'
    }
}
console.log(golfScore(2,4));