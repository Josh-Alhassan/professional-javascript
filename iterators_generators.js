for (let i = 0; i <= 10; ++i) {
  console.log(i);
}

let num = 0;
num = ++num;
console.log(++num); // increment ON execution
console.log(num++); // increment AFTER execution
console.log(num);

// Iteration over ordered Items
let collection = ["foo", "bar", "baz"];

for (let index = 0; index < collection.length; ++index) {
  console.log(collection[index]);
}

// Iteration method - using Array.prototype.forEach
collection.forEach(function (item) {
  console.log(item);
});

// ForEach - No Explicit Return
let numbers = [1, 2, 3, 4, 5];

// Using forEach to double each number
numbers.forEach(function (number) {
  let doubled = number * 2;
  console.log(doubled); // This line outputs and not return a value
  // return doubled - X does not work.
});

// console.log(doubled);

// === THE ITERATION PATTERN ===

// Arrays have finite countable elements
// In-order traversal visits each index in increasing index order
let arr = [3, 1, 4];
console.log(arr);

// Sets have finite countable elements
// In-Order traversal visits each value in insertion order
let set = new Set().add(3).add(1).add(4);
console.log(set);

// Checking for the existence of this default "iterator property" will expose the factory function

let iteratorNum = 1;
let iteratorObject = {};

// These types do not have iterator factories
console.log(iteratorNum[Symbol.iterator]);
console.log(iteratorObject[Symbol.iterator]);

let itrStr = "abc";
let itrArr = ["a", "b", "c"];
let itrMap = new Map().set("a", 1).set("b", 2).set("c", 3);
let itrSet = new Set().add("a").add("b").add("c");
// let itrEls = document.querySelectorAll("div");

// These types all have iterator factories
console.log(itrStr[Symbol.iterator]);
console.log(itrArr[Symbol.iterator]);
console.log(itrMap[Symbol.iterator]);
console.log(itrSet[Symbol.iterator]);

// Invoking the factory function produces an iterator
console.log(itrStr[Symbol.iterator]());
console.log(itrArr[Symbol.iterator]());
console.log(itrMap[Symbol.iterator]());
console.log(itrSet[Symbol.iterator]());

// Behind the scenes, these native language constructs are invoking the factory function of the provided iterable to create an iterator.

let invokingArr = ["foo", "bar", "baz"];

// for...of loops
for (let el of invokingArr) {
  console.log(el);
}

// Array Destructuring
let [a, b, c] = invokingArr;
console.log(a, b, c);

// Spread Operator
let arr2 = [...invokingArr];
console.log(arr2);

// Array.from()
let arr3 = Array.from(invokingArr);
console.log(arr3);

// set Constructor
let setConstructor = new Set(invokingArr);
console.log(setConstructor);

// Map constructor
let pairs = invokingArr.map((el, i) => [el, i]);
console.log(pairs);

let mapConstructor = new Map(pairs);
console.log(mapConstructor);

class FooArray extends Array {}
let fooArr = new FooArray("foo", "bar", "baz");

console.log(fooArr);
for (let el of fooArr) {
  console.log(el);
}

// --- Iterator Protocol ---

// Iterable object
let arrIter = ["foo", "bar"];

// Iterator factory
console.log(arrIter[Symbol.iterator]);

// Iterator
let iter = arrIter[Symbol.iterator]();
console.log(iter);

// Performing iteration
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// One time ordered Traversal
let iter1 = arrIter[Symbol.iterator]();
let iter2 = arrIter[Symbol.iterator]();

console.log(iter1.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter1.next());

// custom Interators
// Define an object with an array of elements
const customObject = {
  elements: [1, 2, 3, 4, 5],

  // Define a emthod to vreate an iterator
  [Symbol.iterator]: function () {
    let index = 0;

    // Define the next method for the iterator
    return {
      next: () => {
        if (index < this.elements.length) {
          return {
            value: this.elements[index++],
            done: false,
          };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// Iterate over the element using the custom iterator
for (const element of customObject) {
  console.log(element);
}
