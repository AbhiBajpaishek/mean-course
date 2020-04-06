import { Component, OnInit } from '@angular/core';
import {} from './casing.pipe';

@Component({
  selector: 'title-casing',
  templateUrl: './title-casing.component.html',
  styleUrls: ['./title-casing.component.css']
})
export class TitleCasingComponent implements OnInit {

  textInput:string;
  constructor() { }

  ngOnInit(): void {
  }



}
