import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  profile$: any;
  profiles: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getProfiles();
  }

  getProfiles() {
    this.profile$ = this.apiService.getData().subscribe(profiles => {
      this.profiles = profiles as any[];
    });
  }
}
