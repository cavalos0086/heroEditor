import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // allows 2way data binding for form inputs

//////////////////////////////////
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
