import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { sendmail } from "./sendmail.service";


@Injectable({
    providedIn: "root"
})
export class forgot_password {

    constructor(private http: HttpClient, private sendmail: sendmail) { }
    forgot_password(Forgot_email: any) {

        const sendemail = Forgot_email.email;
        this.http.get(`http://localhost/angular-php-Project/PHP-angular/php/forgot_password.php?email=${sendemail}`).subscribe((res) => {
            const user: any = res;
            const getemail = user[0].email;
            if (sendemail.toLowerCase() === getemail.toLowerCase()) {
                this.sendmail.sendingmial(getemail);
            }
            return user
        });
    }

    isemailvalid(): any {
        const email = localStorage.getItem('email')
        return email;
    }

}