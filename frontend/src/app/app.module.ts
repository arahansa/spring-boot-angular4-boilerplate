import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppComponent3 } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { AuthService } from './services/auth/auth.service';
import {HeroService} from "./hero.service";
import {DashboardComponent} from "./dashboard.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      /*{path: "**!/!*", component: AppComponent},*/
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {path: 'heroes',component: HeroesComponent},
      {path: 'dashboard',component: DashboardComponent},
      {path: 'detail/:id',component: HeroDetailComponent},
    ])
  ],
  declarations: [
    /*AppComponent,*/
    AppComponent3,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [
    /*AuthService,*/
    HeroService
  ],
  bootstrap: [
    /*AppComponent,*/
    AppComponent3
  ]
})
export class AppModule { }
