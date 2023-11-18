/* Question: Write a function sumPositiveNumbers that takes an array of numbers as input and
returns the sum of all positive numbers.
Input: [1, -2, 3, 4, -5]
Output: 8 (sum of positive numbers: 1 + 3 + 4) */

const sumPositiveNumbers = function(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result += nums[i];
        }
    }

    return result;
}

const questionOne = sumPositiveNumbers([1, -2, 3, 4, -5]);
console.log(questionOne);


/* Question: Create a function doesKeyExist(obj, key) that checks if a given key exists in the
provided object (obj).
Input: {name: 'John', age: 25, city: 'New York'}, 'age'
Output: true (the key 'age' exists in the object) */

const doesKeyExist = function(targetObj, targetKey) {
    if (targetKey in targetObj) {
        return true;
    } else {
        return false;
    }
}

console.log(doesKeyExist({name: 'John', age: 25, city: 'New York'}, 'age'));

/* Question: Implement a function findMaxValue that finds and returns the maximum value in an
array of integers.
Input: [2, 8, 5, 1, 9]
Output: 9 (the maximum value in the array) */

const findMaxValue = function(nums) {
    let maxNum = -9999999999999;

    for (let i = 0; i < nums.length; i++) {
        if (maxNum < nums[i]) {
            maxNum = nums[i];
        }
    }

    return maxNum;
}

console.log(findMaxValue([2, 8, 5, 1, 9]));

/* Question: Write a function countProperties that takes an object as input and returns the total
number of properties (keys) it contains.
Input: {a: 1, b: 2, c: 3}
Output: 3 (the object has three properties: a, b, c) */

const countProperties = function(obj) {
    return Object.keys(obj).length;
}

console.log(countProperties({a: 1, b: 2, c: 3}));

/* Question: Implement a function reverseArray that reverses the order of elements in an array
without using the built-in reverse() method.
Input: [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1] (the reversed array) */

const reverseArray = function(arr) {
    const temp = [];

    for (let i = 0; i < arr.length; i++) {
        temp.unshift(arr[i]);
    }

    return temp;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

/* Question: Create a function capitalizeKeys that capitalizes the first letter of each key in an
object.
Input: {firstName: 'john', lastName: 'doe'}
Output: {FirstName: 'john', LastName: 'doe'} */

const capitalizeKeys = function(obj) {
    const objectKeys = Object.keys(obj);
    const returningObject = {};

    for(let i = 0; i < objectKeys.length; i++) {
        // console.log(objectKeys[i][0].toUpperCase());
        // console.log(objectKeys[i].slice(1));

        returningObject[objectKeys[i][0].toUpperCase() + objectKeys[i].slice(1)] = obj[objectKeys[i]];

        // console.log(returningObject)
    }
    // return Object.keys(obj);
    return returningObject;
}

console.log(capitalizeKeys({firstName: 'john', lastName: 'doe'}));

/* Question: Write a function removeDuplicates that removes duplicate elements from an array
while maintaining the original order.
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5] (array without duplicates) */

const removeDuplicates = function(nums) {
    const temp = [];

    for (let i = 0; i < nums.length; i++) {
        if (temp.includes(nums[i])) {
            continue;
        } else {
            temp.push(nums[i]);
        }

    }

    return temp;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

/* Question: Implement a function sumObjectValues that calculates the sum of all numeric values
in an object.
Input: {a: 10, b: 20, c: 30}
Output: 60 (sum of all numeric values in the object) */

const sumObjectValues = function(obj) {
    const values = Object.values(obj);
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }

    return sum;
}

console.log(sumObjectValues({a: 10, b: 20, c: 30}));

/* Question: Create a function elementFrequency that takes an array as input and returns an
object with the frequency of each element.
Input: [1, 2, 3, 1, 2, 4, 1]
Output: {1: 3, 2: 2, 3: 1, 4: 1} (object with element frequencies) */

const elementFrequency = function(arr) {
    const temp = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in temp) {
            temp[arr[i]] += 1;
        } else {
            temp[arr[i]] = 1;
        }
        
    }

    return temp;
}

console.log(elementFrequency([1, 2, 3, 1, 2, 4, 1]));

/* Question: Write a function sortObjectKeys that takes an object as input and returns a new object
with keys sorted alphabetically.
Input: {banana: 3, apple: 1, orange: 5}
Output: {apple: 1, banana: 3, orange: 5} (object with keys sorted alphabetically) */

const sortObjectKeys = function(obj) {

    return Object.keys(obj).sort();
}

console.log(sortObjectKeys({banana: 3, apple: 1, orange: 5, berries: 4, lime: 5, lemmon: 6}));
