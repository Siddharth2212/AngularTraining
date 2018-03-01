import { Injectable } from '@angular/core';
import {Promotion} from '../shared/promotion';
import {Dish} from '../shared/dish';
import {Observable} from 'rxjs/Observable';
import {Restangular} from 'ngx-restangular';

@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular) { }

  getLeaders(): Observable<Promotion[]> {
    return this.restangular.all('leaders').getList();
  }

  getLeader(id: number): Observable<Dish> {
    return this.restangular.one('leaders', id).get();
  }

  getFeaturedLeader(): Observable<Dish> {
    return this.restangular.all('leaders').getList({
      featured: true
    }).map(dishes => dishes[0]);

  }
}
