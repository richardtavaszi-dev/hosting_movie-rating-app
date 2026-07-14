import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.sass',
})
export class List {
  selectedMovie: Movie | null = null
  constructor(public movieService: MovieService) { }

}
