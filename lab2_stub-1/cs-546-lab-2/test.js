import { sortAndFilter, merge, matrixMultiply} from "./arrayUtils.js";
import {palindromes, censorWords, distance} from "./stringUtils.js";
import { areObjectsEqual, calculateObject, combineObjects } from "./objectUtils.js";

sortAndFilter([{name: 'Bruno', breed: 'Bulldog', age: '4', eyeColor: 'brown', furColor: 'white'}, 
{name: 'Ella', breed: 'German Shepherd', age: '8', eyeColor: 'brown', furColor: 'black'}, 
{name: 'Thor', breed: 'Siberian Husky', age: '2', eyeColor: 'blue', furColor: 'white'}, 
{name: 'Roxy', breed: 'German Shepherd', age: '5', eyeColor: 'green', furColor: 'black'}, 
{name: 'Atlas', breed: 'Pug', age: '4', eyeColor: 'brown', furColor: 'brown'}], ['furColor', 'desc'], ['age', 'asc'], 'breed', 'German Shepherd');

//console.log(censorWords("Is mayonnaise an instrument? Did you smell it? That smell. A kind of smelly smell. The smelly smell that smells...smelly.", ["strum", "smell", "mayo"]));

console.log (calculateObject({ a: 3, b: 7, c: 5 }, [(n => Math.pow(n * 2, 3)), (n => n + 546), (n => n / Math.PI)]) );
