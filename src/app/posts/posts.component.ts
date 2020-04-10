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
    this.service.getPosts()
    .subscribe(
      (response)=>{
        this.posts=response as any;
    });
  }

  createPost(postData: HTMLInputElement)
  {
    let post={
      title:postData.value
    }
    this.service.createPost(post)
    .subscribe(
    (response)=>{
      post["id"]=response["id"];
      this.posts.splice(0,0,post);
    },
    (error:AppError)=>{
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
    this.service.updatePost(postData)
    .subscribe(
    (response)=>{
      postData=response;
      console.log(response);
    });
  }


  deletePost(postData)
  {
    this.service.deletePost(552)
    .subscribe(
    (response)=>{
        let index=this.posts.indexOf(postData);
        this.posts.splice(index,1);
      },
    (error:AppError)=>{
      if(error instanceof NotFoundError)
        alert('Post has already been deleted');
      else throw error;
    });
  }
}
