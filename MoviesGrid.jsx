import movies from './movies.json';
export function MoviesGrid() {
    return(
    <ul>
        {movies.map( //movies es un arreglo
            (movie) => ( //=> ARROW FUNCTION
               <li>{movie.title}</li> 
            )
            )
        }
    </ul>
    );
}
