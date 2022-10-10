import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieSearchRoutingModule } from './movie-search-routing.module';
import { MovieSearchComponent } from './movie-search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MovieSearchComponent
  ],
  imports: [
    CommonModule,
    MovieSearchRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class MovieSearchModule { }
