import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import {RouterTestingModule} from '@angular/router/testing';
import {SpinnerComponent} from '../spinner/spinner.component';
import {HighlightDirective} from '../directives/highlight.directive';
import {DishService} from '../services/dish.service';
import {Observable} from 'rxjs/Observable';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';
import {baseURL} from '../shared/baseurl';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    const dishServiceStub = {
      getDishes: function(): Observable<Dish[]> {
        return Observable.of(DISHES);
      }
    };
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{ path: 'menu', component: MenuComponent }])
      ],
      declarations: [ MenuComponent, SpinnerComponent, HighlightDirective ],
      providers: [
        { provide: DishService, useValue: dishServiceStub },
        { provide: 'BaseURL', useValue: baseURL },
      ]
    })
      .compileComponents();

    let dishservice = TestBed.get(DishService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('this test case should create a component', () => {
    expect(component).toBeTruthy();
  });

  it('dishes items should be 4', () => {
    expect(component.dishes.length).toBe(4);
    expect(component.dishes[1].name).toBe('Pooran Poli');
    expect(component.dishes[3].featured).toBeFalsy();
  });

  it('should use dishes in the template', () => {
    fixture.detectChanges();

    let de:      DebugElement;
    let el:      HTMLElement;
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    expect(el.textContent).toContain(DISHES[0].name.toUpperCase());

  });
});
