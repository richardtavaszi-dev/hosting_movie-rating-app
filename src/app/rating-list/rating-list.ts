import { Component, Input } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-rating-list',
  standalone: false,
  templateUrl: './rating-list.html',
  styleUrl: './rating-list.sass',
})
export class RatingList {
  @Input() movie! : Movie;
}
