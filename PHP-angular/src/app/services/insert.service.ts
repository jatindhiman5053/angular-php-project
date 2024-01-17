import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: "root"
})
export class insertService {

    url: any = 'http://localhost/angular-php-Project/PHP-angular/php/api_insert.php';
    constructor(private http: HttpClient) { }

    submitingComment(comment: { uname: string, uemail: string, uwebsite: string, ugender: string, ucomment: string }) {
        this.http.post(this.url, comment).subscribe((res) => {
            console.log(res);
        });
    }

}
