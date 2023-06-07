import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredPostsArray:any[] = [];
  latestPostsArray:any[] = [];
  constructor(private postService:PostService) { 
   
  }

  ngOnInit() {
    this.postService.loadFeatured().subscribe(val=>{
      this.featuredPostsArray=val;
   })
     this.postService.loadLatest().subscribe(val=>{
      this.latestPostsArray=val;
     })
  }

}
