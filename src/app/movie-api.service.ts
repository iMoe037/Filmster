import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../environments/environment';

import { Movie } from './movie';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MovieApiService {
	private moviesUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + environment.car_api
  constructor(private http: Http) { }

  getMovies (page: number): Observable<Movie[]> {
    page = page ? page : 1; 
  	return this.http.get(this.moviesUrl + '&page=' + page)
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
