import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesDetail } from 'src/app/models/movies.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  id!: string | null; 
  movie!: MoviesDetail;

  constructor(private moviesService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id) {
      this.moviesService.getMoviesById(this.id).subscribe((response) => this.movie = response);
    }
  }

}
