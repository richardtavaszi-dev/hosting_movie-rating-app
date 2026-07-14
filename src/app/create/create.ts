import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.html',
  styleUrl: './create.sass',
})
export class Create {

  movie: Movie = new Movie();

  constructor(public movieService: MovieService) {}

  create() {
    this.movieService.writeData(this.movie);
    this.movie = new Movie();
  }

  get isFormValid(): boolean {
    if (!this.movie.title || this.movie.title.length < 3) return false;
    if (!this.movie.genre || this.movie.genre.length < 3) return false;
    if (!this.movie.year || this.movie.year < 1940) return false;
    
    return true;
  }
}

