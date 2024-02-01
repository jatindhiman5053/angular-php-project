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
          var name = user[0].username;

          localStorage.setItem("Role", Role);
          localStorage.setItem("admin", isAdmin);
          localStorage.setItem("name", name);

          this.authService.isisAdminuser.next(true);
          this.authService.isloggedinuser.next(true);
          this.authService.isusername.next('');

          this.router.navigate(['default'])
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
          var name = user[0].name;

          localStorage.setItem("Role", Role);
          localStorage.setItem("admin", isAdmin);
          localStorage.setItem("name", name);

          this.authService.isusername.next('');
          this.authService.isloggedinuser.next(true);

          this.router.navigate(['default'])
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

