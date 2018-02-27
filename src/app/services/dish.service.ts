import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class DishService {

  constructor() {
  }

  /*getDishes(): Promise<Dish[]> {
    return new Promise<Dish[]>(function (resolve, reject) {
      setTimeout(function () {
        resolve(DISHES);
      }, 3000);
    });
  }*/

  getDishes(): Observable<Dish[]> {
    return Observable.of(DISHES).delay(2000);
  }

  /*getDish(id: number): Promise<Dish> {
    // es6/es2015/typescript
    return new Promise<Dish>((resolve, reject) => {
      setTimeout(() => resolve(DISHES.filter(dish => (dish.id === id))[0]), 3000);
    });
  }*/

  getDish(id: number): Observable<Dish> {
    return Observable.of(DISHES.filter(dish => (dish.id === id))[0]).delay(2000);
  }

  /*getFeaturedDish(): Promise<Dish> {
    // es6/es2015/typescript
    return new Promise<Dish>((resolve, reject) => {
      setTimeout(() => resolve(DISHES.filter(dish => (dish.featured === true))[0]), 3000);
    });
  }*/

  getFeaturedDish(): Observable<Dish> {
    return Observable.of(DISHES.filter(dish => (dish.featured === true))[0]).delay(2000);
  }

  getDishIds(): Observable<number[]> {
    return Observable.of(DISHES.map(dish => dish.id ));
  }
}
