// TASK 1
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
console.log("TASK 1")

const add = (a: number, b:number): number => {
    return a + b;
}

console.log(add(1, 2)); // 3
console.log(add(1, 10)); // 11
console.log(add(99, 1)); // 100

// TASK 2
// Write a function that takes a value as argument
// Return the type of the value
console.log("TASK 2")

const whatType = (a: any): string => {
    return typeof a
}

console.log(whatType(1)) // 'number'
console.log(whatType(false)) // 'boolean'
console.log(whatType({})) // 'object'
console.log((null)) //'object'
console.log(('string')) // 'string'
console.log(((['array']))) // 'object'

// TASK 3
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
console.log("TASK 3")

const isEqual = (a: any, b: any): boolean => {
    if (a === b && typeof a === typeof b) {
        return true;
    } else {
        return false;
    }
}

console.log(isEqual(2, 3)) // false
console.log(isEqual(3, 3)) // true
console.log(isEqual(1, '1')) // false
console.log(isEqual('10', '10')) // true

// TASK 4
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'
console.log("TASK 4")

const findChar = (a: string, n: number): string => {
    return a[n -1] 
}

console.log(findChar('abcd',1)) // 'a'
console.log(findChar('zyxbwpl',5)) // 'w'
console.log(findChar('gfedcba',3)) // 'e'

// TASK 5
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
console.log("TASK 5")

const removeFirstThree = (str: string): string => {
    return str.slice(3) 
}

console.log(removeFirstThree('abcdefg')) // 'defg'
console.log(removeFirstThree('1234')) // '4'
console.log(removeFirstThree('fgedcba')) // 'dcba'

// TASK 6
// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
console.log("TASK 6")

const getLastThree = (str: string): string => {
    return str.substring(str.length - 3)
}

console.log(getLastThree('abcdefg')) // 'efg'
console.log(getLastThree('1234')) // '234'
console.log(getLastThree('fgedcba')) // 'cba'

// TASK 7
// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
console.log("TASK 7")

const getFirstThree = (a: string): string => {
    return a.substring(0, 3)
}

console.log(getFirstThree('abcdefg')) // 'abc'
console.log(getFirstThree('1234')) // '123'
console.log(getFirstThree('fgedcba')) // 'fge'

// TASK 8
// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
console.log("TASK 8")

const getFirstHalf = (a: string): string => {
    return a.substring(0, (a.length / 2))
}

console.log(getFirstHalf('abcdefgh')) // 'abcd'
console.log(getFirstHalf('1234')) // '12'
console.log(getFirstHalf('gedcba')) // 'ged'

// TASK 9
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
console.log("TASK 9")

const removelastThree = (a: string): string => {
    return a.substring(0, (a.length - 3))
}

console.log(removelastThree('abcdefg')) // 'abcd'
console.log(removelastThree('1234')) // '1'
console.log(removelastThree('fgedcba')) // 'fged'

// TASK 10
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
console.log("TASK 10")

const getPercent = (a: number, b: number): number => {
    return (a / 100) * b
}

console.log(getPercent(100, 50)) // 50
console.log(getPercent(10, 1)) // 0.1
console.log(getPercent(500, 25)) // 125

// TASK 11
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order
console.log("TASK 11")

const formula = (a: number, b: number, c: number, d: number, e: number, f: number): number => {
    return Math.pow((((a + b - c) * d) / e), f)
}

console.log(formula(6,5,4,3,2,1)) // 10.5
console.log(formula(6,2,1,4,2,3)) // 2744
console.log(formula(2,3,6,4,2,3)) // -8

// TASK 12
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
console.log("TASK 12")

