import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: "root"
})
export class userService {

    url: any = 'http://localhost/angular-php-Project/PHP-angular/php/user.php';
    constructor(private http: HttpClient) { }

    RegisterUser(register: { username: string, userage: number, useremail: string, usergender: string, userpassword: string }) {
        this.http.post(this.url, register).subscribe((res) => {
            console.log(res);
        });
    }
}
