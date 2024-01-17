import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: "root"
})
export class single_fetch_Service {

    url: any = 'http://localhost/angular-php-Project/PHP-angular/php/api_fetch_single.php';
    constructor(private http: HttpClient) { }
    single_fetch() {
        return this.http.get(this.url);
    }
}