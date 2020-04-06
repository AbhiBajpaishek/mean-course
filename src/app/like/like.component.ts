import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() likeCount: number;
  @Input() isLiked: boolean;
  constructor() {
  }

  ngOnInit(): void {
  }

  onLikeClick()
  {
    this.isLiked=!this.isLiked;
    this.likeCount+=this.isLiked?1:-1;
  }

  onMouseHover(){

  }

}
