import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { forgot_password } from "../../services/forgot_password.service";
import { sendmail } from "../../services/sendmail.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})

export class ForgotpasswordComponent implements OnInit {
  forgotform!: FormGroup;


  constructor(private fb: FormBuilder, private forgot_password: forgot_password, private sendmail: sendmail, private router: Router) { }

  ngOnInit() {
    this.initRegForm();
  }

  initRegForm() {
    this.forgotform = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }


  submit() {
    this.router.navigate(['forgot-password/Change-Password']);

    const email = this.forgotform.value;
    const sedemail = email.email
    localStorage.setItem("email", sedemail);


    this.forgot_password.forgot_password(email);
    this.sendmail.sendingmial(email);
    this.forgotform.reset();
  }
}
