import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail', loadChildren: () => import('./pages/movie-detail/movie-detail.module').then(m => m.MovieDetailModule) },
  { path: 'search', loadChildren: () => import('./pages/movie-search/movie-search.module').then(m => m.MovieSearchModule) },
  { path: '**', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
