class Orang {
    constructor(namaDepan, berat, tinggi) {
      this.namaDepan = namaDepan;
      this.berat = berat; // dalam kg
      this.tinggi = tinggi; // dalam meter
      this.BMI = this.hitungBMI();
    }
  
    hitungBMI() {
      const bmi = this.berat / (this.tinggi ** 2);
      let kategori;
  
      if (bmi < 18.5) {
        kategori = "Kurus";
      } else if (bmi < 25) {
        kategori = "Normal";
      } else if (bmi < 30) {
        kategori = "Gemuk";
      } else {
        kategori = "Obesitas";
      }
  
      return {
        nilai: bmi.toFixed(2),
        kategori: kategori
      };
    }
  }
  
  // Contoh penggunaan
  const orang = new Orang("John", 70, 1.7);
  console.log(orang);
  console.log(`Halo, saya ${orang.namaDepan}. Berat saya ${orang.berat} kg dan tinggi saya ${orang.tinggi} m.`);
  console.log(`BMI saya adalah ${orang.BMI.nilai} (${orang.BMI.kategori})`);


