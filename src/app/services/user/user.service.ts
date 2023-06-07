import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  //simulacion usuarios

  user:User[]=[
    {
      id_user:1,
      name_user:'Miguel',
      mail:'miguel@hotmail.com',
      password:'Miguel',
      category:'admin'
       
    },
    {
      id_user:2,
      name_user:'Carlos',
      mail:'Carlos@hotmail.com',
      password:'Carlos',
      category:'user'
    },
    {
      id_user:3,
      name_user:'Carla',
      mail:'Carla@hotmail.com',
      password:'Carla',
      category:'user'       
    }
  ]

  public getAllUser(){
    return this.user;
  }
}
