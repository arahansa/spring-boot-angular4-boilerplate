import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppComponent3 } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

import { AuthService } from './services/auth/auth.service';
import {HeroService} from "./hero.service";

@NgModule({
  declarations: [
    AppComponent,
    AppComponent3,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: "**/*", component: AppComponent},
    ])
  ],

  providers: [
    AuthService,
    HeroService
  ],
  bootstrap: [
    AppComponent,
    AppComponent3
  ]
})
export class AppModule { }
