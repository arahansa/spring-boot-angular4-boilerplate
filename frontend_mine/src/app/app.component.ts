/**
 * Created by jarvis on 2017. 5. 28..
 */
import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
            <a routerLink="/mysample" routerLinkActive="active">내꺼 샘플</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: [ './app.component.css' ],

})
export class AppComponent {
    title = 'Tour of Heroes';
}