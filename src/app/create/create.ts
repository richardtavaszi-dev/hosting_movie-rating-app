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
}

