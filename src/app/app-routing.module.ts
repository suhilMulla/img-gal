import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { YearcardsComponent } from './yearcards/yearcards.component';
import {CustYearCardComponent} from './cust-year-card/cust-year-card.component';
import {Eve2020Component} from './eve2020/eve2020.component';
import {Cus2020Component} from './cus2020/cus2020.component';
import { Eve2019Component } from './eve2019/eve2019.component';
import { Cus2012Component } from './cus2012/cus2012.component';
import { Eve2012Component } from './eve2012/eve2012.component';



const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'yearcards',component:YearcardsComponent},
  {path:'cust_year_card', component: CustYearCardComponent},
  {path:'eve2020', component:Eve2020Component},
  {path:'cus2020', component: Cus2020Component},
  {path:'eve2019', component:Eve2019Component},
  {path:'eve2012', component:Eve2012Component}, 
  {path:'cus2012', component: Cus2012Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { MenuPageComponent } from './menu-page/menu-page.component';
// import { OptionPageComponent } from './option-page/option-page.component';
// import { GalleryPageComponent } from './gallery-page/gallery-page.component';
// import { Events2020Component } from './events2020/events2020.component';
// import { Customer2020Component } from './customer2020/customer2020.component';
// const routes: Routes = [
//   {path:'',redirectTo:'menupage',pathMatch:'full'},
//   {path:'menupage',component:MenuPageComponent},
//   {path:'optionpage',component:OptionPageComponent},
//   {path:'gallerypage',component:GalleryPageComponent},
//   {path:'events2020',component:Events2020Component},
//   {path:'customers2020',component:Customer2020Component}
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }