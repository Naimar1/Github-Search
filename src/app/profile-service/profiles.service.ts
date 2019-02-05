import { Injectable } from '@angular/core';
import { Repository } from '../repository';
import { User } from '../user';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  repo: Repository;
  user: User;
   private username:string;

  constructor(private http: HttpClient) { 
    console.log("Service already ")
    this.username="naimar1";
    this.user= new User("");
    this.repo= new Repository ("",0,"",0,0,"", new Date());

  }
  getRepoInfo(username){
    //Check(){
    interface ApiResponse{
      name:string,
      public_repo: number,
      bio:string,
      followers:number,
      following:number,
      html_url:string,
      created_at:Date;

    }
    this.http.get<ApiResponse>("https://api.github.com/users/"+ this.username+"?access_token" +environment.apikey)
    .subscribe((data: any)=>{
      //console.log(data);
      this.repo.name = data.name;
      this.repo.public_repo = data.public_repo;
      this.repo.bio = data.bio;
      this.repo.followers = data.followers;
      this.repo.following = data.following;
      this.repo.created_at = data.created_at
    })
  }
}
