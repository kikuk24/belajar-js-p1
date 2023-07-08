//* lexical scope
// function init() {
//   let nama = `kikuk`; // local variabel
//   function tanpilNama() { //inner function (closure*)
//     console.log(nama); //akses ke parrent variable
//   }
//   tanpilNama();
// }
// init();

//factory function

// function init() {
//   function tanpilNama(nama) {
//     console.log(nama);
//   }
//   return tanpilNama;
// }

// let panggilNama = init();
// panggilNama('saya');

// atau
// function init() {
//   return function(nama) {
//     console.log(nama);
//   }
// }

// let panggilNama = init();
// panggilNama('saya');

function ucapanSalam(waktu) {
  return function (nama) {
    console.log(`halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan`);
  }
}
let pagi = ucapanSalam("pagi");
let siang = ucapanSalam("siang");
let sore = ucapanSalam("sore");
siang(`kikuk`);
