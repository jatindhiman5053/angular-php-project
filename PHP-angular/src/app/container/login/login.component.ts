import { Component, Injectable } from '@angular/core';
import { authService } from '../../services/auth.service';
import { start_session } from '../../services/start_session.service';
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

  constructor(private authService: authService, private router: Router, private start_session: start_session) {
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

          this.authService.isisAdminuser.next(isAdmin);
          this.authService.isloggedinuser.next(true);
          this.authService.isusername.next(name);

          this.authService.checkSession().subscribe({
            next: (sessionRes: any) => {
              this.authService.isisAdminuser.next(sessionRes.isAdmin);
              this.authService.isloggedinuser.next(true);
              this.authService.isusername.next(sessionRes.username);

              this.router.navigate(['default']);
            },
            error: (sessionErr) => {
              console.log(sessionErr);
            }
          });
        },
        error: (err) => {
          console.log(err);
        }
      });
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

          this.authService.isisAdminuser.next(isAdmin);
          this.authService.isloggedinuser.next(true);
          this.authService.isusername.next(name);

          this.authService.checkSession().subscribe({
            next: (sessionRes: any) => {
              this.authService.isisAdminuser.next(sessionRes.isAdmin);
              this.authService.isloggedinuser.next(true);
              this.authService.isusername.next(sessionRes.username);

              this.router.navigate(['default']);
            },
            error: (sessionErr) => {
              console.log(sessionErr);
            }
          });
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }


  registersignup() {
    this.router.navigate(['login/register'])
  }

}

