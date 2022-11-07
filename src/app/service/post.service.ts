import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Post } from '../interfaces/post.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private firestore: Firestore) { }

  postRef: any = collection(this.firestore, 'posts');
  addPost(post: Post) {
    return addDoc(this.postRef, post);
  }

  getPosts(): Observable<Post[]> {
    return collectionData(this.postRef, { idField: 'id' }) as Observable<Post[]>;
  }    
}
