import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.sass',
})
export class List {
  constructor(public movieService: MovieService) { }
}
