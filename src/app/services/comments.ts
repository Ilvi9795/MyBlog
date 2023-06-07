import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";
@Injectable({
    providedIn:'root'
})
export class CommentsService{
    constructor(private afs:AngularFirestore){

    }
    addComments(comments){
        this.afs.collection('comments').add(comments).then(()=>{
          console.log('Comments Saved Successfuly');
        })
    }
    loadComment(){
        return this.afs.collection('comments',ref=>ref.orderBy('timestamp')).snapshotChanges().pipe(
          map(actions => {
            return actions.map(a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return { id, data }
            })
          })
        )
      }
      
    
}