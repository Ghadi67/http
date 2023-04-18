import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userData } from '../constants/users';
import { UsersService } from '../services/users.service';
import { Location } from '@angular/common';
import { User } from '../constants/User';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent {
  user : User | undefined
  users : User[] = []
  id!: number;
 
  constructor(private route : ActivatedRoute, private userService : UsersService , private location: Location) {}

  ngOnInit(): void {
    //this.getUser();
  }

  /*getUser(): void {
    //const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.userService.getUser(this.id)
      .subscribe(user =>
        this.users = user);
  }*/

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.user) {
      this.userService.updateUser(this.user)
        .subscribe( (response : User) => {
          console.log("Response: ", response);
          this.user = response;
          this.goBack();
        },
        );
    }
  }

}

