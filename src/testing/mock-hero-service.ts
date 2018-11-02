import {Hero} from '../app/hero';
import {Observable, of} from 'rxjs';

export class MockHeroService {
  allHeroes = [
    { id: 1, name: 'A'},
    { id: 2, name: 'B'},
    { id: 3, name: 'C'},
    { id: 4, name: 'D'},
    { id: 5, name: 'E'},
    { id: 6, name: 'F'}
  ];

  /** GET heroes from the server */
  getHeroes (): Observable<Hero[]> {
    return of(this.allHeroes);
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    return of(this.allHeroes[id]);
  }

  /** PUT: update the hero on the server */
  updateHero (hero: Hero): Observable<any> {
    return of(hero);
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
  }

  /** POST: add a new hero to the server */
  addHero (hero: Hero): Observable<Hero> {
    return of(hero);
  }

  /** DELETE: delete the hero from the server */
  deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    return of(this.allHeroes[id]);
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return of(this.allHeroes);
  }
}
