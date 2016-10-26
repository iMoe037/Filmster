import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';
import { Movie } from '../movie'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

	movies: Movie[];
	errorMessage: string;

  constructor(
  	private movieApiService: MovieApiService
  	) { }

  ngOnInit() {
  	this.movieApiService.getMovies()
  		.subscribe(
  			movies => {
  				this.movies = movies;
  			},
  			error => this.errorMessage = <any>error
  			)
  }

}
