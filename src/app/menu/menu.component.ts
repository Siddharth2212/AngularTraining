import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';
import {baseURL} from '../shared/baseurl';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
  selectedDish: Dish;
  baseURL = baseURL;
  errorMsg: String;

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes, error => this.errorMsg = error);
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
}
