import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods=[{
    id:1,
    name:'Email'
  },
  {
    id:2,
    name:'Mobile'
  }];
  genders=[
    {
      id:1,
      name:'male'
    },
    {
      id:2,
      name:'female'
    }
  ];
  onchange(firstName)
  {
    console.log(firstName);
  }

  onSubmit(f)
  {
    console.log(f);
  }

}
