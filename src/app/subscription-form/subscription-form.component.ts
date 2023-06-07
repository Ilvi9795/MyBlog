import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { SubscribersService } from '../services/subscribers';
@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {
 isEmailError:boolean=false;
 isSubscribed:boolean=false;
 constructor(private subService:SubscribersService) { }
 
  ngOnInit() {
  }
 onSubmit(formVal){
      const subData:Post={
        name:formVal.name,
        email:formVal.email
      }
        this.subService.checkSubs(subData.email).subscribe(val=>{
        console.log(val);
        if(val.empty){
        this.subService.addSubs(subData);
        this.isSubscribed=true;

        }
        else{
          this.isEmailError=true;
          console.log('email is already in use');

        }
      })
 }
}
