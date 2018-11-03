import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';
import {FormsModule} from '@angular/forms';
import {ActivatedRouteStub} from '../../testing/activated-route-stub';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../hero.service';
import { Location } from '@angular/common';
import {MockHeroService} from '../../testing/mock-hero-service';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  const locationSpy = jasmine.createSpyObj('Location', ['back']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ HeroDetailComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: new ActivatedRouteStub({id: 99999}) },
        { provide: HeroService, useClass: MockHeroService },
        { provide: Location, useValue: locationSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
