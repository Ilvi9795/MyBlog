import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {
 postsArray:any[] = [];
 categoryObj:any;
  constructor(private route:ActivatedRoute,private postService:PostService) { }

  ngOnInit() {
    this.route.params.subscribe(val=>{
      console.log(val);
      this.categoryObj=val;
      this.postService.loadCetegoryPosts(val.id).subscribe(post=>{
         this.postsArray=post;
      })

    })
  }

}
