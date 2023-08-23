import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

// This marks the class as one that participates in the dependency injection system.
// The HeroService class is going to provide an injectable service, and it can also have
// its own injected dependencies. It doesn't have any dependencies yet.
// The @Injectable() decorator accepts a metadata object for the service,
// the same way the @Component() decorator did for your component classes.
//You must make the HeroService available to the dependency injection system before Angular
// can inject it into the HeroesComponent by registering a provider.
// A provider is something that can create or deliver a service.
// In this case, it instantiates the HeroService class to provide the service.
// To make sure that the HeroService can provide this service, register it with the injector.
// The injector is the object that chooses and injects the provider where the application requires it.
// By default, ng generate service registers a provider with the root injector
// for your service by including provider metadata, that's providedIn: 'root' in the
//  @Injectable() decorator.
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  // simulates getting data from the server with the RxJS of() function.
  // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  constructor() { }

}
