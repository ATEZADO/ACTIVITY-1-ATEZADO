export class User { 
    id: string;
    Title: string;
    Duration: number;
    MainActors: string[]= [];
    isPopular: boolean;
    Released: Date;
  
    constructor ( id: string ='', Title: string ='', Duration: number = 0, MainActors: string[]= [], 
    isPopular: boolean = false, Released: Date = new Date() ){
        this.id = id;
        this.Title = Title;
        this.Duration = Duration;
        this.MainActors = MainActors;
        this.isPopular = isPopular;
        this.Released = Released;
    }
} 

    export interface iUser {
        id: string;
        Title: string;
        Duration: number;
        MainActors: string[];
        isPopular: boolean;
        Released: Date;
    }
