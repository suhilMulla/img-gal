import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { YearcardsComponent } from './yearcards/yearcards.component';
import { CustYearCardComponent } from './cust-year-card/cust-year-card.component';
import { Eve2020Component } from './eve2020/eve2020.component';
import { Cus2020Component } from './cus2020/cus2020.component';
import { Eve2019Component } from './eve2019/eve2019.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    YearcardsComponent,
    CustYearCardComponent,
    Eve2020Component,
    Cus2020Component,
    Eve2019Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }