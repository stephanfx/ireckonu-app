import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { IProfile } from '../../shared/interfaces';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProfileDataSource } from '../profiles.datasource';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.scss']
})
export class ProfilesListComponent implements OnInit, AfterViewInit {
  @Input() profiles: IProfile[];
  displayedColumns: string[] = [
    'photo',
    'localid',
    'email',
    'first_name',
    'phone',
    'address',
    'modified',
    'view'
  ];
  dataSource = new MatTableDataSource<IProfile>();
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor() {}

  ngOnInit() {
    this.dataSource.data = this.profiles;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
