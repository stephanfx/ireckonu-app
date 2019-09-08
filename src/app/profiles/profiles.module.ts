import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesComponent } from './profiles.component';
import { ProfilesRoutingModule } from './profiles-routing.module';
import {
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatTabsModule
} from '@angular/material';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [ProfilesComponent, DetailsComponent],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule
  ]
})
export class ProfilesModule {}
