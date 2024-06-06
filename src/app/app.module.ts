import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { TopHeaderComponent } from './Component/top-header/top-header.component';
import { TopMenuComponent } from './Component/header/top-menu/top-menu.component';
import { MainMenuComponent } from './Component/header/main-menu/main-menu.component';
import { ContainerComponent } from './Component/Container/container.component';
import { SearchComponent } from './Component/Container/search/search.component';
import { ProductListComponent } from './Component/Container/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
