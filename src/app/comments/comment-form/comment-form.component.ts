import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Comments } from 'src/app/models/comments';
import { CommentsService } from 'src/app/services/comments';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})

export class CommentFormComponent implements OnInit {
  @ViewChild('commentForm', { static: false }) commentForm: NgForm;
  
  constructor(private commentsService:CommentsService) { }

  ngOnInit() {
  
  }
  onSubmit(formVal){
    const subData:Comments={
      name:formVal.name,
      comment:formVal.comment,
      timestamp:new Date(Date.now()).toISOString()
      
    }
    console.log(subData.name);
    console.log(subData.timestamp);
      this.commentsService.addComments(subData);
      
       // Reset the input fields
 
       this.commentForm.resetForm();
}
}
