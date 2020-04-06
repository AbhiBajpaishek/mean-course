import {Component} from '@angular/core';
import { AuthorService } from './author.service';


@Component({
  selector: 'author',
  templateUrl: './author.component.html'
})

export class AuthorComponent{
  title;
  authors;

  constructor(service: AuthorService)
  {
    this.title=service.getAuthors().length +' Authors';
    this.authors=service.getAuthors();
  }
}
