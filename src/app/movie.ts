export class Movie {
  title: string = '';
  genre: string = '';
  year: number = 0;
  imageUrl: string = '';
  avgRating: number = 0
  rewiew : number = 0
  actions: boolean = true
  rewiews: Rewiew[] = [];
}

export class Rewiew {
  text: string = ''; 
  score: number = 10; 
}