import { Component, OnInit } from '@angular/core';
import { all_fetchService } from '../../services/fetch_all.service';
import { deleteService } from '../../services/delete.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  users: any;

  constructor(private all_fetchService: all_fetchService, private deleteService: deleteService, private http: HttpClient) { }

  ngOnInit(): void {
    this.all_fetchService.fetch_all().subscribe((data) => {
      this.users = data;
    })
  }

  deleteRecord(uid: number) {
    this.deleteService.delete_record(uid);
  }

  feth_single_data() {

  }


}
