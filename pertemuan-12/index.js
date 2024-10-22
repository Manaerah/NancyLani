// //string literal, arrow function &
// //default parameter 

// //string literal
// let fullName = "jon doe";
// let age = "24";
// let address = "manado";


// let kalimat = "hallo saya" + fullName + "umur saya" + age + "dan saya tinggal di" + address;
// console.log(kalimat);

// let kalimat2 = 'hallo saya' + ${fullName}, + 'umur saya' + ${age}, + 'dan saya tinggal di' + ${address};
// console.log(kalimat2);

// //2. arrow function
// function sayGreetings(fullName){
//     return 'hello my name is {fullName}';
// }
// console.log(sayGreetings);

// // arrow function pada IIFE
// let output = (() => "hello"());
// console.log(output);

// // arrow function pada callback
// let number
// const sayGreetings

//exsercise

//Ubahlah syntax ES5 berikut ke dalam ES6

//1
function calculateAge(birthYear){
return 2019 - birthYear;
}

function yearUntilRetirement(object){
	var age = calculateAge(object.year);
 	var retirement = 60 - age;
}
if(retirement > 0){
    console.log(`${firstName} retires in ${retirement} years`) 
    console.log(`${firstName} is already retired.`);
  }

yearUntilRetirement({year: 1987, firstName: 'John'});

//2.
const addNumber = (numbers) => numbers.reduce((sum, num) => sum + num, 0);

console.log(addNumber(1,2,3,4,5,6,7));

//3.

var phi = 3.14;
var power = 2;
var radius = 0;

var calculateArea = function (obj) {
  return phi * Math.pow(obj.radius, obj.power);
};

radius = 21;
var area21 = calculateArea({radius: radius, power: 2 });

radius = 7;
var area7 = calculateArea({radius: radius, power: 2 });

console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);

// 4.
const makeAjaxRequest = (url, method = 'GET') => {
console.log(url, method);
}

 makeAjaxRequest('www.google.com');