import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listStyle = 'none';
  change = true;
  constructor() { }

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

}
