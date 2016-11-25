import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/heroes">Heroes</a>
      <a routerLink="/dashboard">Dashboard</a>
      <router-outlet></router-outlet>
    </nav>
  `,
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
}
