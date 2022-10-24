import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Movies, MoviesDetail, MoviesGenre } from '../models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getMovies(pageNumb: number): Observable<Movies> {
    return this.httpClient.get<Movies>(`discover/movie?sort_by=popularity.desc&page=${pageNumb}`).pipe(
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
    return this.httpClient.get<MoviesDetail>(`movie/${id}?`).pipe(
      map(response => {
        return {
          ...response, release_date: response.release_date.split('-')[0]
        }
      })
    )
  }

  getMoviesGenre(): Observable<MoviesGenre> {
    return this.httpClient.get<MoviesGenre>(`genre/movie/list?language=en-US`);
  }

  searchMovies(input: string): Observable<Movies> {
    return this.httpClient.get<Movies>(`search/movie?query=${input}`).pipe(
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