const isEven = (a: number): boolean => {
    if (a % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(isEven(10)) // true
console.log(isEven(-4)) // true
console.log(isEven(5)) // false
console.log(isEven(-111)) // false

// TASK 13
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
console.log("TASK 13")

const countOccurences = (a: string, b: string): number => {
    let arr = b.split('');
    let count = 0;

    for (let char of arr) {
        if (char === a) {
            count += 1
        }
    }

    return count
}

console.log(countOccurences('m', 'how many times does the character occur in this sentence?')) // 2
console.log(countOccurences('h', 'how many times does the character occur in this sentence?')) // 4
console.log(countOccurences('?', 'how many times does the character occur in this sentence?')) // 1
console.log(countOccurences('z', 'how many times does the character occur in this sentence?')) // 0

// TASK 14
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
console.log("TASK 14")

const isInt = (a: number): boolean => {
    return a % 1 === 0;  
}

console.log(isInt(4)) // true
console.log(isInt(1.123)) // false
console.log(isInt(1048)) // true
console.log(isInt(10.48)) // false

// TASK 15
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
console.log("TASK 15")

const smallerBigger = (a: number, b:number): number => {
    if (a < b) {
        return a / b
    } else {
        return a * b
    }
}

console.log(smallerBigger(10, 100)) // 0.1
console.log(smallerBigger(90, 45)) // 4050
console.log(smallerBigger(8, 20)) // 0.4
console.log(smallerBigger(2, 0.5)) // 1

// TASK 16
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
console.log("TASK 16")

const strIncludes = (a: string, b:string): string => {
    if (a.match(b)) {
        return b + a
    } else {
        return a + b
    }
}

console.log(strIncludes('cheese', 'cake')) // 'cheesecake'
console.log(strIncludes('lips', 's')) // 'slips'
console.log(strIncludes('Java', 'script')) // 'Javascript'
console.log(strIncludes(' think, therefore I am', 'I')) // 'I think, therefore I am'

// TASK 17
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
console.log("TASK 17")

const roundTwoDig = (a: number): number => {
    return Math.round(a * 100) / 100;
}

console.log(roundTwoDig(2.12397)) // 2.12
console.log(roundTwoDig(3.136)) // 3.14
console.log(roundTwoDig(1.12397)) // 1.12
console.log(roundTwoDig(26.1379)) // 26.14


// TASK 18
// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting
console.log("TASK 18")

const splitInHalf = (a: number): number[] => {
    return String(a).split('').map(Number);
}

console.log(splitInHalf(10)) // [1,0]
console.log(splitInHalf(931)) // [9,3,1]
console.log(splitInHalf(193278)) // [1,9,3,2,7,8]

// TASK 19
// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.
console.log("TASK 19")

const cleanWord = (a: string, b: string): string => {
    let cleanInputA = a.replace('%', '');
    let cleanInputB = b.replace('%', '');
    return cleanInputA.charAt(0).toUpperCase() + cleanInputA.slice(1) + cleanInputB.split('').reverse().join('')
}

console.log(cleanWord('java', 'tpi%rcs')) // 'Javascript'
console.log(cleanWord('c%ountry', 'edis')) // 'Countryside'
console.log(cleanWord('down', 'nw%ot')) // 'Downtown'

// TASK 20
// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number
console.log("TASK 20")

const primeNumber = (num: number): number => {
    for(let i = 3; i < num ; i++) {
        if(num % i === 0) {
            return primeNumber(num + 1)
        }
    }
    return num;
};


console.log(primeNumber(38)) // 41
console.log(primeNumber(7)) // 7
console.log(primeNumber(115)) // 127
console.log(primeNumber(2000)) // 2003


// TASK 21
// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y
console.log("TASK 21")

const isDivisable = (x: number, y: number): number => {
    let divisableNum = 0;
    if (x % y === 0) {
        divisableNum = x;
    } else {
        for (let i = x; i % y != 0; i++) {
            divisableNum = i + 1;
        }
    }  
    return divisableNum;
}


console.log(isDivisable(1, 23)) // 23
console.log(isDivisable(23, 23)) // 23
console.log(isDivisable(7, 3)) // 9
console.log(isDivisable(-5, 7)) // 0

// TASK 22
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
console.log("TASK 22")

const incrementLetter = (a: string): string => {
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let incrementedStr = ""

    for(let i=0; i<=a.split("").length-1; i++){
        let str = letters.indexOf(a.charAt(i))+1
        let myStr = letters.charAt(str)
        incrementedStr += myStr
    }

  return incrementedStr
}

console.log(incrementLetter('bnchmf')) // 'coding'
console.log(incrementLetter('bgddrd')) // 'cheese'
console.log(incrementLetter('sdrshmf')) // 'testing'

// TASK 23
// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
console.log("TASK 23")

const getArrElement = (a: number[], n: number): number => {
    return a[n -1];
}


console.log(getArrElement([1,2,3,4,5],3)) // 3
console.log(getArrElement([10,9,8,7,6],5)) // 6
console.log(getArrElement([7,2,1,6,3],1)) // 7

// TASK 24
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
console.log("TASK 24")

const deleteFirstThree = (a: number[]): number[] => {
    return a.slice(3);
}


console.log(deleteFirstThree([1,2,3,4])) // [4]
console.log(deleteFirstThree([5,4,3,2,1,0])) // [2,1,0]
console.log(deleteFirstThree([99,1,1])) // []

// TASK 25
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array
console.log("TASK 25")

const extractLastThree = (a: number[]): number[] => {
    return a.slice(-3);
}


console.log(extractLastThree([1,2,3,4])) // [2,3,4]
console.log(extractLastThree([5,4,3,2,1,0])) // [2,1,0]
console.log(extractLastThree([99,1,1])) // [99,1,1]

// TASK 26
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
console.log("TASK 26")

const extractFirstThree = (a: number[]): number[] => {
    return a.slice(0, 3);
}


console.log(extractFirstThree([1,2,3,4])) // [1,2,3]
console.log(extractFirstThree([5,4,3,2,1,0])) // [5,4,3]
console.log(extractFirstThree([99,1,1])) // [99,1,1]

// TASK 27
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
console.log("TASK 27")

const extractElements = (a: number[], n: number): number[] => {
    return a.slice(-n);
}


console.log(extractElements([1, 2, 3, 4, 5], 2)) // [ 4, 5 ]
console.log(extractElements([1, 2, 3], 6)) // [ 1, 2, 3 ]
console.log(extractElements([1, 2, 3, 4, 5, 6, 7, 8], 3)) // [ 6, 7, 8 ]

// TASK 28
// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
console.log("TASK 28")

const filterArray = (a: any[], n: any): any[] => {
    return a.filter(element => element !== n);
}


console.log(filterArray([1,2,3], 2)) // [1, 3]
console.log(filterArray([1, 2,'2'], '2')) // [1, 2]
console.log(filterArray([false,'2',1], false)) // ['2', 1]
console.log(filterArray([1,2,'2',1], 1)) // [2, '2']

// TASK 29
// Write a function that takes an array (a) as argument
// Return the number of elements in a
console.log("TASK 29")

const arrayCounter = (a: any[]): number => {
    return a.length;
}


console.log(arrayCounter([1,2,2,4])) // 4
console.log(arrayCounter([9,9,9])) // 3
console.log(arrayCounter([4,3,2,1,0])) // 5

// TASK 30
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
console.log("TASK 30")

const arrayNegatives = (a: number[]): number => {
    let count = 0;
    for (let value of a) {
        if (value < 0) {
            count += 1
        }
    }
    return count
}


console.log(arrayNegatives([1,-2,2,-4])) // 2
console.log(arrayNegatives([0,9,1])) // 0
console.log(arrayNegatives([4,-3,2,1,0])) // 1

// TASK 31
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
console.log("TASK 31")

const sortHigherFirst = (arr: number[]): number[] => {
   return arr.sort((a,b) => b-a);
}


console.log(sortHigherFirst([1,3,2])) // [3,2,1]
console.log(sortHigherFirst([4,2,3,1])) // [4,3,2,1]

// TASK 32
// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result
console.log("TASK 32")

const sortAlphabetical = (arr: string[]): string[] => {
   return arr.sort();
}


console.log(sortAlphabetical(['b', 'c', 'd', 'a'])) // ['a', 'b', 'c', 'd']
console.log(sortAlphabetical(['z', 'c', 'd', 'a', 'y', 'a', 'w'])) // ['a', 'a', 'c', 'd', 'w', 'y', 'z']

// TASK 33
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
console.log("TASK 33")

const getAverage = (arr: number[]): number => {
    let arrSum = 0;

    for (let num of arr) {
        arrSum += num;        
    }

    return arrSum / arr.length
}


console.log(getAverage([10,100,40])) // 50
console.log(getAverage([10,100,1000])) // 370
console.log(getAverage([-50,0,50,200])) // 50

// TASK 34
// Write a function that takes an array of strings as argument
// Return the longest string
console.log("TASK 34")

const getLongestWord = (arr: string[]): string => {
    let count = 0;
    let longestWord = '';

    for (let word of arr) {
        if (count < word.length) {
            count = word.length;
            longestWord = word;
        }     
    }

    return longestWord
}


console.log(getLongestWord(['help', 'me'])) // 'help'
console.log(getLongestWord(['I', 'need', 'candy'])) // 'candy'

// TASK 35
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
console.log("TASK 35")

const allEqual = (arr: any[]): boolean => {
    return arr.every(value => value === arr[0]) 
}


console.log(allEqual([true, true, true, true])) // true
console.log(allEqual(['test', 'test', 'test'])) // true
console.log(allEqual([1,1,1,2])) // false
console.log(allEqual(['10',10,10,10])) // false

// TASK 36
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
console.log("TASK 36")

const mergeArrays = (...args: any[]): any[] => {
    return [].concat(...args)
}


console.log(mergeArrays([1, 2, 3], [4, 5, 6])) // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(['a', 'b', 'c'], [4, 5, 6])) // ['a', 'b', 'c', 4, 5, 6]
console.log(mergeArrays([true, true], [1, 2], ['a', 'b'])) // [true, true, 1, 2, 'a', 'b']

// TASK 37
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
//Return the sorted array
// console.log("TASK 37")

// const sortObjArr = (arrObj: any[{}]): any[{}] => {
//     sortObjArr.sort((x,y) => {return x.price - y.price})

// }


// console.log(sortObjArr([{a:1,b:2},{a:5,b:4}])) // [{a:1,b:2},{a:5,b:4}]
// console.log(sortObjArr([{a:2,b:10},{a:5,b:4}])) // [{a:5,b:4},{a:2,b:10}]
// console.log(sortObjArr([{a:1,b:7},{a:2,b:1}])) // [{a:2,b:1},{a:1,b:7}]

// TASK 38
// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
console.log("TASK 38")

const delDuplicatesMerge = (arr1: number[], arr2: number[]): number[] => {
    let joinedArrs = arr1.concat(arr2);
    let noDuplicates = [...new Set(joinedArrs)];
    return noDuplicates.sort((a,b) => a-b);
}


console.log(delDuplicatesMerge([1, 2, 3], [3, 4, 5])) // [ 1, 2, 3, 4, 5 ]
console.log(delDuplicatesMerge([-10, 22, 333, 42], [-11, 5, 22, 41, 42])) // [ -11, -10, 5, 22, 41, 42, 333]

// TASK 39
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum
console.log("TASK 39")

const sumArr = (arr1: number[], num: number): number => {
    let count = 0;

    for (let n of arr1) {
        if (n > num) {
            count += n;
        }
    }

    return count;
}


console.log(sumArr([1, 2, 3, 4, 5, 6, 7], 2)) // 25
console.log(sumArr([-10, -11, -3, 1, -4], -3)) // 1
console.log(sumArr([78, 99, 100, 101, 401], 99)) // 602

// TASK 40
// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max
console.log("TASK 40")

const minMaxRange = (min: number, max: number): number[] => {
    let numArr = [];

    for (let i = min; i <= max; i++) {
        numArr.push(i)
    }
    
    return numArr;
}


console.log(minMaxRange(2, 10)) // [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(minMaxRange(1, 3)) // [1, 2, 3]
console.log(minMaxRange(-5, 5)) // [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
console.log(minMaxRange(2, 7)) // [2, 3, 4, 5, 6, 7]

// TASK 41
// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}
console.log("TASK 41")

const groupByLetter = (arr: string[]) => {
    const myObject: Record<string, any> = {}
  
    for (let i =0; i < arr.length; i++) {
    let currentWord = arr[i];
    let firstChar = currentWord[0].toLowerCase();
    let innerArr = [];
    if (myObject[firstChar as keyof typeof myObject] === undefined) {
       innerArr.push(currentWord);
       myObject[firstChar as keyof typeof myObject] = innerArr
    }else {
        myObject[firstChar as keyof typeof myObject].push(currentWord)
    }
  }
  return JSON.stringify(myObject)
}


console.log(groupByLetter(['Alf', 'Alice', 'Ben'])) // { a: ['Alf', 'Alice'], b: ['Ben']}
console.log(groupByLetter(['Ant', 'Bear', 'Bird'])) // { a: ['Ant'], b: ['Bear', 'Bird']}
console.log(groupByLetter(['Berlin', 'Paris', 'Prague'])) // { b: ['Berlin'], p: ['Paris', 'Prague']}

// TASK 42
// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array
console.log("TASK 42")

const appendArray = (arr: any[], num: number): any[] => {
    let arrCopy = [...arr];
    if (num < 6) {
        arrCopy.unshift(0)
    } else  {
        arrCopy.unshift(num)
    }

    return arrCopy
}


console.log(appendArray([1,2,3], 6)) // [6,1,2,3]
console.log(appendArray(['a','b'], 2)) // [0,'a','b']
console.log(appendArray([null,false], 11)) // [11,null,false]


// TASK 43
// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array
console.log("TASK 43")

const everyNthArray = (arr: number[], num: number): number[] => {
    let newArr = [];
    for(let i = num -1; i < arr.length; i += num) {
    newArr.push(arr[i]);
}
return newArr;
}


console.log(everyNthArray([1,2,3,4,5,6,7,8,9,10],3)) // [3,6,9]
console.log(everyNthArray([10,9,8,7,6,5,4,3,2,1],5)) // [6,1]
console.log(everyNthArray([7,2,1,6,3,4,5,8,9,10],2)) // [2,6,4,8,10]

// TASK 44
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
console.log("TASK 44")

type Country = {
    continent: string;
    country: string;
}

const countryCity = (obj: Country): string => {
    return obj.country
}


console.log(countryCity({ continent: 'Asia', country: 'Japan'})) // 'Japan'
console.log(countryCity({ country: 'Sweden', continent: 'Europe'})) // 'Sweden'

// TASK 45
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor
console.log("TASK 45")

type PropertyAccessor = {
    'prop-2': string | number,
    one?: number,
    prop?: string,
  }

const getProperty = (obj: PropertyAccessor): number | string => {
    return obj['prop-2']
}


console.log(getProperty({ one: 1, 'prop-2': 2})) // 2
console.log(getProperty({'prop-2': 'two', prop: 'test'})) // 'two'

// TASK 46
// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
console.log("TASK 46")

type Countries = {
    [key: string] : string,
}

const getCountry = (obj: Countries, str: string): string => {
    return obj[str]
}


console.log(getCountry({ continent: 'Asia', country: 'Japan'}, 'continent')) // 'Asia'
console.log(getCountry({ country: 'Sweden', continent: 'Europe'}, 'country')) // 'Sweden'

// TASK 47
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise
console.log("TASK 47")

type DigitLetter = {
    [key: string] : string | number,
}

const containsProperty = (obj: DigitLetter, str: string): boolean => {
    return obj.hasOwnProperty(str);
}

console.log(containsProperty({a:1,b:2,c:3},'b')) // true
console.log(containsProperty({x:'a',y:'b',z:'c'},'a')) // false
console.log(containsProperty({x:'a',y:'b',z:'c'},'z')) // true

// TASK 48
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object
console.log("TASK 48")

type Letter = {
    key: string
}

const addObjValue = (str: string): Object => {
    let letterObj: Letter = {key: str}
    return letterObj
}

console.log(addObjValue('a')) // {key:'a'}
console.log(addObjValue('z')) // {key:'z'}
console.log(addObjValue('b')) // {key:'b'}

// TASK 49
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object
console.log("TASK 49")

type NewObject = {
    [key: string] : string,

}

const addPropValue = (str1: string, str2: string): Object => {
    let obj: NewObject = {}
    obj[str1] = str2
    return obj
}

console.log(addPropValue('a','b')) // {a:'b'}
console.log(addPropValue('z','x')) // {z:'x'}
console.log(addPropValue('b','w')) // {b:'w'}

// TASK 50
// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object
console.log("TASK 50")

type ArrayObject = {
    [key: string] : string,

}

const arraysToObj = (arr1: any[], arr2: any[] ): Object => {
    let obj: NewObject = {}
    arr1.forEach((key, i) => obj[key] = arr2[i]);
    return obj
}

console.log(arraysToObj(['a','b','c'],[1,2,3])) // {a:1,b:2,c:3}
console.log(arraysToObj(['w','x','y','z'],[10,9,5,2])) // {w:10,x:9,y:5,z:2}
console.log(arraysToObj([1,'b'],['a',2])) // {1:'a',b:2}

// TASK 51
// Write a function that takes an object (a) as argument
// Return an array with all object keys
console.log("TASK 51")

type MyObject = {
    [key: string] : number,

}

const getObjKeys = (obj: MyObject): string[] => {
    return Object.keys(obj)
}

console.log(getObjKeys({a:1,b:2,c:3})) // ['a','b','c']
console.log(getObjKeys({j:9,i:2,x:3,z:4})) // ['j','i','x','z']
console.log(getObjKeys({w:15,x:22,y:13})) // ['w','x','y']

// TASK 52
// Write a function that takes an object (a) as argument
// Return the sum of all object values
console.log("TASK 52")

type NumObject = {
    [key: string] : number,

}

const sumObjValues = (obj: NumObject): number => {
    const numArr = Object.values(obj)
    let count = 0;
    
    for (let num of numArr) {
        count += num
    }
    return count
}

console.log(sumObjValues({a:1,b:2,c:3})) // 6
console.log(sumObjValues({j:9,i:2,x:3,z:4})) // 18
console.log(sumObjValues({w:15,x:22,y:13})) // 50

// TASK 53
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'
console.log("TASK 53")

type MyObject2 = {
    [key: string] : number,

}

const removeObjKey = (obj: MyObject2): Object => {
    delete obj.b
    return obj
}

console.log(removeObjKey({ a: 1, b: 7, c: 3 })) // { a: 1, c: 3 }
console.log(removeObjKey({ b: 0, a: 7, d: 8 })) // { a: 7, d: 8 }
console.log(removeObjKey({ e: 6, f: 4, b: 5, a: 3 })) // { e: 6, f: 4, a: 3 }

// TASK 54
// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'
console.log("TASK 54")

type MyObject3 = {
    [key: string] : number,

}

const fixObjects = (obj1: MyObject3, obj2: MyObject3): Object => {
    let bValue = obj2.b;
    delete obj2.b
    let mergedObj = {...obj1, ...obj2};
    mergedObj.d = bValue
    return mergedObj;
}

console.log(fixObjects({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })) // { a: 1, b: 2, c: 3, e: 5, d: 4}
console.log(fixObjects({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })) // { a: 5, b: 4, c: 3, e: 2, d: 1}

// TASK 55
// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object
console.log("TASK 55")

type MyObject4 = {
    [key: string] : number,

}

const multiplyObjValues = (obj: MyObject3, num: number): Object => {
    let multipliedObj: MyObject4 = {};
    for (const key in obj) {
        multipliedObj[key] = obj[key] * num;
    }
    return multipliedObj
}

console.log(multiplyObjValues({a:1,b:2,c:3},3)) // {a:3,b:6,c:9}
console.log(multiplyObjValues({j:9,i:2,x:3,z:4},10)) // {j:90,i:20,x:30,z:40}
console.log(multiplyObjValues({w:15,x:22,y:13},6)) // {w:90,x:132,y:78}

// TASK 56
// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
console.log("TASK 56")

type MyObject5 = {
    [key: string | number] : string | number,

}

const swapObjItems = (obj: MyObject5): Object => {
    let swappedObj: MyObject5 = {}
    Object.keys(obj).forEach(function(key){swappedObj[obj[key]]=key});
    return swappedObj;
}

console.log(swapObjItems({z:'a',y:'b',x:'c',w:'d'})) // {a:'z',b:'y',c:'x',d:'w'}
console.log(swapObjItems(({2:'a',4:'b',6:'c',8:'d'}))) // {a:'2',b:'4',c:'6',d:'8'}
console.log(swapObjItems({a:1,z:24})) // {1:'a',24:'z'}

// TASK 57
// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object
console.log("TASK 57")

type MyObject6 = {
    [key: string] : string,

}

const fillBlankObjects = (obj: MyObject6): Object => {
    Object.keys(obj).forEach(key => obj[key] = obj[key].trim() === '' ? null : obj[key])
    return obj

}

console.log(fillBlankObjects({ a: 'a', b: 'b', c: '' })) // { a: 'a', b: 'b', c: null }
console.log(fillBlankObjects(({ a: '', b: 'b', c: ' ', d: 'd' }))) // { a: null, b: 'b', c: null, d: 'd' }
console.log(fillBlankObjects({ a: 'a', b: 'b ', c: ' ', d: '' })) // { a: 'a', b: 'b ', c: null, d: null }

// TASK 58
// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in
console.log("TASK 58")

type Person = {
    [key: string | number] : string | number,
}    


const createPerson = (obj: Person): Object => {
    return {
    fn: obj.fn,
    ln: obj.ln,
    ...(obj.size && { size: `${obj.size}cm` }),
    ...(obj.weight && { weight: `${obj.weight}kg` }),
    };
}

console.log(createPerson({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})) // {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
console.log(createPerson(({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102}))) // {fn: 'Martin', ln: 'Harper', weight: '102kg'}
console.log(createPerson({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})) // {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}

// TASK 59
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array
console.log("TASK 59")

type CountryCity = [
    {
        city: string;
        country: string;
        continent? : string;
    },
    {
        city: string;
        country: string;
        continent? : string;
    }
]


const addContinent = (obj: CountryCity, str:string) => {
    let objCopy = [...obj]
    objCopy.forEach(function(item){
    item.continent = str;
    });
    return objCopy
}

console.log(addContinent([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')) 
// [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand',continent: 'Asia' }]
console.log(addContinent([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }],'Europe'))
 // { city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France',continent: 'Europe' }]

// TASK 60
// Write a function that takes an array of numbers as argument
// Convert the array to an object
// The corresponding object value should be the number of times the key occurs within the array
console.log("TASK 60")

type UniqueDigits = {
    [key: number] : number,
}    


const getUniqueDigits = (arr: number[]): Object => {
    const numObj: UniqueDigits = {}
    for (let num of arr) {
        numObj[num] = numObj[num] + 1 || 1 
    }
    return numObj
}

console.log(getUniqueDigits([1,2,2,3])) // {1:1,2:2,3:1}
console.log(getUniqueDigits([9,9,9,99])) // {9:3,99:1}
console.log(getUniqueDigits([4,3,2,1])) // {1:1,2:1,3:1,4:1}

// TASK 61
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise
console.log("TASK 61")

const compareDates = (date1: Date, date2: Date): boolean => {
   return date1.valueOf === date2.valueOf && date1.getTime() === date2.getTime()
}

console.log(compareDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))) // false
console.log(compareDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))) // true
console.log(compareDates(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))) // false

