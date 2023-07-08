// template litterals
// milti-line stinngs

console.log(`string 1
string 2`);

const mhs = {
  nama: 'afandi',
  nrp: '222222'
};
//multi-line html fragments 1
let el = ''
el += `div class ="msh"> `;
el += `<h2>` + mhs.nama + ` </h2>`;
el += `<span class ="nrp">` + mhs.nama + `</span>`;
el += `</div>`;

console.log(el);

// multi-line html fragmens 2
let el2 = `<div class"mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el2);