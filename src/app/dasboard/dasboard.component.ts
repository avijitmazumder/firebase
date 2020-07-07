import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent implements OnInit {

  users=[];
  constructor(db: AngularFireDatabase){
    db.list('/users').valueChanges()
    .subscribe(users=>{
      console.log(users);
      this.users = users;
    });
  }

  ngOnInit(): void {
  }

}
