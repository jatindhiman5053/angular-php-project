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

  username: any;

  ngOnInit(): void {
    this.authService.isloggedinuser.subscribe(res => {
      this.isloggedIn = this.authService.isloggedIn();
    });

    this.authService.isisAdminuser.subscribe(res => {
      this.isAdmin = this.authService.isAdmin();
    });

    this.authService.isusername.subscribe(name => {
      this.username = this.authService.username();
    });
  }

  logout() {
    localStorage.removeItem("Role");
    this.authService.isloggedinuser.next(false);

    localStorage.removeItem("admin");
    this.authService.isisAdminuser.next(false);

    localStorage.removeItem("name");
    this.authService.isusername.next('');
  }
}

