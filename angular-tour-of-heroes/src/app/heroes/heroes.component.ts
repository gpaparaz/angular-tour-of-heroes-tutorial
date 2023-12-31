import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes: Hero[] = [];

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);

  }

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // method to retrieve the heroes from the service.
  // waits for the Observable to emit the array of heroes,
  // which could happen now or several minutes from now.
  // The subscribe() method passes the emitted array to the callback,
  // which sets the component's heroes property.
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

// While you could call getHeroes() in the constructor, that's not the best practice.
// Reserve the constructor for minimal initialization such as wiring constructor
// parameters to properties. The constructor shouldn't do anything.
// It certainly shouldn't call a function that makes HTTP requests to a remote server
// as a real data service would.
// Instead, call getHeroes() inside the ngOnInit lifecycle hook and let
// Angular call ngOnInit() at an appropriate time after constructing a HeroesComponent instance.
  ngOnInit(): void {
    this.getHeroes();
  }
}
