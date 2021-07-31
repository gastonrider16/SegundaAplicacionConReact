import movies from './movies.json';
import {MovieCard} from './MovieCard';
import styles from './MoviesGrid.module.css';
export function MoviesGrid() {
    return(
    <ul className={styles.moviesGrid}>
        {movies.map( //movies es un arreglo
            (movie) => ( //=> ARROW FUNCTION
               <MovieCard key={movie.id} movie={movie}/>  //AGREGO KEY PARA MEJOR RENDIMIENTO ASI EVITO RENDERIZAR CONSTANTEMENTE
            )
            )
        }
    </ul>
    );
}
