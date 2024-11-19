import {bearerTokenMovies} from "../secrets/api"

export async function getBestMovies() {

    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: `Bearer ${bearerTokenMovies}` 
        }
    };
  const bestMoviesUri = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es&page=1&sort_by=popularity.desc"

  const bestMoviesData = await fetch(bestMoviesUri, options)
  const bestMoviesJson = await bestMoviesData.json();
  const {results} = bestMoviesJson;

  return results.map((movie) => {
    const {title, overview, vote_average, poster_path, id} = movie;
    const movieUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
    return {
        id,
        title,
        overview,
        vote_average,
        image: movieUrl
    }
  })
}
