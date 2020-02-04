import { Component, OnInit, Input } from '@angular/core';
import { IMovieInfo } from '../imovie-info';
import { MovieAPIService } from '../movie-api.service';
import { Movie } from './movie.class';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  title: string;
  id: number;
  posterPath: string;
  overview: string;
  releaseDate: string;
  rating: string;
  genreIDs: number[] = [];
  genreNames: string[] = [];
  length: string;
  @Input() srcMovie: Movie;

  constructor(private movieApiService: MovieAPIService) { }

  ngOnInit() {
    this.title = this.srcMovie.title;
    this.id = this.srcMovie.id;
    this.posterPath = this.movieApiService.getPosterSrc(this.srcMovie.posterPath);
    this.overview = this.srcMovie.overview;
    this.releaseDate = this.srcMovie.releaseDate;
    this.rating = this.srcMovie.rating;
    this.genreIDs = this.srcMovie.genreIDs;
    for (const genre of this.genreIDs) {
      this.genreNames.push(this.movieApiService.getMovieGenreName(genre));
    }
    this.movieApiService.searchMovieDetails(this.id).subscribe((data: any) => this.length = data.runtime);
  }

}
