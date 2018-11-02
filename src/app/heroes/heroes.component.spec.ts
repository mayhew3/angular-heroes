import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import {RouterLinkDirectiveStub} from '../../testing/router-link-directive-stub';
import {HeroService} from '../hero.service';
import {MockHeroService} from '../../testing/mock-hero-service';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        RouterLinkDirectiveStub
      ],
      providers: [
        { provide: HeroService, useClass: MockHeroService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
