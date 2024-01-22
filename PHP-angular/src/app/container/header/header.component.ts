import { Component, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  isAdmin: boolean = true;
  displayloader = false;

  ngOnInit(): void {
    this.router.events.subscribe((routerEvnet: Event) => {
      if (routerEvnet instanceof NavigationStart) {
        this.displayloader = true;
      }

      if (routerEvnet instanceof NavigationEnd || routerEvnet instanceof NavigationCancel) {
        this.displayloader = false;
      }
    })
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }
}
