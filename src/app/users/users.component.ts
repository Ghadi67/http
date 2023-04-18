import { Component } from '@angular/core';
import { userData } from '../constants/users';
import { UsersService } from '../services/users.service';
import { User } from '../constants/User';
import { map } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: User[] = [];
  user : User | undefined;
  id: number = 1

  constructor(private userService : UsersService) {}

  ngOnInit() : void{
    this.getUsers()
    this.getUser()
  }

  getUsers() : void{
    this.userService.getData().subscribe((userData: userData) =>{
      this.users = userData.data;
      console.log(this.users)
    })
  }

  getUser(): void {
    //const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.userService.getUser(this.id)
      .subscribe(data => this.user = data);
      console.log(this.user)
  }

  add(first_name:string) : void{
    first_name = first_name.trim()
    if (!first_name){return}
    this.userService.addUser({ first_name } as User)
    .subscribe((user) => {
    this.users.push(user)
    })
  }

  /*delete(user : userData) : void{
    this.users = this.users.filter(h => h!= user)
    this.userService.deleteUser(user.id).subscribe()
  }*/
}
