import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
@Injectable({
    providedIn:'root'
})
export class ContactsService{
    constructor(private afs:AngularFirestore){

    }addContact(name: string, email: string, message: string) {
        this.afs.collection('contactsForms').add({ name, email, message })
        .then(() => {
            console.log('Contact Saved Successfully');
          })
          .catch(error => {
            console.log('Error adding contact:', error);
          });
      }
    
}