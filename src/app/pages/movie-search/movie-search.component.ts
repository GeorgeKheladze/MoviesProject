import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Movies, MoviesGenre, MoviesInfo } from 'src/app/models/movies.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  searchedMovies$!: Observable<Movies>;
  searchedMoviesGenre$!: Observable<MoviesGenre>;

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {}

  onSearch(input: HTMLInputElement) {
    this.searchedMovies$ = this.movieService.searchMovies(input.value).pipe(
      map(response => { return {...response, results: response.results.filter(
        x => { return x.poster_path }
      )}})
    );

    this.searchedMoviesGenre$ = this.movieService.getMoviesGenre();
  }

  onDetail(id: number) {
    this.router.navigate([`detail/${id}`]);
  }
}
