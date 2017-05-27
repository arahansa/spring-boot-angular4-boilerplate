/**
 * Created by jarvis on 2017. 5. 28..
 */
import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <a routerLink="/heroes">Heroes</a>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    title = 'Tour of Heroes';
}