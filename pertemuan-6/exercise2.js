(function() {
    function hitungBMI(berat, tinggi, callback) {
      let bmi = berat / (tinggi * tinggi);
      callback(bmi);
    }
  
    hitungBMI(60, 1.5, function(bmi) {
      console.log("BMI Anda adalah: " + bmi);
    });
  })();




(function(weight, height) {
    let bmi = weight / (height * height);
    console.log("Your BMI is: " + bmi);
})(60, 1.50); // Argumen berat dalam kg dan tinggi dalam meter