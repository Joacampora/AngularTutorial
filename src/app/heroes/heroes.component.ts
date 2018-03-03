import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes: Hero[]; //Ya no HEROES, por el heroService

    selectedHero: Hero;

    getHeroes(): void {
      this.heroService.getHeroes()
          .subscribe(heroes => this.heroes = heroes); //SE AÑADIÓ EL OBSERVABLE, suscribe, hace que se espere por respuesta del servidor
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
      }
  /*  hero: Hero = {
      id: 1,
      name: 'Windstorm'
    };*/
  constructor(private heroService: HeroService) { } //defines a private heroService property and identifies it as a HeroService injection site.

  ngOnInit() {
    this.getHeroes();
  }
}
