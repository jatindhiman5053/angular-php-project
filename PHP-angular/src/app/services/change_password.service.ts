import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class ChangePassword {

    url: any = 'http://localhost/angular-php-Project/PHP-angular/php/api_update.php';
    constructor(private http: HttpClient) { }

    update_password(userdetails: { newpassword: string, uemail: string }) {
        const url = `http://localhost/angular-php-Project/PHP-angular/php/change_password.php?email=${userdetails.uemail}&newpassword=${userdetails.newpassword}`;

        this.http.get(url).subscribe((res) => {
            console.log(res);
        });
    }
}
