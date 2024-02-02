import { Component, OnInit } from '@angular/core';
import { all_user } from '../../services/all_user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private all_user: all_user) { }

  users: any;


  ngOnInit() {
    this.all_user.all_user().subscribe(res => {
      this.users = res;
    })
  }
}
