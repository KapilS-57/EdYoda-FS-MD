
// var name ='kapil';

// if(name == 'kapil'){
//     console.log(true);
// }

// Operators
//  Arithmetic operators

var num = 10;
var numTwo = 20;
var sum = num + numTwo;
var sub = numTwo - num;
var mul = num * numTwo;
var mod = numTwo % num;
var divi = numTwo / num;

// increment and decrement
sub++;
sum--;
console.log(sub, sum);


var numVal = num--;
// numVal = num;//10
// num = num -1;//9
numVal++;//11
console.log(num, numVal);//9 11

var val = 100;
// Assignment operator
val += 5;  // val = val + 5
val -= 2;  // val = val - 2
val *= 2;  // val = val * 2
val /= 10; // val = val / 10


// String Operators

var str = 'Kapil';

console.log(2 * str); // NaN
console.log(str.repeat(10));
console.log('20' / 20);//  1
console.log('20' + 20); // 2020
console.log(0 / 0);// NaN
console.log(0 / 4); // 0
console.log(4 / 0); // Infinity
console.log(2 / ' '); // Infinity

console.log(typeof Infinity); //number

console.log(false / true); // 0
console.log(true / 4); //0.25



// --------------TASK---------------

//using conditional statements
//find the biggest of 3 numbers (89, 78, 56)

var num1 = 89, num2 = 78, num3 = 56;

if (num1 > num2 && num1 > num3) {
    console.log('Greatest No. is Num1 ' + num1);
} else if (num1 < num2 && num2 > num3) {
    console.log('Greatest no. is Num2 ' + num2);
} else {
    console.log('Greatest no. is Num3 ' + num3)
}


// Implicit coersion:
//practice questions on implicit coersion
// console.log('A' - 1);// NaN
// console.log('A' + 1);//A1 
// console.log(2 + '2' + '2');// 222
// console.log('hello' + 'world' + 89);// helloworld89
// console.log('hello' - 'world' + 89);// NaN
// console.log('hello' + 78);// hello78
// console.log('78' - 90 + '2');// NaN X   -122
// console.log(2 - '2' + 90);// NaN X        90 
// console.log(89 - '90' / 2);// NaN X       44
// console.log(true == false) > 2  // false

// practice on pre & post

// //
// var numVal = 30;
// var u = --numVal;
// numVal++;
// console.log(u);// 29
// console.log(numVal);// 30 


// var a = 40;
// var b = a++;
// b++;
// console.log(a);// 41
// console.log(b);// 41


// var f = 50;
// var g = f++;
// g--;
// console.log(g);//  49
// console.log(f);// 51


// var val = 10;
// val++;
// var h = --val;
// h++;
// console.log(h);// 11 
// console.log(val); //10


// var num = 20;
// num++;
// var t = ++num;
// num++;
// --num
// console.log(num, t);// 22 22


// var num = 10;
// --num;
// var y = ++num + 10;
// --y;
// console.log(y); // 19
// console.log(num);// 10


// var num = 30;
// ++num; 
// num++ - 10;
// console.log(num); //32