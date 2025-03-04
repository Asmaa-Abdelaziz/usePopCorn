import { useEffect, useState } from "react";

export const useMovies = (query, callback) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const KEY = `f50b90db`;
  useEffect(() => {
    callback?.();
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );
        if (!res.ok)
          throw new Error("something went wrong with fetching movies");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");
        // console.log(data.Search);
        setMovies(data.Search);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    // handleCloseMovie();
    fetchMovies();
    return function () {
      controller.abort();
    };
  }, [query]);
  return {
    movies,
    isLoading,
    error,
  };
};
