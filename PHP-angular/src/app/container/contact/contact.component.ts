import { Component } from '@angular/core';

import { insertService } from '../../services/insert.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private http: HttpClient, private insertService: insertService) {
  }


  Onsubmitcomment(comment: { uname: string, uemail: string, uwebsite: string, ugender: string, ucomment: string }) {
    if (comment.uname != '' && comment.uemail != '' && comment.uwebsite != '' && comment.ugender != '' && comment.ucomment != '') {
      this.insertService.submitingComment(comment);
    }
  }

}
