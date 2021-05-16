import axios from 'axios';

import { API_KEY } from 'API_KEY';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const base_url = 'https://image.tmdb.org/t/p/original';

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/discover/tv?api_key=${API_KEY}&languager=en-us`,
  fetchWarMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10752`,
  fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchWesternMovies: `/discover/tv?api_key=${API_KEY}&with_genres=37`,
  fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentMovies: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};

export default instance;
