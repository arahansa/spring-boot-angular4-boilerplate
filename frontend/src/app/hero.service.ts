/**
 * Created by jarvis on 2017. 5. 18..
 */

import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Hero[] {
        return HEROES;
    }
}
