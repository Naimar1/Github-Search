import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ProfilesService } from '../service/profiles.service';
import { Repository } from '../repository';


@Component({
  selector: 'app-gitform',
  templateUrl: './gitform.component.html',
  styleUrls: ['./gitform.component.css']
})
export class GitformComponent implements OnInit {
repos: any
user = {
  name:""
}
  constructor(private profileservice: ProfilesService) { 
    this.repos= new Repository ("",0,"",0,0,"", new Date());
  }
  submitSearch(){
    this.profileservice.getRepoInfo(this.user.name)
    this.repos = this.profileservice.repo

    console.log(this.repos)
  }

  ngOnInit() {
  }

}
