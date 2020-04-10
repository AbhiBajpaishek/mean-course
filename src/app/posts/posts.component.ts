import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpHandler, HttpClient } from '@angular/common/http';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { AlreadyExistsError } from '../common/already-exists-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {

  posts:any[];

  constructor(private service :PostService) {

  }

  ngOnInit()
  {
    this.service.getAll()
    .subscribe(posts=> this.posts=posts as any);
  }

  createPost(postData: HTMLInputElement)
  {
    let post={
      title:postData.value
    }
    this.posts.splice(0,0,post);
    this.service.create(post)
    .subscribe(newPost=>{
      post["id"]=newPost["id"];
    },
    (error:AppError)=>{
      this.posts.splice(0,1);

      if(error instanceof AlreadyExistsError){
        alert("Post already exists!!");
        // this.form.setErrors(error.originalError);
      }
      else throw error;
    });
    postData.value='';
  }

  updatePost(postData)
  {
    this.service.update(postData)
    .subscribe(
    (updatedPost)=>{
      postData=updatedPost;
      console.log(updatedPost);
    });
  }


  deletePost(postData)
  {
    let index=this.posts.indexOf(postData);
    this.posts.splice(index,1);

    this.service.delete(552)
    .subscribe(()=>{},
    (error:AppError)=>{
      this.posts.splice(index,0,postData);

      if(error instanceof NotFoundError)
        alert('Post has already been deleted');
      else throw error;
    });
  }
}
