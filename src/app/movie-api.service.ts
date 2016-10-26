import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Movie } from './movie';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieApiService {
	private moviesUrl = 'http://api.themoviedb.org/3/movie/now_playing?api_key='
  constructor(private http: Http) { }

  getMovies (): Observable<Movie[]> {
  	return this.http.get(this.moviesUrl)
  		.map(this.logData)
  		.catch(this.handleError)
  }

  private logData(res: Response) {
    let body = res.json();
    console.log(body.results);
    return body.results || { };
  }

  private handleError (error: Response | any) {
  	console.log('There was an error');
    return Observable.throw('There was an error');
  }

}
