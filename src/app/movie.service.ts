import { Injectable, inject } from '@angular/core';
import { Movie } from './movie';
import { Database, get, ref } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  db = inject(Database)

  movies: Movie[] = []
  path: string ="movies"
  constructor(){
    this.readData().then(snapshot =>{
      if (snapshot.exists()){
        const data = snapshot.val()
        this.movies = Object.values(data)
        console.log(this.movies)
      }
      else{
        console.error("No Data Avaiable")
      }
    })
  }

readData() {
  const dbRef = ref(this.db, this.path)
  return get(dbRef)
}

  writeData(movie : Movie){}

}