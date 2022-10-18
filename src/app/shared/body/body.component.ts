import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies, MoviesGenre, MoviesInfo } from 'src/app/models/movies.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() contentMovies$!: Observable <Movies>;
  @Input() contentMoviesGenre$!: Observable <MoviesGenre>;
  currentPage: number = 1;

  constructor(private movieService: MovieService) { 
    this.contentMovies$ = this.movieService.getMovies(this.currentPage);
    this.contentMoviesGenre$ = this.movieService.getMoviesGenre();
  }

  ngOnInit(): void {
  }

  pageChanged(numb: number) {
    this.contentMovies$ = this.movieService.getMovies(numb);
    this.currentPage = numb;
  }

}
