import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full'
	},
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'movies',
		component: MovieListComponent
	},
	{
		path: 'about',
		component: AboutComponent
	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent, MovieListComponent, AboutComponent];
