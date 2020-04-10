import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import {map} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { AlreadyExistsError } from '../common/already-exists-error';


export class DataService {

  constructor(private dataUrl :string ,private http : HttpClient) { }

  getAll(){
    return this.http.get(this.dataUrl)
    .pipe(
      map((response:Response)=> response),
      catchError(this.handleError)
    );
  }

  create(resource){
    return this.http.post(this.dataUrl,JSON.stringify(resource)).pipe(
      map((response:Response)=> response),
      catchError(this.handleError)
      );
  }

  update(resource)
  {
    return this.http.put(this.dataUrl+"/"+resource["id"],JSON.stringify(resource)).
    pipe(
      map((response:Response)=> response),
      catchError(this.handleError)
    );
  }

  delete(id){
    return this.http.delete(this.dataUrl+"/"+id).pipe(
      map((response:Response)=> response),
      catchError(this.handleError)
    );
  }

  private handleError(error: Response)
  {
    if(error.status===400)
      return throwError(new AlreadyExistsError(error.json));
    if(error.status===404)
      return throwError(new NotFoundError());

    return throwError(new AppError(error));
  }
}
