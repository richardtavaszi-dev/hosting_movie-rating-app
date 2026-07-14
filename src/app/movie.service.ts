import { Injectable, inject } from '@angular/core'; 
import { Database, get, push, ref, set, update } from '@angular/fire/database';
import { Movie, Rating } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  selectedMovie: Movie | null = null;
  movies: Movie[] = [];
  path: string = "movies";
  db = inject(Database);

  constructor() {
    this.readData().then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val()
        
        this.movies = Object.values(data);
        console.log(this.movies)
      } else {
        console.error("Nincs adat")
      }
    });
  }
  saveRating(movie: Movie, rating: Rating) {
    if (!movie.rating) {
      movie.rating = [];
    }
    movie.rating.push(rating);
    
    const sum = movie.rating.reduce((acc, curr) => acc + curr.score, 0);
    movie.avgRating = sum / movie.rating.length;

    const dbRef = ref(this.db, this.path);
    set(dbRef, this.movies);
  }

  addRating(movie: Movie, rating : Rating) {

  if (!movie.rating) movie.rating = [];
  movie.rating.push(rating);

  let sum = 0;
  for (let i = 0; i < movie.rating.length; i++) {
    sum = sum + movie.rating[i].score;
  }

movie.avgRating = sum / movie.rating.length;

  const movieRef = ref(this.db, 'movies/' + (movie as any).key); 
  update(movieRef, {
    rewiews: movie.rating,
    avgRating: movie.avgRating,
    rewiew: movie.rating
  });
}

  readData() {
    const dbRef = ref(this.db, this.path);
    return get(dbRef);
  }

  writeData(movie: Movie): void {
   this.movies.push(movie);
    const dbRef = ref(this.db, 'movies');
    const newMovieRef = push(dbRef); 
    
    set(newMovieRef, movie)
      .then(() => {
        this.movies.push(movie); 
      })
  }
}