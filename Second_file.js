// Ques_1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

function addNumber(num) {
    return function(value) {
      return value + num;
    }
  }
  
  // Example usage:
  const addFive = addNumber(5);
  console.log(addFive(10)); // Output: 15
  console.log(addFive(20)); // Output: 25

// Ques_2; Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

function searchArray(arr, val) {
    // Base case: If the array is empty, return false
    if (arr.length === 0) {
      return false;
    }
    // Recursive case: If the first element of the array is equal to the value, return true
    if (arr[0] === val) {
      return true;
    }
    // Recursive case: If the first element of the array is not equal to the value, search the rest of the array
    return searchArray(arr.slice(1), val);
  }

    console.log(searchArray([1, 2, 4, 5, 7, 10, 15], 6));
    console.log(searchArray([16, 24, 35, 44, 55], 35)); 

// Ques_03;  Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

  function addNewParagraph(text) {
    // create a new paragraph element
    const newParagraph = document.createElement('p');
  
    // set the text content of the new paragraph
    newParagraph.textContent = text;
  
    // find the body element of the HTML document
    const body = document.querySelector('body');

    // append the new paragraph element to the end of the body
    body.appendChild(newParagraph);
  }
addNewParagraph('This is some new text!');

// Ques_04;  Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

function addListItem(text) {
    // Create a new list item element
    let newListItem = document.createElement("li");
    // Set the text content of the new list item element
    newListItem.textContent = text;
    // Append the new list item element to the bottom of the document
    document.body.append(newListItem);
}
addListItem("Hello, world!");

// Ques_5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

function changeBackgroundColor(element, color) {
    // set the background color of the HTML element to the specified color
    element.style.backgroundColor = color;
  }
// find the HTML element you want to change the background color of
const myElement = document.getElementById('my-element');

// call the function with the element reference and the new color
changeBackgroundColor(myElement, 'red');

// Ques_06; Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

function saveToLocalStorage(key, object) {
    // convert the object to a JSON string
    const jsonString = JSON.stringify(object);
  
    // save the JSON string to localStorage with the specified key
    localStorage.setItem(key, jsonString);
  }
  const myObj = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'running', 'painting']
  };
  
  saveToLocalStorage('my-object', myObject);
// retrieve the object from localStorage with the specified key
const storedJsonString = localStorage.getItem('my-object');

// parse the JSON string back into an object
const storedObject = JSON.parse(storedJsonString);

console.log(storedObject); 
    
// Ques_7; Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

function retrieveFromLocalStorage(key) {
    // retrieve the JSON string from localStorage with the specified key
    const jsonString = localStorage.getItem(key);
  
    // parse the JSON string into an object
    const object = JSON.parse(jsonString);
  
    // return the object
    return object;
  }
  const myStoredObject = retrieveFromLocalStorage('my-object');

  console.log(myStoredObject); 

  
// Ques_08; Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.

function saveObjectToLocalStorage(object) {
    // save each property of the object to localStorage
    for (const key in object) {
      const value = object[key];
  
      // convert the value to a JSON string
      const jsonString = JSON.stringify(value);
  
      // save the JSON string to localStorage with the key
      localStorage.setItem(key, jsonString);
    }
  
    // create a new object to hold the retrieved values
    const retrievedObject = {};
  
    // retrieve each property from localStorage and add it to the new object
    for (const key in object) {
      // retrieve the JSON string from localStorage with the key
      const jsonString = localStorage.getItem(key);
  
      // parse the JSON string into a value
      const value = JSON.parse(jsonString);
  
      // add the value to the new object with the key
      retrievedObject[key] = value;
    }
  
    // return the new object with the retrieved values
    return retrievedObject;
  }
  const myObject = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'running', 'painting']
  };
  
  const retrievedObject = saveObjectToLocalStorage(myObject);
  
  console.log(retrievedObject);     
