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
<<<<<<< HEAD
import { Cus2012Component } from './cus2012/cus2012.component';
import { Eve2012Component } from './eve2012/eve2012.component';
=======
import { Cus2019Component } from './cus2019/cus2019.component';
>>>>>>> f2c814f684b670bb428aba1ceaab1259eb9f617d

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    YearcardsComponent,
    CustYearCardComponent,
    Eve2020Component,
    Cus2020Component,
    Eve2019Component,
<<<<<<< HEAD
    Cus2012Component,
    Eve2012Component
=======
    Cus2019Component
>>>>>>> f2c814f684b670bb428aba1ceaab1259eb9f617d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
