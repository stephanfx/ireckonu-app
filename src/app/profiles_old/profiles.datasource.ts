import { DataSource } from '@angular/cdk/table';
import { IProfile } from '../shared/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
// import { MatTableDataSource } from '@angular/material/table';

export class ProfileDataSource extends DataSource<IProfile> {
  data = new BehaviorSubject<IProfile[]>(null);

  constructor(public profiles: IProfile[]) {
    super();
    this.data.next(profiles);
  }

  connect(): Observable<IProfile[]> {
    return this.data;
  }

  disconnect() {

  }
}
