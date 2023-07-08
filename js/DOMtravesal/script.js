// const close = document.querySelector('.close');// berlaku untuk katru pertama saja
// const card = document.querySelector('.card');



// //?  menggunakan css
// close.addEventListener('click', function () {
//   card.style.display = 'none';
// });

//! dom traversal == parentElement

//ambil semua tombol closenya
const close = document.querySelectorAll('.close');
// menggunakan loopping

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener('click', function(e){
//     //TELUSURI PARRENTNYA
//     // *close[i].parentElement.style.display = 'none';
//     e.target.parentElement.style.display = 'none';




//   })
  
// }
// menggunakan foreach
// close.forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.target.parentElement.style.display = 'none';
//     e.preventDefault()
   // e.stopPropagation()//agar function card tidak berjalan
//  })
//});
// ini disebut event handling


// const cards = document.querySelectorAll('.card');
// cards.forEach(function (card) {
//   card.addEventListener('click', function (e) {
//     alert('ok');
//   });
// });



