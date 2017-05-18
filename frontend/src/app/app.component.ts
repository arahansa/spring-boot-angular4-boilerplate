import {
  Component,
  OnInit
} from '@angular/core';

import {HeroService} from "./hero.service";




@Component({
  selector: 'heropanel',
  template: `
   <h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/heroes">Heroes</a>
   </nav>
   <router-outlet></router-outlet>
 `
})
export class AppComponent3{
  title = "히어로 알아보기";
}





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() { }

}