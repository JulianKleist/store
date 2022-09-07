import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './@core/components/product/product.component';
import { AddComponent } from './@core/components/add/add.component';
import { HomeComponent } from './@core/components/home/home.component';
import { HeaderComponent } from './@core/components/header/header.component';
import { NotFoundComponent } from './@core/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AddComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
