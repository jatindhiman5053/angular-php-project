import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: "root"
})
export class updateService {

    url: any = 'http://localhost/angular-php-Project/PHP-angular/php/api_update.php';
    constructor(private http: HttpClient) { }
    update_record() {
        return this.http.get(this.url);
    }
}