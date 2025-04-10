import { useState, useEffect } from "react";
import { NavLink }  from "react-router";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const token = import.meta.env.VITE_TMDB_TOKEN;

    useEffect(() => {
        async function fetchMovies() {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                      accept: 'application/json',
                      Authorization: `Bearer ${token}`
                    }
                  };
                
                const response = await fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US", options);
                const data = await response.json();

                console.log(data.results)

                setMovies(data.results);
            }
            catch (error) {
                setError(error);
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        }

        fetchMovies();

    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            <h1>Welcome to the MovieDB!</h1>
            <p>Find trending movies below. Click on a movie to see the details:</p>
            <div className="container">
            {movies.map(movie => (
                <NavLink to={`/movie/${movie.id}`} key={movie.id} className="nav-link">
                    <div className="movie" key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <p>Release date: <strong> {movie.release_date}</strong></p>
                    </div>
                </NavLink>
            ))}
            </div>
        </div>
    );
}