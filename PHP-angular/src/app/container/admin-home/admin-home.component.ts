import { Component, OnInit } from '@angular/core';

import { user_fetch_data } from '../../services/user_fetch_data.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent implements OnInit {
  constructor(private user_fetch_data: user_fetch_data) { }

  users: any;

  ngOnInit(): void {
    this.user_fetch_data.fetch_all().subscribe((res => {
      this.users = res;
    }))
  }
  
}
