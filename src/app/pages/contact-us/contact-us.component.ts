import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from 'src/app/services/contacts';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  @ViewChild('contactForm', { static: false }) contactForm: NgForm;

  constructor(private contactsService:ContactsService ,private router: Router) { }
  ngOnInit() {
  }
  onSubmit(name: string, email: string, message: string) {
    if (name.length > 0 && email.length>0 && message.length > 6) {
      // Send the form data to your backend API using Angular's HttpClient module
      // and display a success message to the user
      alert('Form submitted successfully!');
    
    const timestamp = new Date().getTime();
    this.contactsService.addContact(name,email,message);
    console.log("contact saved successulyy");
    
    }
    else{
    alert("message can't be sent ");
    }
    this.contactForm.resetForm();

  }

}
