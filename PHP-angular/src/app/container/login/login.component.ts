import { Component, EventEmitter, OnInit } from '@angular/core';

import { authService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
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

  onadminlogin: EventEmitter<string> = new EventEmitter<string>()

  Onlogin(login: { username: string, password: string }) {
    if (login.username == "admin" && login.password == "admin") {
      this.authService.admin_login(login).subscribe((res: any) => {
        if (res?.status == true) {
          this.adminlogin();
        } else {
          this.showDialog();
        }
      })
    } else {
      this.authService.admin_login(login).subscribe((res: any) => {
        if (res?.status == true) {
          this.userlogin();
        } else {
          this.showDialog();
        }
      })
    }
  }


  adminlogin() {
    this.router.navigate(['home'])
  }

  userlogin() {
    this.router.navigate([''])
  }

  registersignup() {
    this.router.navigate(['login/register'])
  }

}
