import { useState } from "react";
import { NavLink } from "react-router";

export default function Search() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(true);
    const [query, setQuery] = useState("");

    const token = import.meta.env.VITE_TMDB_TOKEN;

    async function fetchMovieByTitle(title) {
        try {
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: `Bearer ${token}`
                }
              };
            
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`, options);
            const data = await response.json();
            setMovies(data.results);

        } catch (error) {
            console.error("Error fetching movie: ", error);
        }
        finally {
            setLoading(false);
        }
    }


    const handleSearch = () => {
        console.log(query)
        setLoading(true);
        setError(null);

        if (!query)
            setError("Please, enter a valid search term.");

        fetchMovieByTitle(query);
    }

    return (
        <div>
            <h1>Search</h1>
            <p>Search for a movie.</p>
            <div className="search-container">
                <input type="search" id="site-search" name="q" className="search-input" onChange={(e) => setQuery(e.target.value)} />
                <button onClick={handleSearch} className="search-button" disabled={loading}>Search</button>
            </div>
            {loading && <p>Loading...</p>}
            {movies.length == 0 && !loading && !error && <p>No movies found.</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="container">
            {movies.map(movie => (
                <NavLink to={`/movie/${movie.id}`} key={movie.id} className="nav-link">
                <div className="movie" key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <p>Release: {movie.release_date}</p>
                </div>
                </NavLink>
            ))}
            </div>
        </div>
    );
}