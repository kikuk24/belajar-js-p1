// ! menggunaan prototipe ihariten/warisan
// function slur(nama, pintar) {
//   this.nama = nama;
//   this.pintar = pintar;

// }

// slur.prototype.belajar= function (jam) {
//   this.belajar += jam;
//   return `halo ${this.nama}, pintar `;
// }



// let zilka = new slur('zilka', 100);

//! mengguakan class pada object

class ayang{
  constructor(nama, cinta) {
    this.nama = nama;
    this.cinta = cinta;
  }
  kiss(banyak) {
    this.cinta += banyak;
    return `sayang ${this.nama}`;
  }
}

let zilka = new ayang(`zilka`, 50);

// method adalah prototype dari sebuah object