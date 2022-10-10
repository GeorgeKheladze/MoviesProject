import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { BodyComponent } from 'src/app/shared/body/body.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { MovieCardComponent } from 'src/app/shared/movie-card/movie-card.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
  ],
  exports: [
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MovieCardComponent
  ]

})
export class SharedModule { }
