import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: "root"
})
export class ChangePassword {

    url: any = 'http://localhost/angular-php-Project/PHP-angular/php/api_update.php';
    constructor(private http: HttpClient) { }
    update_password(userdetails: { newpassword: string, uemail: string }) {
        this.http.get(`http://localhost/angular-php-Project/PHP-angular/php/changepassword.php?email='${userdetails.uemail}&passwords=${userdetails.newpassword}'`).subscribe((res) => {
            console.log(res);
        });
    }
}