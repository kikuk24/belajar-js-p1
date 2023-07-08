document.title = 'bersenandung dengan event';
body = document.body;
const btn1 = document.getElementById('bro');
const defaultBtn = 'MUASOKK!';
const btn2 = document.getElementById('slur');
const defaultBtn2 = 'BUAKKK AEH!'
const p = document.createElement('p');

btn1.textContent = defaultBtn;

btn1.addEventListener('dblclick', function () { //! addEventListener paling recomended untuk membuat event 
  console.log('aman slur');
  p.textContent = 'LOOOHH!'
  body.append(p);
});
btn2.textContent = defaultBtn2;

btn2.addEventListener('click', function () {
  p.removeChild('p');
})

