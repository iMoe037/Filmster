import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule, routedComponents } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { MovieApiService } from './movie-api.service';
import { AboutComponent } from './about/about.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    routedComponents,
    AboutComponent,
    PaginationComponent,
    ModalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MovieApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
