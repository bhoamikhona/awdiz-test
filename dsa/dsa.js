// Q 02 and Q 04

const isPalindrome = function(num) {
    const str = ""+num;
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] === str[right]) {
            left += 1;
            right -= 1;
        }
        else {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome(121));
console.log(isPalindrome(122));

// Q 03

const calculateSum = function(arr) {
    let result = 0;
    
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    return result;
}
console.log(calculateSum([1,2,3,4,5]));

// Q 05

const reverseArray = function(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.unshift(arr[i]);
    }

    return result;
}

console.log(reverseArray([1,2,3,4,5]));

// Q 06

const removeDuplicates = function(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (result.includes(arr[i])){
            continue;
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(removeDuplicates([1,2,3,1,3,6,7,4]))
console.log(removeDuplicates([1,2,3,1,3,6,7,8,7,3,2,4]))

// Q 07

const factorial = function(n) {
    if (n === 1) {
        return n;
    } else {
        return (n * factorial(n - 1))
    }
}

console.log(factorial(5));
console.log(factorial(3));

// Q 12

const haystackAndNeedle = function(haystack, needle) {
    if (haystack.includes(needle)){
        return haystack.indexOf(needle);
    } else return -1;
}

console.log(haystackAndNeedle('sadbutsad', 'sad'));
console.log(haystackAndNeedle('airplane', 'plane'));

// Q 13

const findIndex = function(arr, target) {
    if (arr.includes(target)){
        const startIdx = arr.indexOf(target);
        const endIdx = arr.indexOf(target) + 1;
        return [startIdx, endIdx]
    } else {
        return [-1, -1]
    }
}

console.log(findIndex([5, 7, 7, 8, 8, 10], 8))
console.log(findIndex([5, 7, 7, 8, 8, 10], 11))
console.log(findIndex([5, 7, 7, 8, 8, 10], 5))