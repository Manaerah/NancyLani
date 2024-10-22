//rest parameter & speread operator
//1.Rest parameter

//tanpa rest parmeter
const func1 = (param1, param2, param3)=>{
    console.log(param1, param2, param3);
};
 func1("A", "B", "C", "D", "E");

 //dengan rest parameter
const func2 = (...params) => {
    console.log(params)
}

//rest parameter harus berada di parameter terakhir
func2("A", "B", "C", "D", "E");
const func3 = (param1, param2, ...params) => {
    console.log(param1)
    console.log(params)
}

//mini exercise
//1.ubah dengan menggukan rest parameter
const penjumlahan = (a, b, c, d, e) => {
    let arr = (a, b, c, d, e);
    let hasil = 0;
    arr.array.forEach((item) => (hasil += item));
    returnhasil;
}

console.log(penjumlahan(1, 2, 3, 4, 5));

//ketika sudah di ubah ke rest
const penjumlahan = (...arr) => {
    let hasil = 0;
    args.forEach((item) => (hasil += item));
    return hasil;
}

console.log(penjumlahan(1, 2, 3, 4, 5));

//2.spread operator
//array
let numbers = (1, 2, 3, 4, 5);
console.log(numbers);
console.log(...numbers);

//1.saat duplikasi array 
let numbers2 =[...numbers];
console.log(numbers2);

//2.menggabungkan array 
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let numbers3 = array1.concat(array2, array3);
let numbers4 = [...array1, ...array2, ...array3];

//object 
//1.duplikat 
const jon = {
    fullName: "jon doe",
    age: 30,
};

const jon2 = {...jon, ...30, ...manado,}