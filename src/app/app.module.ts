import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarSearchComponent } from './components/cars/car-search/car-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarSearchComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
