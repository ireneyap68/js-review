# Summary - July 23, 2020 Thursday
### We have covered fetch, HTML Forms, Constructor Function, Promises and Async/Await

## fetch
The Fetch API provides a Javascript interface for requesting and responding. A basic fetch request is really simple to set up. Have a look at the following code:
```javascript
    fetch('http://example.com/movies.json')
    .then(response => response.json())
    .then(data => console.log(data));
```
Here we are fetching a JSON file across the network and printing it to the console. The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and returns a promise containing the response (a Response object). This is just an HTTP response, not the actual JSON. To extract the JSON body content from the response, we use the json() method (defined on the Body mixin, which is implemented by both the Request and Response objects.)


## HTML Forms
An HTML form is a section of a document containing normal content, markup, special elements called controls (checkboxes, radio buttons, menus, etc.), and labels on those controls. Users generally "complete" a form by modifying its controls (entering text, selecting menu items, etc.), before submitting the form to an agent for processing (e.g., to a Web server, to a mail server, etc.)

Here's a simple form that includes labels, radio buttons, and push buttons (reset the form or submit it):
```html
    <FORM action="http://somesite.com/prog/adduser" method="post">
        <P>
        <LABEL for="firstname">First name: </LABEL>
                <INPUT type="text" id="firstname"><BR>
        <LABEL for="lastname">Last name: </LABEL>
                <INPUT type="text" id="lastname"><BR>
        <LABEL for="email">email: </LABEL>
                <INPUT type="text" id="email"><BR>
        <INPUT type="radio" name="sex" value="Male"> Male<BR>
        <INPUT type="radio" name="sex" value="Female"> Female<BR>
        <INPUT type="submit" value="Send"> <INPUT type="reset">
        </P>
    </FORM>
```

## Constructor Function
A constructor is a function that creates an instance of a class which is typically called an “object”. The purpose of a constructor is to create an object and set values if there are any object properties present.

What happens when a constructor gets called?
In JavaScript, here’s what happens when a constructor is invoked:

* A new empty object is created
* this keyword starts referring to that newly created object and hence it becomes the current instance object
* The newly created object is then returned as the constructor’s returned value
```javascript
    function User(first, last) {
    this.firstName = first
    this.lastName = last
    }


    var user1 = new User("Jon", "Snow")
    console.log(user1)
    var user2 = new User("Ned", "Stark")
    console.log(user2)
```

## Class
A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.
```javascript
    class Car {
    constructor(brand) {
        this.carname = brand;
    }
    }
    mycar = new Car("Ford");
```

## Promises
A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

Here is a function that returns a promise which will resolve after a specified time delay:
```javascript
    const wait = time => new Promise((resolve) => setTimeout(resolve, time));

    wait(3000).then(() => console.log('Hello!')); // 'Hello!'
```

## async/await
Async and Await are extensions of promises. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
Example to use async and await:
```javascript
    function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve('resolved');
        }, 2000);
    });
    }

    async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
    }

    asyncCall(); // run calling then resolved in 2 sec later

```