// TASK 62
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
console.log("TASK 62")

const daysBetweenDates = (date1: Date, date2: Date): number => {
    if (date1.getTime() > date2.getTime()) {
        return Math.floor((date1.getTime() - date2.getTime()) / (1000*60*60*24))
    }
    return Math.floor((date2.getTime() - date1.getTime()) / (1000*60*60*24))
}

console.log(daysBetweenDates(new Date('2020-06-11'), new Date('2020-06-01'))) // 10
console.log(daysBetweenDates(new Date('2000-01-01'), new Date('2020-06-01'))) // 7457

// TASK 63
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise
console.log("TASK 63")

const isSameDay = (date1: Date, date2: Date): boolean => {
    return date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();
}

console.log(isSameDay(new Date('2000/01/01'), new Date('2000/01/01'))) // true
console.log(isSameDay(new Date('2000/01/01'), new Date('2000/01/02'))) // false
console.log(isSameDay(new Date('2001/01/01'), new Date('2000/01/01'))) // false
console.log(isSameDay(new Date('2000/11/01'), new Date('2000/01/01'))) // false

// TASK 64
// Write a function that takes two number arrays as parameters
// and return an array which contains elements from both arrays
console.log("TASK 64")

const mergeTwoArrays = (arr1: number[], arr2: number[]): number[] => {
    const arrCopy = [...arr1, ...arr2]
    return arrCopy
}

