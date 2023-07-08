// membuat object
// ? 1. obejct literall
//! untuk object tidak banyak

// let saya = {
//   nama: 'Kikuk afandi',
//   alamat: 'jauh',
//   kenyang: 0,
//   makan: function (porsi) {
//     this.kenyang = this.kenyang + porsi;
//     console.log(this.nama, 'Selammat makan');
//   }
// }

// * 2. function deklaration
//! method object
const x = {
  makan: function (porsi) {
    this.kenyang += porsi;
    console.log(this.nama, 'mantap');
  },

  main: function (jam) {
    this.kenyang -= jam;
    console.log(this.kenyang, 'mantap');
  },
  tidur: function (jam) {
    this.kenyang += jam * 2;
    console.log(this.nama , 'leugaaa');
  }
}

function saya (nama,kenyang) {
  let saya = Object.create(x); //Object.create()untuk menambahkan method ke object
  saya.nama = nama;
  saya.kenyang = kenyang;

  
  return saya;
}

let Kikuk = saya('kikuk',20);



//! 3. construktor  function
// keyword new


// function bang(nama,pintar) {
//   this.bang = {}
//   this.nama = nama;
//   this.pintar = pintar;
//   this.belajar = function(jam) {
//     this.pintar += jam;
//     console.log(this.nama, 'Pintar');
//   }
//   this.malas = function (jam) {
//     this.pintar -= jam;
//     console.log(this.nama ,'GOBLOK');
//   }

// }

// let afandi = new bang('afandi', 50);



