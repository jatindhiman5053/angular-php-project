import { Component } from '@angular/core';

import { userService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrl: './registeruser.component.css'
})
export class RegisteruserComponent {

  constructor(private userService: userService, private router: Router) {
  }
  userlogin() {
    this.router.navigate(['login'])
  }

  OnregisterUser(register: { username: string, userage: number, useremail: string, usergender: string, userpassword: string }) {
    if (register.username != '' && register.useremail != '' && register.userage != null && register.usergender != '' && register.userpassword != '') {
      this.userService.RegisterUser(register);
      this.userlogin();
    }
  }
}
