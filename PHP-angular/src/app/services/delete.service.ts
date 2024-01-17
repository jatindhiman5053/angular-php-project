import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: "root"
})
export class deleteService {

    constructor(private http: HttpClient) { }

    delete_record(id: number) {
        this.http.delete(`http://localhost/angular-php-Project/PHP-angular/php/api_delete.php?emp_id=${id}`).subscribe((res) => {
            console.log(res);
        });
    }
}