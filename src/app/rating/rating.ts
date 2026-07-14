import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie, Rewiew } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-rating',
  standalone: false,
  templateUrl: './rating.html',
  styleUrl: './rating.sass'
})
export class Rating {
  @Input() movie!: Movie;
  newRewiew: Rewiew = new Rewiew();

  constructor(public movieService: MovieService) { }

  get isReviewValid(): boolean {
    const isTextOk = this.newRewiew.text && this.newRewiew.text.trim().length >= 50;
    const isScoreOk = this.newRewiew.score >= 1 && this.newRewiew.score <= 10;
    return !!(isTextOk && isScoreOk);
  }
  saveRating() {
    if (this.newRewiew.text.length >= 50 && this.newRewiew.score >= 1 && this.newRewiew.score <= 10) {
      this.movieService.addRewiew(this.movie, this.newRewiew);
    }
  }
}

