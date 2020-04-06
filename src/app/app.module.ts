import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { AuthorService } from './author/author.service';
import { AuthorComponent } from './author/author.component';
import { from } from 'rxjs';
import { TitleCasingComponent } from './title-casing/title-casing.component';
import { CasingPipe } from './title-casing/casing.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { LikeComponent } from './like/like.component';
import { CasingDirective } from './casing.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorComponent,
    TitleCasingComponent,
    CasingPipe,
    FavouriteComponent,
    LikeComponent,
    CasingDirective,
    ZippyComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoursesService,AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
