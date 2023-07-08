// callback sebuah function yang dikirimkan pada functionn yang lain
// sebuah fungsi yang fungsi lain seesain di jalankkan

// implementasi callback
// callback synchronus


function halo(nama) {
  alert(`hallo ${nama}`);;

}
function tampilkanPesan(callback) {
  const nama = prompt(`masukan nama : `);
  callback(nama);
}
tampilkanPesan(nama => alert(`halo ${nama}`));


const datas = [
  {
    nama: 'tirta afandi',
    age: '30',
    alamat: 'jauh',
  },
  {
    nama: 'kikuk afandi',
    age: '20',
    alamat: 'jauh',
  },
  {
    nama: 'zilka tirta',
    age: '20',
    alamat: 'jauh',
  },
];

console.log(`mulai`);
datas.forEach(data => console.log(data.nama));
console.log(`selesai`);



// asynchronous callback
// ajax vanilla java script

function getDatasays(url, succes, error) {
  let xhr = new XMLHttpRequest()

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4){
      if (xhr.status === 200) {
        succes(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  }

  xhr.open('get', url);
  xhr.send();
}

console.log(`mulai`);
getDatasays('data/says.json', result => {
  const says = JSON.parse(result);
  says.forEach(say => {console.log(say);
    
  });
},()=>{
});

console.log(`selesai`);


