import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { MovieDetailComponent } from './movie-detail.component';
import { RuntimePipe } from './runtime.pipe';


@NgModule({
  declarations: [
    MovieDetailComponent,
    RuntimePipe
  ],
  imports: [
    CommonModule,
    MovieDetailRoutingModule
  ]
})
export class MovieDetailModule { }
