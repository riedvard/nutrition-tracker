import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSource = new BehaviorSubject<any>(null);
  currentUser = this.userSource.asObservable();

  currentUser$ = new BehaviorSubject<any | null>(null);

  constructor() { }

  setUser(user: any): void {
    this.userSource.next(user);
  }
}
