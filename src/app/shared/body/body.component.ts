import { Component, Input, OnInit } from '@angular/core';
import { MoviesGenre, MoviesInfo } from 'src/app/models/movies.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() contentMovies!: MoviesInfo [];
  @Input() contentMoviesGenre!: MoviesGenre;
  currentPage: number = 1;

  constructor(private movieService: MovieService) { 
    this.movieService.getMovies(this.currentPage).subscribe((response) => this.contentMovies = response.results);
    this.movieService.getMoviesGenre().subscribe((response) => this.contentMoviesGenre = response);
  }

  ngOnInit(): void {
  }

  pageChanged(numb: number) {
    this.movieService.getMovies(numb).subscribe((response) => this.contentMovies = response.results);
    this.currentPage = numb;
  }

}
