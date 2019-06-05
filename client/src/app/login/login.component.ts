import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('id') !== null) {
      this.router.navigate(['/welcome']);
      return;
    }
  }

  onLogin(formLogin) {
    this.userService.checkUserInfo(formLogin.value).subscribe((data: Array<string>) => {
      if (data[0] !== 'Login Success') {
        alert(data[0]);
      } else {
        localStorage.setItem('id' , data[1]);
        localStorage.setItem('username' , formLogin.value.username);
        this.router.navigate(['/welcome']);
      }
    });
  }

}
