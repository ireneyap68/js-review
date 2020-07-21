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

function printFriends(array) {
    array.forEach(friend => {
        console.log(friend);
    });
}

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

//DOM
const container = document.querySelector('.container');
console.log(container);

// create an element
const headerTwo = document.createElement('h2');
headerTwo.textContent = 'My First JS Review';


container.appendChild(headerTwo);

// add a class to headerTwo
headerTwo.classList.add('subtitle', 'headerTwo');
// headerTwo.setAttribute('class', 'header-two');

//remove a class from headerTwo
headerTwo.classList.remove('header-two');
console.log(headerTwo)

//
headerTwo.addEventListener('click', function(){
    headerTwo.textContent = 'Irene';

});

//make another elemner
const headerThree = document.createElement('h2');
headerThree.textContent = 'Friends';

container.appendChild(headerThree);

console.log(headerThree);

// iterate through my friends array
// reference each friend
// create a li
// add textContent to the li
// append that to a ul (unordered list)

const list = document.createElement('ul');
for (let i =0; i < friends.length; i++) {
    let eachFriend = friends[i];

    const listItem = document.createElement('li');
    listItem.textContent = eachFriend;

    list.appendChild(listItem);
}

console.log(list);

headerThree.addEventListener('click', function() {
    container.appendChild(list);
});

// Problem Solving

// For example:
// [3,5,15,20,9,7]
// ['Fizz', 'Buzz', 'FizzBuzz', 'Buzz', 'Fizz', 7]

// i need to set up an empty array
// iterate through the array that going to pass in
// check the remainder of each element
// push the result of each element inside the result array
// result that result array

function fizzBuzz(array) {
    let result = [];

    for(let i=0; i < array.length; i++){
        let num = array[i]; // define a new array with each index
        console.log(num); // 3,5,15...

        if (num % 3 === 0 && num % 5 === 0){
            result.push('FizzBuzz');  //do something here
        } else if (num % 3 === 0){
            result.push('Fizz');   // do something else
        } else if (num % 5 === 0) {
            result.push('Buzz');  // do something here
        } else {
            result.push(num);
        }

    }

    return result;
}

console.log(fizzBuzz([3,5,15,20,9,7]));