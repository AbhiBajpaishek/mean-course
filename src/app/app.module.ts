import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { AuthorService } from './author/author.service';
import { AuthorComponent } from './author/author.component';
import { TitleCasingComponent } from './title-casing/title-casing.component';
import { CasingPipe } from './title-casing/casing.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { LikeComponent } from './like/like.component';
import { CasingDirective } from './casing.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    AuthorComponent,
    TitleCasingComponent,
    CasingPipe,
    FavouriteComponent,
    LikeComponent,
    CasingDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    GithubProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},

      {path:'followers/:id',component:GithubProfileComponent},

      {path:'followers',component:GithubFollowersComponent},

      {path:'posts',component:PostsComponent},

      {path:'**',component:NotFoundComponent}
    ])
  ],
  providers: [CoursesService,
              AuthorService,
              PostService,
              GithubFollowersService,
              {provide:ErrorHandler, useClass:AppErrorHandler}
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
