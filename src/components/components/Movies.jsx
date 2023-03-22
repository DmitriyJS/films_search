import Movie from "./Movie";

const Movies = (props) => {
    const {movies} = props;
     return (
           <div className="movies">
               { movies.length ? movies.map(movie => <Movie key = {movie.imdbID} {...movie} />) : <h2>Not found</h2>}
           </div>
     )
}

export default Movies