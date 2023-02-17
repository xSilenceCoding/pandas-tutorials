import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './modules/about-me/about-me.component';
import { HomeComponent } from './modules/home/home.component';
import { LecturesComponent } from './modules/lectures/lectures.component';
import { MaintainComponent } from './modules/lectures/maintain/maintain.component';
import { OneComponent } from './modules/lectures/one/one.component';
import { LibsComponent } from './modules/libs/libs.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'lectures/overview', component: LecturesComponent },
  { path: 'lectures/one', component: OneComponent },
  { path: 'maintain', component: MaintainComponent },

  { path: 'libs', component: LibsComponent },
  { path: 'about-me', component: AboutMeComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `home-component`
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
