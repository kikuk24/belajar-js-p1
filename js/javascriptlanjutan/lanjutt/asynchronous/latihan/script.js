$.ajax({
  URL: 'http://www.omdbapi.com/?i=tt3896198&apikey=c8a80e57=avengers',
  success: result => {
    const movies = result.Search;
    let cards = '';
    movies.forEach(m => {
      cards += `<div class="col-md-4 my-5">
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="" alt="">
            <div class="card-body">
              <h5 class="card-title">Avengers</h5>
              <h6 class="card-subtitle mb-2 text-muted">Tahun terbit</h6>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>`;
    });
    $('.movie-container').html(cards);
  },
  error: (e) => {
    console.log(e.responseText);
  }
})