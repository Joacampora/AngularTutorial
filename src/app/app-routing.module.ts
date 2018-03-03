/*ng generate module app-routing --flat --module=app
--flat puts the file in src/app instead of its own folder.
--module=app tells the CLI to register it in the imports array of the AppModule
A typical Angular Route has two properties:

    path: a string that matches the URL in the browser address bar.
    component: the component that the router should create when navigating to this route.

*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router'; //configure the router with Routes in the RouterModule
import { HeroesComponent }      from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent } //The colon (:) in the path indicates that :id is a placeholder for a specific hero id
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ CommonModule,
            RouterModule.forRoot(routes)], //initialize the router and start it
  declarations: [] // generally don't declare components in a routing module
})
export class AppRoutingModule { }
