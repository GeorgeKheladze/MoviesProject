import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { MoviesGenre, MoviesInfo } from 'src/app/models/movies.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  searchedMovies: MoviesInfo [] =[];
  searchedMoviesGenre!: MoviesGenre;

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {}

  onSearch(input: HTMLInputElement) {
    this.movieService.searchMovies(input.value).pipe(
      map(response => { return {...response, results: response.results.filter(
        x => { return x.poster_path }
      )}})
    ).subscribe((response) => this.searchedMovies = response.results);

    this.movieService.getMoviesGenre().subscribe((response) => this.searchedMoviesGenre = response);
  }

  onDetail(id: number) {
    this.router.navigate([`detail/${id}`]);
  }
}
