// function exspression

let namaBuah =  function (nama) {
  console.log(`ini buah ${nama} menggunakan fungsi exspresi`);
}

namaBuah(`Semangka`);

// arrow function
// tanpa parameter
let tanpilNama = () => 'hello world';

// satu parameter
let tanpilPesan = nama => {
  `Halo ${nama} menggunakan arrow function`
}

tanpilPesan(`afandi`);
// lebih dari satu parameter
let gabungan = (nama, namaBuah) => {
  console.log(`${nama} makan buah ${namaBuah}`);
}

gabungan('tirta', 'semangka');






let nameFamily = ['Tirta Afandi', 'Rahmalika Aumara Zilka', 'Alisya Zehra Afandi'];

let jumlahHuruf = nameFamily.map(nama => ({ nama, jumlHrf: nama.length }));
console.table(jumlahHuruf);

















