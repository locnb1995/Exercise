import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  username = localStorage.getItem('username');
  @Input() sectionClass: string;
  constructor() { }

  ngOnInit() {
  }

}
