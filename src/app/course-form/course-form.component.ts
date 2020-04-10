import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent{

  coursesCategory=[
    {
      id:1,
      name:'Development'
    },
    {
      id:2,
      name:'Finance'
    },
    {
      id:3,
      name:'Management'
    }
  ];

  onSubmit(f){
    console.log(f);
  }
}
