# JavaScript Review 7/20 Monday
This is my review of JavaScript

## Examples of Data Types
```javascript
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

