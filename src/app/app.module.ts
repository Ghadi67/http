import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DragScrollModule } from 'ngx-drag-scroll';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
