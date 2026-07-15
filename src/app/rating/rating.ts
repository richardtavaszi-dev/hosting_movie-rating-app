import { Component, Input } from '@angular/core';
import { Movie, Rating } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-rating',
  standalone: false,
  templateUrl: './rating.html',
  styleUrl: './rating.sass'
})
export class Ratings {

  name: string = ""
  score: number = 0
  comment: string = ""
  @Input() movie!: Movie;
  newRating: Rating = new Rating();

  constructor(public movieService: MovieService) { }

  get isReviewValid(): boolean {

    const isNameOk = this.newRating.name && this.newRating.name.trim().length > 0;
    const isTextOk = this.newRating.text && this.newRating.text.trim().length >= 50;
    const isScoreOk = this.newRating.score >= 1 && this.newRating.score <= 10;
    return !!(isNameOk && isTextOk && isScoreOk);
  }

  saveRating() {

    this.movieService.addRating(this.movie, this.newRating);
    this.newRating = new Rating();
    this.movieService.moreAddOrList = null;
  }
}

