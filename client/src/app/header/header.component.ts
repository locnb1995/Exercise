import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listStyle = 'none';
  change = true;
  username = localStorage.getItem('username');
  @Output() redirect = new EventEmitter<string>();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  changeListStyle() {
    this.change = !this.change;
    if (this.change === true) {
      this.listStyle = 'none';
    } else {
      this.listStyle = 'block';
    }
  }

  redirectDashboard() {
    this.redirect.emit('dashboard');
  }

  redirectMyAccount() {
    this.redirect.emit('myaccount');
  }

  redirectUserManagement() {
    this.redirect.emit('usermanagement');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/logout']);
  }

}
