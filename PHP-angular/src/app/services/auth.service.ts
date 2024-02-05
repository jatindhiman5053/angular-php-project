import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class authService {

    constructor(private http: HttpClient) { }

    isloggedinuser = new BehaviorSubject<boolean>(false);
    isisAdminuser = new BehaviorSubject<boolean>(false);
    isusername: BehaviorSubject<string> = new BehaviorSubject<string>('');

    admin_login(login: { username: string, password: string }) {
        return this.http.get(`http://localhost/angular-php-Project/PHP-angular/php/auth.php?username=${login.username}&password=${login.password}`)
    }
    
    checkSession() {
        return this.http.get('http://localhost/angular-php-Project/PHP-angular/php/check_session.php');
    }


    isloggedIn(): boolean {
        return !!localStorage.getItem('Role');
    }

    isAdmin(): boolean {
        return !!localStorage.getItem('admin');
    }

    username() {
        var username = localStorage.getItem('name');
        return username;
    }
}