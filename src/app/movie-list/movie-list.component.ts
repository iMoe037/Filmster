import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';
import { Movie } from '../movie';
import { PaginationComponent } from '../pagination/pagination.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

	movies: Movie[] = [];
	errorMessage: string;
	showModal: boolean = false;
	currentMovie: any = null;
	modalIdx: number;
	body;

  constructor(
  	private movieApiService: MovieApiService
  	) { }

  ngOnInit() {
  	this.movieApiService.getMovies(1)
  		.subscribe(
  			movies => {
  				this.movies = movies;
  			},
  			error => this.errorMessage = <any>error
  			)
  }

  hasImage(ImgLink : string) : string {
    const beginLink = 'https://image.tmdb.org/t/p/w342';
    return ImgLink ? (beginLink + ImgLink) : 'https://placeholdit.imgix.net/~text?txtsize=40&txt=No+Image+Available+%3D%28&w=342&h=513&txttrack=0';
  }

	backDrop(imgLink: string) : string {
		const link = 'https://image.tmdb.org/t/p/original';
		return imgLink ? (link + imgLink) : '';
	}

	onPageChange(page: number) {
		this.movieApiService.getMovies(page)
			.subscribe(
				movies => {
					this.movies = movies;
				},
				error => this.errorMessage = <any>error
			)
	}

	openModal(movie: Movie, index: number) {
		this.showModal = !this.showModal;
		this.currentMovie = movie;
		this.modalIdx = index;
		this.body = (!this.body) ? document.getElementsByTagName('BODY')[0] : this.body;
		this.body.style.overflow = 'hidden';
	}

	closeModal(): void {
		this.body.style = '';
		this.showModal = !this.showModal;
	}

	changeModalMovie(action: string) {
		(action === 'inc') ? this.modalIdx += 1 : this.modalIdx -= 1;
		this.currentMovie = this.movies[this.modalIdx];
	}

	checkMovieEnd():	boolean {
		return (this.modalIdx + 1 === this.movies.length);
	}

	checkMovieBegin(): boolean {
		return (this.modalIdx === 0);
	}

}
