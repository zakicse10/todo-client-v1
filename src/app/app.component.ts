import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  loading: boolean = false;
  title: string = "Welcome to ToDo app V1";

  constructor(private router: Router) {
    this.router.events.subscribe((ev) => {

      if (ev instanceof NavigationStart) {
        this.loading = true;
      }

      if (ev instanceof NavigationEnd ||
        ev instanceof NavigationCancel ||
        ev instanceof NavigationError) {
        this.loading = false;
      }

    });
  }
}