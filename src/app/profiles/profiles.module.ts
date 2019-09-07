import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfilesListComponent } from './profiles-list/profiles-list.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [ ProfilesRoutingModule.components, ProfilesListComponent, ProfileDetailComponent ],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    MatTableModule
  ],
})
export class ProfilesModule { }
