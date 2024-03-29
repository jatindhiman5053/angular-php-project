import { Component, OnInit } from '@angular/core';
import { all_fetchService } from '../../services/fetch_all.service';
import { deleteService } from '../../services/delete.service';
import { HttpClient } from '@angular/common/http';
import { updateService } from '../../services/update.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  users: any;

  constructor(private all_fetchService: all_fetchService, private deleteService: deleteService, private http: HttpClient, private updateService: updateService) { }

  ngOnInit(): void {
    this.all_fetchService.fetch_all().subscribe((data) => {
      this.users = data;
    })
  }

  deleteRecord(uid: number) {
    this.deleteService.delete_record(uid);
  }

  updateuser(edit: { id: number, editname: string, editemail: string, editwebsite: string, editgender: string, editcomment: string }) {
    console.log(edit);
  }
}
