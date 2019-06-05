import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import { UserToShow } from '../model/UserToShow';
import { UserService } from '../user-services/user.service';

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
}
