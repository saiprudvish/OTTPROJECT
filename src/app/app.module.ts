import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MustwatchComponent } from './mustwatch/mustwatch.component';
import { UpcommingComponent } from './upcomming/upcomming.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { AccountComponent } from './account/account.component';
import { MovieratingComponent } from './movierating/movierating.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { NetflixComponent } from './netflix/netflix.component';
import { HotstarComponent } from './hotstar/hotstar.component';
import { OtthotstarComponent } from './otthotstar/otthotstar.component';
import { OttahaComponent } from './ottaha/ottaha.component';
import { OttprimeComponent } from './ottprime/ottprime.component';
import { RatingHotstarComponent } from './rating-hotstar/rating-hotstar.component';
import { PrimeComponent } from './prime/prime.component';
import { AhaComponent } from './aha/aha.component';
import { OttnetflixComponent } from './ottnetflix/ottnetflix.component';
import { RatingnetflixComponent } from './ratingnetflix/ratingnetflix.component';
import { LoginComponent } from './login/login.component';
import { RatingahaComponent } from './ratingaha/ratingaha.component';
import { RatingprimeComponent } from './ratingprime/ratingprime.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MustwatchComponent,
    UpcommingComponent,
    WatchlistComponent,
    AccountComponent,
    MovieratingComponent,

    ProductdetailsComponent,
    NetflixComponent,
    HotstarComponent,
    OtthotstarComponent,
    OttahaComponent,
    OttprimeComponent,
    RatingHotstarComponent,
    PrimeComponent,
    AhaComponent,
    OttnetflixComponent,
    RatingnetflixComponent,
    LoginComponent,
    RatingahaComponent,
    RatingprimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
