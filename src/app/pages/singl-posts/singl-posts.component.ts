import { Component, OnInit ,HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-singl-posts',
  templateUrl: './singl-posts.component.html',
  styleUrls: ['./singl-posts.component.css']
})
export class SinglPostsComponent implements OnInit {
postData:any;
similarPostArray:any[] = [];
  constructor(private postService:PostService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(val=>{
      this.postService.countViews(val.id);
      this.postService.loadOnePost(val.id).subscribe(post=>{
     this.postData=post;
     this.loadSimilarPost(this.postData.category.categoryId);
    })
    })

  }
  loadSimilarPost(catId){
    this.postService.loadSimilar(catId).subscribe(val=>{
      this.similarPostArray=val;
    })
  }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    this.showScrollToTop = window.pageYOffset > 500;
  }

  showScrollToTop: boolean = false;


  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  scrollToBottom() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  }

}
