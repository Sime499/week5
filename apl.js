const postUL = document.getElementById("postUL")
const btn = document.getElementById("button")
let request = new XMLHttpRequest()



function showMovieDetails(btn) {
    const movieId = btn.getAttribute('data-movieId')

    const selectedMovieUrl = `http://www.omdbapi.com/?i=insertSelectedimdbIDhere&apikey=26dd8f88`

    console.log(selectedMovieUrl) // see if this url works 
}


request.addEventListener('load', function() {


    const result = JSON.parse(this.responseText)
    console.log(result)
    console.log(result.Title)
    console.log(result.Poster)

    postItems = result.Search.map((movie) => {

        return `<div class="wrapper">
                    <img class="poster" src="${movie.Poster}"  alt="movie" style="width:20%"/>
                    <b>${movie.Title}</b>
        <button data-movieId = '${movie.title}' onClick = "showMovieDetails(this)">Show Detail</button>
        </div>`
    })

    postUL.innerHTML = postItems.join("")
})
request.open('GET', 'http://www.omdbapi.com/?s=batman&apikey=26dd8f88');
request.send()