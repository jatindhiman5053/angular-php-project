import { Component } from '@angular/core';
import { forgot_password } from '../../services/forgot_password.service';
import { ChangePassword } from '../../services/change_password.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrl: './changepassword.component.css'
})
export class ChangepasswordComponent {

  constructor(private forgot_password: forgot_password, private ChangePassword: ChangePassword) { }

  email!: string;
  errormsg: any;
  show_error: boolean = false;

  checkpassword(password: { newpassword: string, confirmpassword: string }) {
    if (password.newpassword === password.confirmpassword) {
      this.show_error = false;
      this.reset_password(password);
      
    } else {
      this.show_error = true;
      this.errormsg = "password did not match";
    }
  }

  reset_password(password: { newpassword: string, confirmpassword: string }) {
    this.email = this.forgot_password.isemailvalid();
    const userdetails = { newpassword: password.newpassword, uemail: this.email }
    this.ChangePassword.update_password(userdetails);
  }

  changed() {
    localStorage.removeItem('email');
  }
}
