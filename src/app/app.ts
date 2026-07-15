import { Component} from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.sass'
})
export class App {
  constructor(public movieService: MovieService){}
}

