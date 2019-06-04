import { Component, OnInit , Output , EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { UserToShow } from '../model/UserToShow';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  @Output() redirectToUser = new EventEmitter();
  @Input() listUserAdd = new Array<UserToShow>();
  @Output() addUserToList = new EventEmitter<Array<UserToShow>>();
  @Output() saveUser = new EventEmitter();
  @ViewChild('userEmail') userEmail: ElementRef;
  @ViewChild('adminChecked') adminChecked: ElementRef;
  @ViewChild('editorChecked') editorChecked: ElementRef;
  @ViewChild('normalChecked') normalChecked: ElementRef;
  listUser = new Array<UserToShow>();
  user = new UserToShow();
  userId = 0;
  constructor() { }

  ngOnInit() {
  }

  redirectToUserManager() {
    this.redirectToUser.emit();
  }

  addUserToListAdd() {
    this.user = new UserToShow();
    this.listUser = new Array<UserToShow>();
    if (this.userEmail.nativeElement.value !== '') {
      if (this.adminChecked.nativeElement.checked !== false
        || this.editorChecked.nativeElement.checked !== false
        || this.normalChecked.nativeElement.checked !== false ) {
          this.user.username = this.userEmail.nativeElement.value;
          if (this.adminChecked.nativeElement.checked !== false) {
            this.user.admin = true;
            this.user.editor = false;
            this.user.normal = false;
          }
          if (this.editorChecked.nativeElement.checked !== false) {
            this.user.admin = false;
            this.user.editor = true;
            this.user.normal = false;
          }
          if (this.normalChecked.nativeElement.checked !== false) {
            this.user.admin = false;
            this.user.editor = false;
            this.user.normal = true;
          }
          this.userId += 1;
          this.user.id = this.userId;
          this.listUser.push(this.user);
      }
    }
    this.addUserToList.emit(this.listUser);
  }

  saveListUser() {
    this.saveUser.emit();
  }

}
