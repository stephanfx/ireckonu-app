import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IProfile } from '../../shared/interfaces';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.scss']
})
export class ProfilesListComponent implements OnInit {
  @Input() profiles: IProfile[];
  displayedColumns: string[] = [
    'photo',
    'localid',
    'email',
    'name',
    'phone',
    'address',
    'modified',
    'view'
  ];
  dataSource: any;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.profiles);
    this.dataSource.sort = this.sort;
  }
}
