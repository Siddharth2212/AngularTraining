import { Component, OnInit } from '@angular/core';
import {DishService} from '../services/dish.service';
import {PromotionService} from '../services/promotion.service';
import {LeaderService} from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dish;
  promotion;
  leader;

  constructor(private dishService: DishService, private promotionService: PromotionService, private leaderService: LeaderService) { }

  ngOnInit() {
    this.dishService.getFeaturedDish()
      .subscribe(dish => this.dish = dish);
    this.promotionService.getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion);
    this.leaderService.getFeaturedLeader()
      .subscribe(leader => this.leader = leader);
    console.log(this.dish);
    console.log(this.promotion);
  }

}
