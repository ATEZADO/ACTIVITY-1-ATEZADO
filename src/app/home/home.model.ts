export class User {
    id: string;
    title: string;
    author: string;
    ratings: number;
    isCompleted: boolean = false;
    released: Date;
    genres: string[] = [];
  
    constructor(id: string = '', title: string = '', author: string = '', ratings: number = 0, released: Date = new Date(), isCompleted: boolean = false, genres: string[] = []) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.ratings = ratings;
        this.isCompleted = isCompleted;
        this.released = released;
        this.genres = genres;
    }
  }
  
  
  export interface iUser {
      id: string;
      title: string;
      author: string;
      ratings: number;
      isCompleted: boolean;
      released: Date;
      genres: string[]
  }