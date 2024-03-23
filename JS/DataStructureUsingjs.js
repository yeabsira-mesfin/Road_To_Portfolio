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

// let letters = [];

// let word = 'racecar';

// let rword = '';

// for(let i = 0; i < word.length; i++){
//     letters.push(word[i]);
// }

// for(let i = 0; i<word.length; i++){
//     rword += letters.pop();
// }

// if(word === rword)
// console.log(`${word} is a palindrome`)


/// Set: is like an array with no duplicate items.

function mySets(){
    let collection =[];
    this.has = function(element){
        return (collection.indexOf(element)!==-1);
    };

    this.values = function(){
        return collection;
    };

    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };

    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true
        }
        return false;
    };
    this.size  = function(){
        return collection.length;
    };
    this.union = function (otherSet){
        let unionSet = new mySet();
        let firstSet =  this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };
    this.intersection = function(otherset){
        let intersectionSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
    this.difference = function(otherset){
        let differenceSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };
    this.subset = function(otherset){
        let firstSet = this.values();
        return firstSet.every(function(value){
            return otherSet.has(value);
        })
    }

}
