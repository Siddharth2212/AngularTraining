import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {DishService} from './services/dish.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {PromotionService} from './services/promotion.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SpinnerComponent } from './spinner/spinner.component';
import {baseURL} from './shared/baseurl';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RestangularModule} from 'ngx-restangular';
import {RestangularConfigFactory} from './shared/restConfig';
import { HighlightDirective } from './directives/highlight.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LeaderService} from './services/leader.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SpinnerComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    BrowserAnimationsModule
  ],
  providers: [
    DishService, PromotionService, {provide: 'BaseURL', useValue: baseURL}, HttpClient, LeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
