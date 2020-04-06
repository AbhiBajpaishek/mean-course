import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector:'courses',
  templateUrl:'./courses.component.html'
})

export class CoursesComponent{

  title="List Of Courses";
  courses;
  isActive=true;

  constructor(service: CoursesService)
  {
    this.courses=service.getCourses();
  }

  onSave(nameBtn)
  {
    console.log(nameBtn +'clicked');
  }

}
