// const requests = {
//   fetchNowPlaying: "movie/now_playing",
//   fetchNetflixOriginals: "discover/movie?with_networks=213",
//   fetchTopRated: "/movie/top_rated",
//   fetchActionMovies: "discover/movie?with_genres=28",
//   fetchTrending: "/trending/all/week",
//   fetchComedyMovies: "discover/movie?with_genres=35",
//   fetchHorrorMovies: "discover/movie?with_genres=27",
//   fetchRomanceMovies: "discover/movie?with_genres=10749",
//   fetchDocumentaries: "discover/movie?with_genres=99",
// };

const requests = {
  fetchNowPlaying: "/movie/now_playing",
  fetchNetflixOriginals: "/discover/movie?with_networks=213",
  fetchTopRated: "/movie/top_rated",
  fetchTrending: "/trending/all/week",
  fetchActionMovies: "/discover/movie?with_genres=28",
  fetchComedyMovies: "/discover/movie?with_genres=35",
  fetchHorrorMovies: "/discover/movie?with_genres=27",
  fetchRomanceMovies: "/discover/movie?with_genres=10749",
  fetchDocumentaries: "/discover/movie?with_genres=99",
};

export default requests;
