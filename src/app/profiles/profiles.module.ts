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
import { ProfileRowComponent } from './details/profile-row/profile-row.component';
import { QuickFactsComponent } from './details/quick-facts/quick-facts.component';

@NgModule({
  declarations: [ProfilesComponent, DetailsComponent, ProfileRowComponent, QuickFactsComponent],
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
