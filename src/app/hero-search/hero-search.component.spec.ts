import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchComponent } from './hero-search.component';
import {RouterLinkDirectiveStub} from '../../testing/router-link-directive-stub';
import {HeroService} from '../hero.service';
import {MockHeroService} from '../../testing/mock-hero-service';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroSearchComponent,
        RouterLinkDirectiveStub
      ],
      providers: [
        { provide: HeroService, useClass: MockHeroService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
