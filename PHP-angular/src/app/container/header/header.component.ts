import { Component, OnInit, inject } from '@angular/core';
import { authService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authService = inject(authService);

  isloggedIn: boolean = false;
  isAdmin: boolean = false;

  ngOnInit(): void {
    this.authService.isloggedinuser.subscribe(res => {
      this.isloggedIn = this.authService.isloggedIn();
      
    });

    this.authService.isisAdminuser.subscribe(res => {
      this.isAdmin = this.authService.isAdmin();
    });
  }

  logout() {
    localStorage.removeItem("Role");
    this.authService.isloggedinuser.next(false);
  }

  adminlogout() {
    localStorage.removeItem("admin");
    this.authService.isisAdminuser.next(false);
  }

}

