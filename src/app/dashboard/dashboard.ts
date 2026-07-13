import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.sass',
})
export class Dashboard {
  movie: Movie = new Movie();

  constructor(public movieService: MovieService) {}

  create(): void {
    this.movieService.writeData(this.movie)
  }
  }
