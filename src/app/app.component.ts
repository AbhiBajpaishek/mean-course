import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-course';
  post={
    title:"title",
    isLiked:true,
    likeCount:3
  }

  onFavouriteChange(value:any){
    console.log(value);
  }
}
