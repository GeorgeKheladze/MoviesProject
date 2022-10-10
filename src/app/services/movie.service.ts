import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { Movies, MoviesDetail, MoviesGenre } from '../models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl = environment.baseUrl;
  apiKey = environment.apyKey;

  constructor(private httpClient: HttpClient) { }

  getMovies(pageNumb: number): Observable<Movies> {
    return this.httpClient.get<Movies>(`${this.baseUrl}discover/movie?api_key=${this.apiKey}&sort_by=popularity.desc&page=${pageNumb}`).pipe(
      map(response => {
        return {
          ...response,
          results: response.results.map(x => {
            return {
              ...x,
              release_date: x.release_date.split('-')[0]
            }
          })
        }
      })
    )
  }

  getMoviesById(id: string): Observable<MoviesDetail> {
    return this.httpClient.get<MoviesDetail>(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`).pipe(
      map(response => {
        return {
          ...response, release_date: response.release_date.split('-')[0]
        }
      })
    )
  }

  getMoviesGenre(): Observable<MoviesGenre> {
    return this.httpClient.get<MoviesGenre>(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}&language=en-US`);
  }

  searchMovies(input: string): Observable<Movies> {
    return this.httpClient.get<Movies>(`${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${input}`).pipe(
      map(response => {
        return {
          ...response, results: response.results.map(
            x => {
              return {
                ...x, release_date: x.release_date.split('-')[0]
              }
            }
          )
        }
      })
    )
  }
}
