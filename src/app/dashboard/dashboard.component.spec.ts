import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {Observable, of} from 'rxjs';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let heroService: HeroService;
  let expectedHeroes: Hero[];
  let fixture: ComponentFixture<DashboardComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent
      ],
      providers: [
        { provide: HeroService, useClass: MockHeroService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    heroService = TestBed.get(HeroService);
    expectedHeroes = [
      { id: 2, name: 'B'},
      { id: 3, name: 'C'},
      { id: 4, name: 'D'},
      { id: 5, name: 'E'}
    ] as Hero[];
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('heroes should be empty at start', () => {
    expect(component.heroes).toEqual([]);
  });

  it('should populate heroes on init', function () {
    component.ngOnInit();
    expect(component.heroes).toEqual(expectedHeroes);
  });

});

class MockHeroService {
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

}
