import { Injectable } from '@angular/core';
import { Repository } from '../repository';
import { User } from '../user';
import {HttpClient} from '@angular/common/http'



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
    this.repo= new Repository ("",0,"",0,0, new Date());

  }
}
