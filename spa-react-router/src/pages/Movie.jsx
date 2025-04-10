import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function Movie() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    const token = import.meta.env.VITE_TMDB_TOKEN;


    useEffect(() => {
        async function fetchMovie() {
            try {

                const options = {
                    method: 'GET',
                    headers: {
                      accept: 'application/json',
                      Authorization: `Bearer ${token}`
                    }
                  };
                

                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
                const data = await response.json();
                setMovie(data);

            } catch (error) {
                console.error("Error fetching posts: ", error);
            }
            finally {
                setLoading(false);
            }
        }

        fetchMovie();

    }, [movieId]);


    if (loading) {
        return <p>Loading...</p>;
    }


    if (!movie) {
        return <p>Movie not found</p>
    }


    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>Release date: <strong>{movie.release_date}</strong></p>
            <p>Vote count: <strong>{movie.vote_count}</strong> </p>
        </div>
    );
}