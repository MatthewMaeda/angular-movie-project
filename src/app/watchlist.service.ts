import { Injectable } from '@angular/core';
import { Movie } from './movie/movie.class';
import { MovieAPIService } from './movie-api.service';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  savedMovies: Movie[] = []

  constructor(private movieApiService: MovieAPIService) { }

  addMovie(movieId: number) {
    this.movieApiService.searchMovieDetails(movieId).subscribe(
      (data: any) => this.savedMovies.push(new Movie(data.results))
    )
  };
}
