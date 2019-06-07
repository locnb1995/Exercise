import { Component, OnInit , Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radiobox',
  templateUrl: './radiobox.component.html',
  styleUrls: ['./radiobox.component.css']
})
export class RadioboxComponent implements OnInit {
  @Input() id: number;
  @Input() role: number;
  @Input() name: string;
  @Output() selectRole = new EventEmitter<[number, string]>();
  username = localStorage.getItem('username');
  constructor() { }

  ngOnInit() {
  }

  onItemChange(value) {
    this.selectRole.emit([this.id, value.srcElement.id]);
 }
}
