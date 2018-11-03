import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Component} from '@angular/core';
import {RouterLinkDirectiveStub} from '../testing/router-link-directive-stub';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app = AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterLinkDirectiveStub,
        MessagesStubComponent,
        RouterOutletStubComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    // @ts-ignore
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeDefined();
  });

  it(`should have as title 'Tour of Heroes'`, () => {
    // @ts-ignore
    expect(app.title).toEqual('Tour of Heroes');
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Tour of Heroes');
  });
});

@Component({selector: 'app-messages', template: ''})
class MessagesStubComponent {}

// tslint:disable-next-line
@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent { }
