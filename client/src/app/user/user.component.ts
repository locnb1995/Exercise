import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import { UserToShow } from '../model/UserToShow';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() sectionClass: string;
  @Input() listUser: Array<UserToShow>;
  @Output() redirect = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  redirectToAddUser() {
    this.redirect.emit();
  }
}
