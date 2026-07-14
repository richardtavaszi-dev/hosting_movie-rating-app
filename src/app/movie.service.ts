import { Injectable, inject } from '@angular/core'; 
import { Database, get, push, ref, set } from '@angular/fire/database';
import { Movie, Rewiew } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  addRewiew(movie: Movie, newReview: Rewiew) {
    throw new Error('Method not implemented.');
  }
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