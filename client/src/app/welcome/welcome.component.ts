import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-services/user.service';
import { User } from '../model/User';
import { UserToShow } from '../model/UserToShow';
import { Group } from '../model/Group';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  sectionClass = 'content-area';
  change = true;
  showFormUser = false;
  listUser = new Array<User>();
  listUserShow = new Array<UserToShow>();
  userToShow = new UserToShow();
  userShowToAdd = new UserToShow();
  listUserAdd = new Array<UserToShow>();
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getListUser().subscribe((data: Array<User>) => {
      this.listUser = data;
      data.forEach(element => {
        this.userToShow = new UserToShow();
        this.userToShow.id = element.id;
        this.userToShow.username = element.username;
        if (element.role === 1) {
          this.userToShow.admin = true;
        }
        if (element.role === 2) {
          this.userToShow.editor = true;
        }
        if (element.role === 3) {
          this.userToShow.normal = true;
        }
        this.listUserShow.push(this.userToShow);
      });
    });
  }

  changeMenu() {
    this.change = !this.change;
    if (this.change === true) {
      this.sectionClass = 'content-area';
    } else {
      this.sectionClass = 'content-area nav-close';
    }
  }

  redirectToFormUser() {
    this.showFormUser = true;
    this.listUserAdd = new Array<UserToShow>();
  }

  redirectToUser() {
    this.showFormUser = false;
    this.listUserAdd = new Array<UserToShow>();
  }

  addUserToList(list) {
    if (list.length !== 0) {
      for (let i of this.listUser) {
        if (i.username === list[0].username) {
          return;
        }
      }
      for (let i of this.listUserAdd) {
        if (i.username === list[0].username) {
          return;
        }
      }
      this.listUserAdd.push(list[0]);
    }
  }

  saveUser() {
    //console.log(this.listUser);
    let key = 0;
    for (let i of this.listUserAdd) {
      key = key + 1;
      let userToPost = new User();
      userToPost.username = i.username;
      userToPost.password = '123456';
      if (i.admin === true) {
        userToPost.role = 1;
      }
      if (i.editor === true) {
        userToPost.role = 2;
      }
      if (i.normal === true) {
        userToPost.role = 3;
      }
      userToPost.user_group = {id : 1 , name : 'game'};
      this.userService.createNewUser(userToPost).subscribe(data => {
        this.userService.getListUser().subscribe((data1: Array<User>) => {
          this.listUser = data1;
          this.listUserShow = new Array<UserToShow>();
          data1.forEach(element => {
            this.userToShow = new UserToShow();
            this.userToShow.id = element.id;
            this.userToShow.username = element.username;
            if (element.role === 1) {
              this.userToShow.admin = true;
            }
            if (element.role === 2) {
              this.userToShow.editor = true;
            }
            if (element.role === 3) {
              this.userToShow.normal = true;
            }
            this.listUserShow.push(this.userToShow);
          });
          this.redirectToUser();
        });
      });
    }
  }

}
