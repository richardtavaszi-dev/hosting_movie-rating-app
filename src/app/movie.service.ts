import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Database, get, ref } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  movies: Movie[] = [
    { 
      title: 'Életrevalók', 
      genre: 'Életrajz', 
      year: 2000, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRMNWny5_GXISt5tbL_fp1QskKjYAJzlFPDrQGCryCeQ&s=10' 
    },
    { 
      title: 'Superman', 
      genre: 'Akció', 
      year: 2010, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAt9PXdu3mlJ_aUO9x7YtakOS1mkfLD03J_DojWBqKPw&s=10'
}];
  path: string = "movies";

  constructor(private db: Database) {
    this.readData().then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        this.movies = Object.values(data);
        console.log("Sikeres lekérdezés:", this.movies);
      } else {
        console.error("Nincs adat az adatbázisban");
      }
    });
  }

  readData() {
    const dbRef = ref(this.db, this.path);
    return get(dbRef);
  }

  writeData(movie: Movie) {
    this.movies.push(movie);
  }
}