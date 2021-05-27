export async function fetchMovieData(pageNumber) {
  const apiKey = "f49309b9e4a2cdfe908f962a11b44de2";
  const apiUrl = `http://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${pageNumber}`;
  let result = await fetch(apiUrl);
  result = result.json();
  return result;
}
