import movies from './movies.json';
import {MovieCard} from './MovieCard';
export function MoviesGrid() {
    return(
    <ul>
        {movies.map( //movies es un arreglo
            (movie) => ( //=> ARROW FUNCTION
               <MovieCard key={movie.id} movie={movie}/>  //AGREGO KEY PARA MEJOR RENDIMIENTO ASI EVITO RENDERIZAR CONSTANTEMENTE
            )
            )
        }
    </ul>
    );
}
