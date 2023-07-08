console.log(`mulai`);
$.ajax({
  url: 'data/saysjson',
  success: (says) => {
    says.forEach(say => console.log(say));
  },
  error: (e) => {
     console.log(e.responseText);
  }
   
})



console.log(`selesai`);