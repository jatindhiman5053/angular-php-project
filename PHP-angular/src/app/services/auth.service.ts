import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: "root"
})
export class authService {

    constructor(private http: HttpClient) { }

    admin_login(login: { username: string, password: string }) {
        return this.http.get(`http://localhost/angular-php-Project/PHP-angular/php/auth.php?username=${login.username}&password=${login.password}`);
    }
}