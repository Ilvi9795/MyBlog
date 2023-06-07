import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  categoryArrays:any[] = [];
  instagramLink = "https://www.instagram.com/java_core_tricks/";
  githubLink = "https://github.com/kartikpatel231";
  linkedinLink = "https://www.linkedin.com/in/kartik-patel-27b3731bb/";

  constructor(private categoryService:CategoriesService) { }

  ngOnInit() {
    this.categoryService.loadDatas().subscribe(val=> {
      //console.log(val);
      this.categoryArrays=val;
    });
  
  }
 

}
