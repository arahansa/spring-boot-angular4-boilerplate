import {
  Component,
  OnInit
} from '@angular/core';

import {HeroService} from "./hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit() { }

}


@Component({
  selector: 'heropanel',
  template: `
<h2>My Heroes</h2>
<ul class="heroes">
  <li *ngFor="let hero of heroes" 
    (click)="onSelect(hero)"
    [class.selected]="hero === selectedHero"
  >
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>

<hero-detail [hero]="selectedHero"></hero-detail>

  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
 providers: [HeroService]
})
export class AppComponent3 implements OnInit {

  ngOnInit(): void {
    this.getHeroes();
  }


  constructor(private heroService: HeroService) { }

  title = "히어로 알아보기";
  heroes : Hero[];
  selectedHero: Hero;
  hero: Hero = {
    id: 1,
    name: '아라한사'
  };
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}


export class Hero {
  id: number;
  name: string;
}