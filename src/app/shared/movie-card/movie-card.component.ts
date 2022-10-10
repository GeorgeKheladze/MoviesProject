import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesGenre, MoviesInfo } from 'src/app/models/movies.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() moviesInfo!: MoviesInfo;
  @Input() moviesGenre!: MoviesGenre;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onDetail(id: number) {
    this.router.navigate([`detail/${id}`]);   
  }
}
