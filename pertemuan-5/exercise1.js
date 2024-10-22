//Buatlah fungsi untuk menghitung BMI (Body Mass Index)
//Rumus : BMI = berat / (tinggi * tinggi),
//berat dalam kg dan tinggi dalam meter
//170 cm = 1.7 m
//Fungsi tersebut menerima 2 parameter yaitu berat dan tinggi
//Dan mengembalikan output berupa BMI

function hitungBMI(berat, tinggi) {
    // Konversi tinggi dari cm ke m
    let tinggi= tinggi / 100;
    
    // Hitung BMI
    let bmi = berat / (tinggi * tinggi);
    
    return bmi.toFixed(2); // Return BMI dengan 2 angka di belakang koma
  }

let berat = 60; // kg
let tinggi = 170; // cm

let bmi = hitungBMI(berat, tinggi);
console.log("BMI:", bmi); // Output: BMI: 20.76