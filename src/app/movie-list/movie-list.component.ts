import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';
import { Movie } from '../movie'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
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

  hasImage(ImgLink : string) : string {
    const beginLink = 'http://image.tmdb.org/t/p/w342';
    return ImgLink ? (beginLink + ImgLink) : 'https://placeholdit.imgix.net/~text?txtsize=40&txt=No+Image+Available+%3D%28&w=342&h=513&txttrack=0';
  }

}