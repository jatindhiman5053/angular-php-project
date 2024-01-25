import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class authService {

    constructor(private http: HttpClient) { }

    isloggedinuser = new BehaviorSubject<boolean>(false);

    admin_login(login: { username: string, password: string }) {
        return this.http.get(`http://localhost/angular-php-Project/PHP-angular/php/auth.php?username=${login.username}&password=${login.password}`)
    }

    isloggedIn(): boolean {
        console.log(!!localStorage.getItem('Role'));

        return !!localStorage.getItem('Role');
    }
}