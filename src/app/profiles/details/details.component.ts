import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { IProfile } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  profile: IProfile;
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = +params.get('id');
      if (id) {
        this.apiService.getProfileById(id).subscribe((profile: IProfile) => {
          console.log('TCL: DetailsComponent -> ngOnInit -> profile', profile);
          this.profile = profile;
        });
      }
    });
  }
}
