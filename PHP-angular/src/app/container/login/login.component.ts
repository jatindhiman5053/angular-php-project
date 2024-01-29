import { Component, Injectable } from '@angular/core';

import { authService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

@Injectable({
  providedIn: "root"
})
export class LoginComponent {

  constructor(private authService: authService, private router: Router) {
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }

  Onlogin(login: { username: string, password: string }) {
    if (login.username == "admin" && login.password == "admin") {
      this.authService.admin_login(login).subscribe({
        next: (res: any) => {
          var user = res;
          var Role = user[0].role;

          var isAdmin = user[0].isAdmin;
          localStorage.setItem("admin", isAdmin);
          this.authService.isisAdminuser.next(true);

          localStorage.setItem("Role", Role);
          this.authService.isloggedinuser.next(true);
          this.router.navigate([''])
        },
        error: (err) => {
          console.log(err);
        }
      })
    } else {
      this.authService.admin_login(login).subscribe({
        next: (res: any) => {
          var user = res;
          var Role = user[0].role;

          var isAdmin = user[0].isAdmin;
          localStorage.setItem("admin", isAdmin);

          localStorage.setItem("Role", Role);
          this.authService.isloggedinuser.next(true);
          this.router.navigate([''])
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }

  registersignup() {
    this.router.navigate(['login/register'])
  }

}

