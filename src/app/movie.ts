export class Movie {
  title: string = '';
  genre: string = '';
  year: number = 0;
  imageUrl: string = '';
  avgRating: number = 0
  actions: boolean = true
  rating: Rating[] = [];
}

export class Rating {
  text: string = ''; 
  score: number = 0; 
}