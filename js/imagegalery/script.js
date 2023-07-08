const jumbo = document.querySelector('.jumbo');
const x = document.querySelector('.x');

x.addEventListener('click', function (e) {
  console.log('bro');
  e.target.appendChild(jumbo);
})