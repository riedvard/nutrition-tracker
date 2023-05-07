import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  constructor(public authenticationService: AuthenticationService, private router: Router) {}
  ngOnInit() {}
  public navigateToSignUp(): void {
    this.router.navigate(['/register']);
  }
}
