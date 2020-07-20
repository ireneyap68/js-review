let name = 'Irene';
let age = '28';
let isCool = true;
let friends = ['Lily', 'Maggie', 'Katee', 'Alice', 'Mark'];

const chanel = {
    industry: 'Fashion',
    founder: 'Coco Chanel',
    yearFounded: 1883,
    foundingMembers: ['Coco Chanel', 'Saumur', 'Loire'],
    stockTicker: 'Chanel',
    products: {
        bag: 'Model S',
        cloth: 'Model X',
        jewelry: 'Model 3'
    },
    print: function() {
        console.log('Hello, this works with objects');
    }

};

chanel.stockPrice = 1642.00;

console.log(name);
console.log(age);
console.log(isCool);
console.log(friends);
console.log(chanel);
console.log(chanel.products.bag);
console.log(chanel['products']['bag']);

chanel.print();

// function printFriends(array) {
//     array.forEach(friend => {
//         console.log(friend);
//     });
// }

// function printName(element) {
//     console.log(element);
// }

//another example
// friends.forEach(function (friend){
//     printName(friend);
// });

// friends.forEach(friend =>
//     printName.apply(friends));

printFriends(friends);
printFriends(chanel.foundingMembers);

//standand function
function addNumbers(num1, num2) {
    return num1 + num2;
};

//function expression
const multiplyNumbers = function(num1,num2) {
    return num1 * num2;
};

//arrow function
const  subtractNumbers = (num1, num2) => {
    return num1 - num2;
};

