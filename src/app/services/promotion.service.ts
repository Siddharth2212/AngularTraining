import { Injectable } from '@angular/core';
import {Promotion} from '../shared/promotion';
import {Dish} from '../shared/dish';
import {Observable} from 'rxjs/Observable';
import {Restangular} from 'ngx-restangular';

@Injectable()
export class PromotionService {

  constructor(private restangular: Restangular) { }

  /*getPromotions(): Promise<Promotion[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(PROMOTIONS), 2000);
    });
  }*/

  /*getPromotion(id: number): Promise<Promotion> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]), 2000);
    });
  }*/

  /*getFeaturedPromotion(): Promise<Promotion> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]), 2000);
    });
  }*/

  getPromotions(): Observable<Promotion[]> {
    return this.restangular.all('dishes').getList();
  }

  getPromotion(id: number): Observable<Dish> {
    return this.restangular.one('dishes', id).get();
  }

  getFeaturedPromotion(): Observable<Dish> {
    return this.restangular.all('dishes').getList({
      featured: true
    }).map(dishes => dishes[0]);

  }
}
