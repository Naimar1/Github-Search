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
  //  private username:string;

  constructor(private http: HttpClient) { 
    console.log("Service already ")
    // this.username="naimar1";
    this.user= new User("");
    this.repo= new Repository ("",0,"",0,0,"", new Date());

  }
  getRepoInfo(user){
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
    let promise =new Promise((resolve,reject)=>{
    this.http.get<ApiResponse>("https://api.github.com/users/"+ user+"?access_token" +environment.apikey).toPromise() .then(response=>{
    //.subscribe((data: any)=>{
      // console.log(data);
      this.repo.name = response.name;
      this.repo.public_repo = response.public_repo;
      this.repo.bio = response.bio;
      this.repo.followers = response.followers;
      this.repo.following = response.following;
      this.repo.created_at = response.created_at;
      this.repo.html_url =response.html_url;
      console.log(response);
      resolve();
    })
    error=>{
      this.repo.name = "naim";
      this.repo.public_repo = 5;
      this.repo.bio = "";
      this.repo.followers = 7;
      this.repo.following = 3;
      this.repo.created_at = new Date;
      this.repo.html_url ="";
      reject(error)
    }

  })
  return promise;
}
}
