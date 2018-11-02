import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {RouterLinkDirectiveStub} from '../../testing/router-link-directive-stub';
import {Component} from '@angular/core';
import {MockHeroService} from '../../testing/mock-hero-service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let heroService: HeroService;
  let expectedHeroes: Hero[];
  let fixture: ComponentFixture<DashboardComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        RouterLinkDirectiveStub,
        HeroSearchStubComponent
      ],
      providers: [
        { provide: HeroService, useClass: MockHeroService }
      ]
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


@Component({selector: 'app-hero-search', template: ''})
class HeroSearchStubComponent {}
