import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  btnText='Like';
  @Input() isMarked=false;
  @Output() change= new EventEmitter();

  constructor() { }

  onClick(){
    this.isMarked=!this.isMarked;
    this.btnText=this.isMarked?"Unlike":"Like";
    this.change.emit('Favourite Changed notification');
  }

  ngOnInit(): void {
  }

}
