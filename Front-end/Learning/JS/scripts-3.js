console.log(true && false);
console.log(true || false);

console.log("string" ? true : false);//true 
console.log("" ? true : false);//false

console.log(0 ? true : false);
console.log("0" ? true : false);

console.log(parseInt("123xyz"));
console.log(parseInt("A123xyz"));

var input = 7;

var output1 = ++input + ++input + ++input;
var output2 = input++ + input++ + input++;
var output3 = input++ + ++input + input++;
console.log(output1 + ' ' + output2 + ' ' + output3);

var a = 10;
var b = 5;
var c = 12;
var e = 8;
var d;

d = parseInt((a * (c - b) / e + (b + c)) <= (e * (c + a) / (b + c) + a));
console.log(d);
if (d == 1) {
    console.log(parseInt(a * (c - b) / e + (b + c)));
} else {
    console.log(parseInt((e * (c + a) / (b + c) + a)));
}

var valA = "true";
var valB = "false";

var valC = true;
var valD = false;

console.log(!!valA == !!valB);
console.log(!!valC == !!valD);

