import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilesComponent } from './profiles.component';

const routes: Routes = [
  {path: 'profiles', component: ProfilesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class ProfilesRoutingModule {
  static components  = [ ProfilesComponent ];
}
