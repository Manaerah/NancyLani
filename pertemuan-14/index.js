
// //1. Destructuring Array
// const fruits = ["apple", "banana", "orange"];
// const [firstFruit, secondFruit, thirdFruit] = fruits;

// console.log(firstFruit);
// console.log(secondFruit);
// console.log(thirdFruit);

// // Destructuring Object
// const person = {
//     name: "Lani",
//     age: 21,
//     gender: "famale"
// };

// const {name, age, gender} = person;

// console.log(name);
// console.log(age);
// console.log(gender);

// //2. Destructuring sebagian item dari array
// const colors = ["red", "blue", "green", "yellow"];
// const [firstColor, , thirdColor] = colors;

// console.log(firstColor);
// console.log(thirdColor);

// // Destructuring sebagian properti dari object
// const car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020,
//     color: "white"
// };

// const { brand, model } = car;

// console.log(brand);
// console.log(model);


// //3. Destructuring dengan default value
// const animals = ["dog", "cat"];
// const [firstAnimal, secondAnimal, thirdAnimal = "rabbit"] = animals;

// console.log(firstAnimal);
// console.log(secondAnimal);
// console.log(thirdAnimal); 


// // Destructuring dengan default value pada objek
// const user = {
//     username: "Nancy"
// };

// const { username, age = 21 } = user;

// console.log(username);
// console.log(age);


// //4. Destructuring dengan rest operator pada array
// const numbers = [1, 2, 3, 4, 5];
// const [firstNumber, secondNumber, ...restNumbers] = numbers;

// console.log(firstNumber); 
// console.log(secondNumber);
// console.log(restNumbers);

// // Destructuring dengan rest operator pada objek
// const userData = {
//     id: 1,
//     name: "Lani",
//     email: "lani@example.com",
//     age: 21
// };

// const { name, email, ...restData } = userData;

// console.log(name);
// console.log(email); 
// console.log(restData);


const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
};

makeAjaxRequest('www.google.com');