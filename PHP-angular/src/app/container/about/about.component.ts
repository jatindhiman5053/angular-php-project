import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../services/sample_data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']  // Corrected typo: styleUrls instead of styleUrl
})
export class AboutComponent implements OnInit {
  files!: TreeNode[];

  constructor(private nodeService: NodeService) { }

  ngOnInit() {
    this.nodeService.getFilesystem().then((files) => (this.files = files));
  }
}
