import { useEffect, useState } from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = `71c17cb7`

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function fetchQuery(value = `matrix`, searchType = ``) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${value}${searchType}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search ? data.Search : []);
        setLoading(false);
      });
  }

  function movieSearchHanlder(val, type) {
    setLoading(true);
    let searchType = type === `` ? `` : `&type=${type}`;
    if (val === ``) return;
    fetchQuery(val, searchType)
  }

  useEffect(() => {
    fetchQuery()
  }, []);

  return (
    <main className="content container">
      <Search search={movieSearchHanlder} />
      {isLoading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
};

export default Main;
