import { Injectable, inject } from '@angular/core';
import { Database, get, push, ref, set, update } from '@angular/fire/database';
import { Movie, Rating } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  selectedMovie: Movie | null = null;
  moreAddOrList: 'add' | 'list' | null = null;
  movies: Movie[] = [];
  path: string = "movies";
  db = inject(Database);

  constructor() {
    this.readData().then((snapshot: any) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        this.movies.length = 0;

        Object.keys(data).forEach(key => {
          let movie = { ...data[key], key: key } as Movie;

          if (movie.rating) {
            movie.rating = Object.values(movie.rating);
          } else {
            movie.rating = [];
          }

          this.movies.push(movie);
        });

        console.log(this.movies);
      } else {
        console.error("Nincs adat");
      }
    });
  }

  addRating(movie: Movie, rating: Rating) {

    if (!movie.rating) movie.rating = [];
    movie.rating.push(rating);

    let sum = 0;
    for (let i = 0; i < movie.rating.length; i++) {
      sum = sum + movie.rating[i].score;
    }
    const MathRatingAvg = sum / movie.rating.length;

    movie.avgRating = Math.round(MathRatingAvg * 10) / 10;

    const index = this.movies.indexOf(movie);
    if (index !== -1) {
      this.movies[index] = { ...movie };
    }
    this.movies = [...this.movies];

    const movieRef = ref(this.db, 'movies/' + (movie as any).key);
    update(movieRef, {
      rating: movie.rating,
      avgRating: movie.avgRating,
    });
  }

  readData() {
    const dbRef = ref(this.db, this.path);
    return get(dbRef);
  }

  writeData(movie: Movie): void {
    const dbRef = ref(this.db, 'movies');
    const newMovieRef = push(dbRef);

    set(newMovieRef, movie).then(() => {

      (movie as any).key = newMovieRef.key;
      this.movies.push(movie);
    });
  }
}