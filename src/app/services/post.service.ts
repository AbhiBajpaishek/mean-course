import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { AlreadyExistsError } from '../common/already-exists-error';
import { error } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private dataUrl='https://jsonplaceholder.typicode.com/posts';
  constructor(private http :HttpClient) { }

  getPosts(){
    return this.http.get(this.dataUrl).pipe(
      catchError((error:Response)=>{
        if(error.status===404)
          return throwError(new NotFoundError());
        else
          return throwError(new AppError(error));
      })
    );
  }

  createPost(post){
    return this.http.post(this.dataUrl,JSON.stringify(post)).pipe(
      catchError(
        (error:Response)=>{
          if(error.status===400)
            return throwError(new AlreadyExistsError(error.json));
          else
            return throwError(new AppError(error));
        }));
  }

  updatePost(post)
  {
    return this.http.put(this.dataUrl+"/"+post["id"],JSON.stringify(post));
  }

  deletePost(id){
    return this.http.delete(this.dataUrl+"/"+id).pipe(catchError(
      (error: Response)=>{
        if(error.status===404)
          return throwError(new NotFoundError());
        else
          return throwError(new AppError(error));
    })
    );
  }
}
