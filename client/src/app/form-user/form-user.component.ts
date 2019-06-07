import { Component, OnInit , Output , EventEmitter, Input } from '@angular/core';
import { UserToShow } from '../model/UserToShow';
import { User } from '../model/User';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  @Output() redirectToUser = new EventEmitter();
  @Input() sectionClass: string;
  @Input() listUserAdd = new Array<User>();
  @Output() addUserToList = new EventEmitter<Array<User>>();
  @Output() saveUser = new EventEmitter();
  @Output() removeUserFormAddList = new EventEmitter<number>();
  @Output() changeRoleIdByShowId = new EventEmitter<[number , number]>();
  selectRoleId: number;
  userShowId = 0;
  displayModal = 'none';
  username: string;
  constructor() { }

  ngOnInit() {
  }

  redirectToUserManager() {
    this.redirectToUser.emit();
  }

  addUserToListAdd() {
    let list = new Array<User>();
    let userToAdd = new User();
    this.userShowId += 1;
    userToAdd.show_id = this.userShowId;
    userToAdd.username = this.username;
    userToAdd.password = '123456';
    userToAdd.role = this.selectRoleId;
    userToAdd.user_group = {id : 1 , name : 'game'};
    list.push(userToAdd);
    this.addUserToList.emit(list);
  }

  saveListUser() {
    this.displayModal = 'block';
  }

  cancelSave() {
    this.displayModal = 'none';
  }

  startSave() {
    this.saveUser.emit();
  }

  UserIdToRemoveListAdd(id) {
    this.removeUserFormAddList.emit(id);
  }

  selectRole(event) {
    const stringEvent = event[1].split('-');
    this.selectRoleId = Number(stringEvent[1]);
  }

  selectRoleByShowId(event){
    const stringEvent = event[1].split('-');
    let role_id = Number(stringEvent[1]);
    this.changeRoleIdByShowId.emit([event[0] , role_id]);
  }

}
