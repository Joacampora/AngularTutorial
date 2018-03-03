import { Injectable } from '@angular/core';

import { MessageService } from './message.service'; //Servicio en servicio: MessageService into the HeroService which is injected into the HeroesComponent
import { Observable } from 'rxjs/Observable'; // Observable is one of the key classes in the RxJS library.
import { of } from 'rxjs/observable/of';  // simulate getting data from the server with the RxJS of()

import { Hero } from './heroes/hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
  // Todo: send the message _after_ fetching the hero
  this.messageService.add(`HeroService: fetched hero id=${id}`);
  return of(HEROES.find(hero => hero.id === id));
} // ( ` ) define a JavaScript template literal for embedding the id.
  constructor(private messageService: MessageService) { } //  Angular will inject the singleton MessageService into that property when it creates the HeroService
}
