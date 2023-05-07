import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private authenticationService: AuthenticationService) {}

  public get IsLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public Logout(): void {
    this.authenticationService.Logout();
  }
}
