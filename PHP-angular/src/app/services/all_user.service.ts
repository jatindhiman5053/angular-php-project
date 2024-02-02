import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class all_user {
    url: any = 'http://localhost/angular-php-Project/PHP-angular/php/all_user.php';
    constructor(private http: HttpClient) { }

    all_user() {
        return this.http.get(this.url);
    }
}