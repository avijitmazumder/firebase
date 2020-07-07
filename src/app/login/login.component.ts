import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private db: AngularFireDatabase,
    private router: Router) { 

  }
  uname: any;
  psw: any;
  ngOnInit(): void {
  }
  submit(){
    this.db.list('/users').valueChanges()
    .subscribe(users=>{
      console.log(users);
      const isUserPresent = users.find(user=> {return user['name'] === this.uname && user['password'] === this.psw})
      if(isUserPresent){
        this.router.navigateByUrl('/dashboard');
      }
    });
      }
  }

