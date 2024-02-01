import { Component, OnInit } from '@angular/core';
import { all_fetchService } from '../../services/fetch_all.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  constructor(private all_fetchService: all_fetchService) { }

  comments: any;

  responsiveOptions: any[] | undefined;

  ngOnInit(): void {
    this.all_fetchService.fetch_all().subscribe((res) => {
      this.comments = res;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

}
