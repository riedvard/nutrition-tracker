import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(public authenticationService: AuthenticationService, private router: Router) {}
  ngOnInit() {}
  public navigateToSignIn(): void {
    this.router.navigate(['/login']);
  }
}
