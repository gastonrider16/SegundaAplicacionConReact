import movies from './movies.json';
export function MoviesGrid() {
    console.log(movies);
    return(
    <ul>
        {movies.map(
            function(movie){
                return <li>{movie.title}</li>
            }
            )
        }
    </ul>
    );
}
