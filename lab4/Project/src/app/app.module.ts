import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {RouterModule} from "@angular/router";
import { GreetingComponent } from './greeting/greeting.component';
import { SharingComponent } from './sharing/sharing.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    GreetingComponent,
    SharingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'products/:productId', component: SharingComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
