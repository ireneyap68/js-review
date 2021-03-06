# JavaScript Review 7/20 Monday
This is my review of JavaScript

## Examples of Data Types
```javascript
    let name = 'Irene';
    let int = 68;
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

}
```


## Examples of Function
```javascript
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

```

## DOM Manipulation
```javascript
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
    headerTwo.classList.remove('headerTwo');
    console.log(headerTwo)

```
## More DOM Manipulation
```javascript
    const list = document.createElement('ul');
    for (let i =0; i < friends.length; i++) {
        let eachFriend = friends[i];

        //create an element
        const listItem = document.createElement('li');
        // add text to the element
        listItem.textContent = eachFriend;
        // append list items
        list.appendChild(listItem);
    }

    console.log(list);

    // add event listener
    headerThree.addEventListener('click', function() {
        container.appendChild(list);
    });
```
## Problem Solving
- [ ] Do I understand what the prompt is asking?
- [ ] Am I able to break the problem down?
- [ ] What is my strategy for solving the problem?
- [ ] Do I understand what my code is doing?
- [ ] Am I able to foresee any edge cases?
- [ ] Am I able to track the order of the code that is being executed?
- [ ] Am I able to track the values of the variables?
- [ ] Am I able to walk through my code line by line with an example?
- [ ] Do I have a working solution?