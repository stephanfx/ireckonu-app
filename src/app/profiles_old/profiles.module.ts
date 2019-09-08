import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfilesListComponent } from './profiles-list/profiles-list.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [ ProfilesRoutingModule.components, ProfilesListComponent, ProfileDetailComponent ],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule
  ],
})
export class ProfilesModule { }
