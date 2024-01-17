import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: "root"
})
export class all_fetchService {

    url: any = 'http://localhost/angular-php-Project/PHP-angular/php/api_fetch_data.php';

    constructor(private http: HttpClient) { }

    fetch_all() {
        return this.http.get(this.url);
    }

    
}