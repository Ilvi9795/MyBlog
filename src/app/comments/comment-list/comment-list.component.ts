import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/app/models/comments';
import { CommentsService } from 'src/app/services/comments';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  numCommentsToShow = 5;

  comments: any[] = [];
  totalComments: number = 0;
  constructor(private commentsService:CommentsService) { }

  ngOnInit() {
    this.commentsService.loadComment().subscribe(val=>{
      this.comments=val;
      this.totalComments = this.comments.length;
     })
  }
  loadMoreComments() {
    this.numCommentsToShow += 5;
  }
  

}
