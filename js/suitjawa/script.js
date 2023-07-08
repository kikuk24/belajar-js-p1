document.title = 'HAMSUT';

function getPilihanKomputer() {
  const comp = Math.random();// untuk menghasilkan angka random dari 0 sampai 10

  //! program normal
/* var comp = Math.random();

    if( comp < 0.34 ) {
        comp = 'gajah';
    } else if( comp >= 0.34 && comp < 0.67 ) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }*/
  // ! di sederhanakan
  // !ketika kita pakai return tidak perlu lagi yang namanya if else

  if (comp < 0.34) return 'gajah';
  if (comp >= 0.34 && comp < 0.67) return 'orang';
  return 'semut';
}

function getHasil(comp,player) {
  // if (p == comp) {
  //   hasil = 'SERI!';
  // } else if (p == 'gajah') {
  //   hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
  // } else if (p == 'orang') {
  //   hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
  // } else if (p == 'semut') {
  //   hasil = (comp == 'orang') ? 'KALAH' : 'MENANG!';
  // }

  if (player == comp)  return 'SERI!';
  if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
  if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
  if (player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG!';
}

const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click', function () {
  const pilihanKomputer = getPilihanKomputer();
  const pilihanPlayer = pGajah.className //! karena nama di html sama bisa kita manfaatkan
  const hasil = getHasil(pilihanKomputer, pilihanPlayer);


  const imgkomputer = document.querySelector('.img-komputer');
  imgkomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

  const tampilHasil = document.querySelector('.info');
  tampilHasil.textContent = hasil;
});


const pOrang = document.querySelector('.orang');
pOrang.addEventListener('click', function () {
  const pilihanKomputer = getPilihanKomputer();
  const pilihanPlayer = pOrang.className //! karena nama di html sama bisa kita manfaatkan
  const hasil = getHasil(pilihanKomputer, pilihanPlayer);


  const imgkomputer = document.querySelector('.img-komputer');
  imgkomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

  const tampilHasil = document.querySelector('.info');
  tampilHasil.textContent = hasil;
});

const pSemut = document.querySelector('.semut');
pSemut.addEventListener('click', function () {
  const pilihanKomputer = getPilihanKomputer();
  const pilihanPlayer = pSemut.className //! karena nama di html sama bisa kita manfaatkan
  const hasil = getHasil(pilihanKomputer, pilihanPlayer);


  const imgkomputer = document.querySelector('.img-komputer');
  imgkomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

  const tampilHasil = document.querySelector('.info');
  tampilHasil.textContent = hasil;
});