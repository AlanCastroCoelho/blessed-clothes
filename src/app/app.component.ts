import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'blessed-clothes';
  showTransition: boolean = false;

  constructor(private router: Router) {}

ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showTransition = true;
        setTimeout(() => {
          this.showTransition = false;
        }, 500); // Duración de la transición en milisegundos (0.5 segundos)
      }
    });
  }
}