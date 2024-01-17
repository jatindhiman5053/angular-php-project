import { Component, OnInit } from '@angular/core';

import { authService } from '../../../services/auth.service';
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

  Onlogin(login: { username: string, password: string }) {
    this.authService.admin_login(login).subscribe((res: any) => {
      if (res?.status == true) {
        this.adminlogin();
      } else {
        this.showDialog();
      }
    })
  }

  adminlogin() {
    this.router.navigate(['home'])
  }

}
