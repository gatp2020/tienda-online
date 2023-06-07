import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service'; 
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  

  constructor(private userServices:UserService, private con:CommonModule,private router:Router){
    
  }
  ngOnInit(): void {
    this.getUsers();
    //this.valAdmin();
  }
  
  //funcion para entrar como admin
  
  public getUsers(){
    
    return this.userServices.getAllUser();
  }

  public valAdmin():boolean{
    let users:User[]=this.getUsers();
    let admin:boolean=false;
    let link:string='../admin';
    let user:User;
    let mail:string =(document.getElementById('mail') as HTMLInputElement).value
    let pass:string=(document.getElementById('pass') as HTMLInputElement).value
    //this.products=this.products.filter(product => product.id_product != id)
    for(let i = 0 ; i < users.length; i++ ){
      if(users[i].mail == mail && users[i].password==pass && users[i].category=='admin' ){
        console.log(users[i].name_user, i);
        admin=true; 
        this.router.navigate(['../admin']);    
      }
    }
    return admin
    //console.log(this.getUsers());
  }


}

