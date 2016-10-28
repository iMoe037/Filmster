import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Keys } from '../keys';

import { Movie } from './movie';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MovieApiService {
	private moviesUrl = 'http://api.themoviedb.org/3/movie/now_playing?api_key=' + Keys.movie_api
  constructor(private http: Http) { }

  getMovies (): Observable<Movie[]> {
  	return this.http.get(this.moviesUrl)
  		.map(this.extractData)
  		.catch(this.handleError)
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.results || { };
  }

  private handleError (error: Response | any) {
  	console.log('There was an error');
    return Observable.throw('There was an error');
  }

}
