import { Component, OnInit , Input, Output , EventEmitter } from '@angular/core';
import { Role } from '../model/Role';

@Component({
  selector: 'app-radiobox',
  templateUrl: './radiobox.component.html',
  styleUrls: ['./radiobox.component.css']
})
export class RadioboxComponent implements OnInit {
  @Input() id: number;
  @Input() role: number;
  @Input() name: string;
  admin = new Role('admin' , 1);
  editor = new Role('editor' , 2);
  normal = new Role('normal' , 3);
  listRole = new Array<Role>();
  @Output() selectRole = new EventEmitter<[number, string]>();
  username = localStorage.getItem('username');
  constructor() { }

  ngOnInit() {
    this.listRole.push(this.admin);
    this.listRole.push(this.editor);
    this.listRole.push(this.normal);
  }

  onItemChange(value) {
    this.selectRole.emit([this.id, value.srcElement.id]);
 }
}
