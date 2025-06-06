const API_KEY = "662d74295460dca83b7f52747d84189b";

export const FetchDataFromApi = () => {
  return `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`;
};
export const searchMovies = (data) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${data}`;
};
export const filterGenres = (data) => {
  return `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${data}`;
};

export const filterByYear = (data) => {
  return `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&primary_release_year=${data}`;
};

export const getGenres = () => {
  return `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
};
export const getTvGenres = () => {
  return `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US`;
};


