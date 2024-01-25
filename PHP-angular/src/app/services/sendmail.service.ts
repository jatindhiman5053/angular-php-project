import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: "root"
})
export class sendmail {

    constructor(private http: HttpClient) { }

    sendingmial(Send_email: string) {
        // this.http.get(`http://localhost/angular-php-Project/PHP-angular/php/sendmail.php?email=${Send_email}`).subscribe((res) => {
        //     console.log(res);
        // });


        return Send_email;
    }
}