// Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// NPM imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Component imports
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrickViewListComponent } from './components/brick-view-list/brick-view-list.component';
import { BrickEditListComponent } from './brick-edit-list/brick-edit-list.component';
import { BrickAddFormComponent } from './brick-add-form/brick-add-form.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BrickViewListComponent,
    BrickEditListComponent,
    BrickAddFormComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
