import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-services/user.service';
import { User } from '../model/User';
import { UserToShow } from '../model/UserToShow';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  sectionClass = 'content-area';
  change = true;
  showPage = 'dashboard';
  sectionDashboardClass = 'content-area mastermainte';
  listUser = new Array<User>();
  userToShow = new UserToShow();
  listUserAdd = new Array<User>();

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('id') === null) {
      this.router.navigate(['/login']);
      return;
    }
    this.userService.getListUser().subscribe((data: Array<User>) => {
      this.listUser = data;
    });
  }

  changeMenu() {
    this.change = !this.change;
    if (this.change === true) {
      this.sectionClass = 'content-area';
      this.sectionDashboardClass = 'content-area mastermainte';
    } else {
      this.sectionClass = 'content-area nav-close';
      this.sectionDashboardClass = 'content-area mastermainte nav-close';
    }
  }

  redirectToFormUser() {
    this.showPage = 'form-user';
    this.listUserAdd = new Array<User>();
  }

  redirectToGroup() {
    this.showPage = 'groupmanagement';
  }

  redirectToUser() {
    this.showPage = 'usermanagement';
    this.listUserAdd = new Array<User>();
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
    this.userService.createManyUser(this.listUserAdd).subscribe(data => {
      this.userService.getListUser().subscribe((data1: Array<User>) => {
        this.listUser = data1;
        this.redirectToUser();
      });
    });
  }

  removeUserFormAddList(id) {
    let index: number;
    index = this.listUserAdd.findIndex(x => x.show_id === id);
    this.listUserAdd.splice(index, 1);
  }

  redirectToManager() {
    this.userService.getListUser().subscribe((data1: Array<User>) => {
      this.listUser = data1;
    });
  }

  redirectPage(event) {
    this.showPage = event;
  }

  changeRoleIdByShowId(event){
    let user = this.listUserAdd.find(x => x.show_id === event[0]);
    user.role = event[1];
  }
}
