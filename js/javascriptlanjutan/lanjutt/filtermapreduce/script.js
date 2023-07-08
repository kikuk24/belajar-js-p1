// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));
// pilih yang javascript lanjutan
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

  // ambil durasi masing-masing video
  .map(item => item.dataset.duration)
  // ubah durasi menjadi float, ubah menit menjadi detik
  .map(waktu => {
    // 10:30 diubah jadi [10,30] dengan cara dispit
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1]
  })
  // jumlahkan semua detiknya
  .reduce((total, detik) => total + detik);
// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;
// simpan di dom

const pDur = document.querySelector('.total-durasi');
pDur.textContent = `${jam} Jam ${menit} Menit ${detik} Detik`;

const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

const PjmlVideo = document.querySelector('.jumlah-video');
PjmlVideo.textContent = jmlVideo;  

 

















