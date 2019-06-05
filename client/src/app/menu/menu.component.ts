import { Component, OnInit, Output, EventEmitter , Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  viewMenu = true;
  navClass = '';
  buttonClass = 'menu-trigger';
  @Input() page: string;
  @Output() clickChangeMenu = new EventEmitter();
  @Output() redirectToUser = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  changeMenu() {
    this.viewMenu = !this.viewMenu;
    if (this.viewMenu === true) {
      this.navClass = '';
      this.buttonClass = 'menu-trigger';
    } else {
      this.navClass = 'nav-close';
      this.buttonClass = 'menu-trigger active';
    }
    this.clickChangeMenu.emit();
  }

  redirectToManager() {
    this.redirectToUser.emit();
  }
}
