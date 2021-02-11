import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {IUser} from '../../modules/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersData: IUser[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsersFromAPI().subscribe(value => this.usersData = value);
  }

}
