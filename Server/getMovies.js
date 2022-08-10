const axios = require('axios');

module.exports = async function getMovies(){        
    let movieID = String(Math.floor((Math.random()*850000)+55));
    let APIURL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=47ed96bfd2a0f3012f38e2ad316b4068`;
    try{
        let response = await axios.get(APIURL)
        if (response.data.adult) throw 'Adult movie blocked';
        if (response.data.poster_path == null) throw 'Missing poster';
        let movieObject = {
            title: response.data.title, 
            overview: response.data.overview,
            imgSrc: `https://image.tmdb.org/t/p/w500${response.data.poster_path}`};
        if (movieObject.overview == null || movieObject.overview == '') movieObject.overview = 'Sinopse Indisponível';
        return JSON.stringify(movieObject);
    }
    catch(e){
        return getMovies();          
    }
}
