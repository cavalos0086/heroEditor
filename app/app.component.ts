import { Component } from '@angular/core';
import { HeroesComponent } from './heroes.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/heroes">Heroes</a>
      <a routerLink="/dashboard">Dashboard</a>
      <router-outlet></router-outlet>
    </nav>
  `
})

export class AppComponent {
  title = 'Tour of Heroes';
}
