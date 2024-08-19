import axios from "axios";
axios.defaults.baseURL =
  "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDQ4ZGFkMmUwNzRkNGUwMDRkYzljZjk3ZDc5MDFhMyIsIm5iZiI6MTcyNDA3Mzg4Ni40MTM3MzQsInN1YiI6IjY2YzFiZTdlM2FkNzM2ZDQxZTAzZGI1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lDtzh1hiBtUgkcFvgsoVgO6gfVaaGm0-saguxE2_pJs",
  },
};

export const fetchTrendingMovies =
  async () => {
    const response = await axios.get(
      "trending/movie/day",
      options,
    );
    return response.data;
  };

export const fetchMovieByQuery = async (
  query,
) => {
  const response = await axios.get(
    `search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options,
  );
  return response.data;
};

export const fetchMovieDetails = async (
  id,
) => {
  const response = await axios.get(
    `movie/${id}`,
    options,
  );
  return response.data;
};

export const fetchMovieCast = async (
  id,
) => {
  const response = await axios.get(
    `movie/${id}/credits`,
    options,
  );
  return response.data.cast;
};

export const fetchMovieReview = async (
  id,
) => {
  const response = await axios.get(
    `movie/${id}/reviews`,
    options,
  );
  return response.data.results;
};