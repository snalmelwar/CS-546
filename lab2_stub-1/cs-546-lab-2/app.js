import { sortAndFilter, merge, matrixMultiply} from "./arrayUtils.js";
import {palindromes, censorWords, distance} from "./stringUtils.js";
import { areObjectsEqual, calculateObject, combineObjects } from "./objectUtils.js";

let people = [ 
    {name: 'Ryan', age: '22', location: 'Hoboken', role: 'Student'}, 
    {name: 'Matt', age: '21', location: 'New York', role: 'Student'},
    {name: 'Matt', age: '25', location: 'New Jersey', role: 'Student'}, 
    {name: 'Greg', age: '22', location: 'New York', role: 'Student'}, 
    {name: 'Mike', age: '21', location: 'Chicago', role: 'Teacher'} ]; 
    
 
try {
    // Should Pass
    const sortAndFilterOne = sortAndFilter(people, ['name', 'asc'], ['location', 'asc'], 'role', 'Student');
    console.log('sortAndFilterOne passed successfully');
 } catch (e) {
    console.error('sortAndFilterOne failed test case');
 }
 try {
    // Should Fail
    const sortAndFilterTwo = sortAndFilter(people, ['name', 'aasc'], ['location', 'asc'], 'role', 'Student');
    console.error('sortAndFilterTwo did not error');
 } catch (e) {
    console.log('sortAndFilterTwo failed successfully');
 }

 try {
    // Should Pass
    const mergeOne = merge([3,0,"Lab2",2,"Aiden"], ["CS-546" ,"Computer Science",8,15], [6,3,"!Patrick",25,29]);
    console.log('mergeOne passed successfully');
 } catch (e) {
    console.error('mergeOne failed test case');
 }
 try {
    // Should Fail
    const mergeTwo = merge ([3,0,"Lab2",2,"Aiden"], ["CS-546" ,"Computer Science",8,15], {abc: 1, cde: 2});
    console.error('mergeTwo did not error');
 } catch (e) {
    console.log('mergeTwo failed successfully');
 }

try {
   // Should Pass
   const matrixMultiplyOne = matrixMultiply([ [2,3], [3,4], [4,5] ], [ [1,1,1], [2,2,2] ], [ [3], [2], [1] ]);
   console.log('matrixMultiplyOne passed successfully');
} catch (e) {
   console.error('matrixMultiplyOne failed test case');
}
try {
   // Should Fail
   const matrixMultiplyTwo = matrixMultiply ([1,2], [3,3]);
   console.error('matrixMultiplyTwo did not error');
} catch (e) {
   console.log('matrixMultiplyTwo failed successfully');
}

try {
   // Should Pass
   const palindromesOne = palindromes(["Madam", "Loot", "Was it a cat I saw?", "Poor Dan is in a droop", "Anna", "Nope" ]);
   console.log('palindromesOne passed successfully');
} catch (e) {
   console.error('palindromesOne failed test case');
}
try {
   // Should Fail
   const palindromesTwo = palindromes ([1,2], [3,3]);
   console.error('palindromesTwo did not error');
} catch (e) {
   console.log('palindromesTwo failed successfully');
}

try {
   // Should Pass
   const censorWordsOne = censorWords ("I like bread that has chocolate chips in it but I do not like lollipops", ["bread","chocolate","pop"]);
   console.log('censorWordsOne passed successfully');
} catch (e) {
   console.error('censorWordsOne failed test case');
}
try {
   // Should Fail
   const censorWordsTwo = censorWords ("I like bread that has lollipops", ["bread","chocolate","pop"]);
   console.error('censorWordsTwo did not error');
} catch (e) {
   console.log('censorWordsTwo failed successfully');
}

try {
   // Should Pass
   const distanceOne = distance("The brown fox jumped over the lazy dog", "fox", "dog");
   console.log('distanceOne passed successfully');
} catch (e) {
   console.error('distanceOne failed test case');
}
try {
   // Should Fail
   const distanceTwo = distance("The brown fox jumped over the lazy dog", "dog", "fox");
   console.error('distanceTwo did not error');
} catch (e) {
   console.log('distanceTwo failed successfully');
}

const forth = {a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"};
const fifth  = {c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}};
const sixth = [1,2,3,4]

try {
   // Should Pass
   const areObjectsEqualOne = areObjectsEqual(forth, fifth);
   console.log('areObjectsEqualOne passed successfully');
} catch (e) {
   console.error('areObjectsEqualOne failed test case');
}
try {
   // Should Fail
   const areObjectsEqualTwo = areObjectsEqual(sixth);
   console.error('areObjectsEqualTwo did not error');
} catch (e) {
   console.log('areObjectsEqualTwo failed successfully');
}

try {
   // Should Pass
   const calculateObjectOne = calculateObject({ a: 3, b: 7, c: 5 }, [(n => n * 2), (n => Math.sqrt(n))]);
   console.log('calculateObjectOne passed successfully');
} catch (e) {
   console.error('calculateObjectOne failed test case');
}
try {
   // Should Fail
   const calculateObjectTwo = calculateObject({ a: 'Hello', b: 7, c: false }, [(n => n * n)]);
   console.error('calculateObjectTwo did not error');
} catch (e) {
   console.log('calculateObjectTwo failed successfully');
}

try {
   // Should Pass
   const combineObjectsOne = combineObjects(
      { a: 3, b: 7, c: 5 },
      { d: 4, e: 9 },
      { a: 8, d: 2 }
    );
   console.log('combineObjectsOne passed successfully');
   
} catch (e) {
   console.error('combineObjectsOne failed test case');
}
try {
   // Should Fail
   const combineObjectsTwo = combineObjects(
      { wow: 'crazy', super: 'duper'},
      false
    );
   console.error('combineObjectsTwo did not error');
} catch (e) {
   console.log('combineObjectsTwo failed successfully');
}