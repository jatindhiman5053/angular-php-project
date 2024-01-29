import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: "root"
})
export class user_fetch_data {

    url: any = 'http://localhost/angular-php-Project/PHP-angular/php/user_fetch_data.php';

    constructor(private http: HttpClient) { }

    fetch_all() {
        return this.http.get(this.url);
    }
}