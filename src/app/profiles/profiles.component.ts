import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { IProfile } from '../shared/interfaces';
import { ApiService } from '../core/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit, AfterViewInit {
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
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  errorOccurred = false;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.getProfiles();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    // only filter on email, name and last name
    this.dataSource.filterPredicate = (data: IProfile, filter: string) => {
      const searchString =
        data.email + data.first_name.toLocaleLowerCase() + data.last_name.toLocaleLowerCase();
      return searchString.indexOf(filter) > -1;
    };
  }

  doFilter(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  getProfiles() {
    this.apiService.getData().subscribe((profiles: IProfile[]) => {
      this.dataSource.data = profiles;
      this.errorOccurred = true;
    }, error => {
      this.dataSource.data = [];
    });
  }

  redirectToView(profile: IProfile) {
    this.router.navigate(['/profiles/' + profile.localid]);
  }
}
