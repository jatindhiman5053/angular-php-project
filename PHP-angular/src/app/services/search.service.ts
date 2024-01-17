import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: "root"
})
export class searchService {

    url: any = 'http://localhost/angular-php-Project/PHP-angular/php/api_search.php';
    constructor(private http: HttpClient) { }
    search_record() {
        return this.http.get(this.url);
    }
}