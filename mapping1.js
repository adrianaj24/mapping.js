var words = ["ground", "control", "to", "major", "tom"];

function wordLengths(array) { 
    var newArray = [];
    for (item of array) {
        newArray.push(item.length)       
    }
    return newArray
}

function wordstoUpper(array) {
    var newArray = [];
    for (item of array) {
        newArray.push(item.toUpperCase())
    }
return newArray 
}


function changeString(array) {
    var newArray = [];
    for (item of array) {
        newArray.push(item.split('').reverse().join(''))
    }
    return newArray 
}


console.log(wordLengths(words));
console.log(wordstoUpper(words));
console.log(changeString(words));


// console.log(map(words, function (item) { return item.length }));


// function map(array, thing) {
//     var newArray = [];
//     for (item of array) {
//         newArray.push(thing(item))
//     }
//     return newArray
// }