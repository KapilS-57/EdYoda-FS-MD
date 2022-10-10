
var num = 20;
var numTwo = 25.25;

console.log(typeof (num));
console.log(typeof (numTwo));
// console.log(typeof());

//String
var firstName = 'Kapil';
var lastname = 'Sharma';

// properties and method 
console.log(firstName.length);//length property
console.log(lastName.indexOf('r'));
console.log(lastname.search('a'));
console.log(lastname.lastIndexOf('a'));

// extraxct of a string 
console.log(firstName.trim());//remove trailing and leading spaces
console.log(lastname.slice(1, 3));//1st index till 3rd index
console.log(lastname.slice(3));
console.log(lastname.replace('Sharma', 'Shmzz'));
console.log(lastname.replaceAll('Sharma', 'Shmzz'));

console.log(firstName.toLowerCase());
console.log(lastname.toUpperCase());

console.log(lastname.charAt(3));
console.log(lastname.charCodeAt(2));
console.log(typeof firstName);


console.log(parseInt(90.39));//return 90
console.log(parseFloat(90.39));// return 90.39
console.log(Number(' '));//0
console.log(typeof Number('89bh')); //number
console.log(Number(NaN));// NaN

//number to string
console.log(num.toString());// 20
console.log(num.toFixed(5));// 20.00000
console.log(num.toExponential(3)); //2.000e+1



//boolean
console.log(20 > 0);
console.log(20 < 0);
console.log(typeof (20 < 0));


//undefined
var val;
console.log(val);
console.log(typeof (val));

//null (no value or empty value)
var numVal = null;
console.log(numVal);// null
console.log(typeof (numVal));//object
