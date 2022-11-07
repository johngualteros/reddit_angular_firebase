import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { ModalService } from 'src/app/service/modal.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  post: Post;

  constructor(private modalService: ModalService, private postService: PostService) { }

  ngOnInit(): void {
  }

  closeForm(){
    this.modalService.$formPost.emit(false);
  }

  createPost(){
    this.postService.addPost(this.post).then(() => {
      this.modalService.$formPost.emit(false);
    });
  }
}
