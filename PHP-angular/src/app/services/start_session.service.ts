import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: "root"
})
export class start_session {

    url: any = 'http://localhost/angular-php-Project/PHP-angular/php/sessionstart.php';
    constructor(private http: HttpClient) { }
    start_session_Fn(login: { username: string, password: string }) {
        return this.http.get(`http://localhost/angular-php-Project/PHP-angular/php/sessionstart.php?username=${login.username}&password=${login.password}`);
    }
}