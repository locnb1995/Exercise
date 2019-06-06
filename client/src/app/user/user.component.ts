import { Component, OnInit , Input , Output , EventEmitter , ViewChild, ElementRef } from '@angular/core';
import { UserToShow } from '../model/UserToShow';
import { UserService } from '../user-services/user.service';
import { User } from '../model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() sectionClass: string;
  @Input() listUser: Array<UserToShow>;
  @Output() redirect = new EventEmitter();
  @Output() redirectToManager = new EventEmitter();
  username: HTMLInputElement;
  adminChecked: HTMLInputElement;
  editorChecked: HTMLInputElement;
  normalChecked: HTMLInputElement;
  userId = Number(localStorage.getItem('id'));

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  redirectToAddUser() {
    this.redirect.emit();
  }

  deleteUser(id) {
    let check: boolean;
    check = confirm('Do you want to delete this User?');
    if (check) {
      this.userService.deleteUser(id).subscribe(data => {
        this.redirectToManager.emit();
      });
    }
  }

  editUser(id) {
    let userToEdit = new User();
    this.username = document.getElementById('username' + id) as HTMLInputElement;
    this.adminChecked = document.getElementById('auth' + id + '-1') as HTMLInputElement;
    this.editorChecked = document.getElementById('auth' + id + '-2') as HTMLInputElement;
    this.normalChecked = document.getElementById('auth' + id + '-3') as HTMLInputElement;
    userToEdit.id = id;
    userToEdit.username = this.username.value;
    userToEdit.password = '123456';
    if (this.adminChecked.checked === true) {
      userToEdit.role = 1;
    }
    if (this.editorChecked.checked === true) {
      userToEdit.role = 2;
    }
    if (this.normalChecked.checked === true) {
      userToEdit.role = 3;
    }
    userToEdit.user_group = {id : 1 , name : 'game'};
    let check: boolean;
    check = confirm('Do you want to edit this User?');
    if (check) {
      this.userService.updateUser(userToEdit).subscribe(data => {
        alert('update user success!!!');
        this.redirectToManager.emit();
      });
    }
  }
}
