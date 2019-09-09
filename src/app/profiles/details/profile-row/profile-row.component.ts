import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss']
})
export class ProfileRowComponent implements OnInit {
  @Input() label: string;
  @Input() content: any;
  
  constructor() { }

  ngOnInit() {
  }

}