console.log(mergeTwoArrays([1, 2], [3, 4])) // [1, 2, 3, 4]
console.log(mergeTwoArrays([1, 2], [3, 4, 5, 6])) // [1, 2, 3, 4, 5, 6]

// TASK 65
// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the last element
console.log("TASK 65")

const pushItemArr = (arr1: string[], str: string): string[] => {
    const arrCopy = [...arr1]
    arrCopy.push(str)
    return arrCopy
}

console.log(pushItemArr(['Apple', 'Orange', 'Banana'], 'Kiwi')) // ['Apple', 'Orange', 'Banana', 'Kiwi']

// TASK 66
// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the first element
console.log("TASK 66")

const unshiftItemArr = (arr1: string[], str: string): string[] => {
    const arrCopy = [...arr1]
    arrCopy.unshift(str)
    return arrCopy
}

console.log(unshiftItemArr(['Apple', 'Orange', 'Banana'], 'Kiwi')) // ['Kiwi', 'Apple', 'Orange', 'Banana']

// TASK 67
// Write a function that takes two objects as parameters
// and return an object which contains properties from both objects
console.log("TASK 67")

type MergeObjects = {
    [key: string] : number,
}    

const mergeTwoObjects = (obj1: MergeObjects, obj2: MergeObjects, ): Object => {
    const mergedObjects: MergeObjects = {...obj1, ...obj2}
    return mergedObjects
}

console.log(mergeTwoObjects({ a:1, b:2 }, { c:3, d:4 })) // { a:1, b:2, c:3, d:4 }
console.log(mergeTwoObjects({ a:1, b:2 }, { c:3, d:4, e:5, f:6 })) // { a:1, b:2, c:3, d:4, e:5, f:6 }

// TASK 68
// Write a function that takes an object and a string as parameters
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string
console.log("TASK 68")

type FavoriteMovie = {
    [key: string] : string | number,
}    

const getFavoriteMovie = (obj: FavoriteMovie, str: string): Object => {
    const objCopy: FavoriteMovie = {...obj}
    objCopy.favoriteMovie = str
    return objCopy
}

console.log(getFavoriteMovie({ eyeColor: 'green', age: 10 }, 'Garfield')) // { eyeColor: 'green', age: 10, favoriteMovie: 'Garfield' }
console.log(getFavoriteMovie({ eyeColor: 'blue', age: 15 }, 'Twilight')) // { eyeColor: 'blue', age: 15, favoriteMovie: 'Twilight' }








