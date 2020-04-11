import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../services/post.service';
import { GithubFollowersService } from '../services/github-followers.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  constructor(private service:GithubFollowersService) { }
  users:any[];

  ngOnInit(): void {
    this.service.getAll().subscribe(
      user=>{
        this.users=user as any;
      }
    )
  }

}
