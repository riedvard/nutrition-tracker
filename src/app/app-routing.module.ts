import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FoodEntryComponent } from './food-entry/food-entry.component';
import { FoodHistoryComponent } from './food-history/food-history.component';
import { AuthGuard } from '../app/shared/guards/auth.guard';
import { ReverseAuthGuard } from './shared/guards/reverse-auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', component: SignInComponent, canActivate: [ReverseAuthGuard]},
  { path: 'login', component: SignInComponent, canActivate: [ReverseAuthGuard] },
  { path: 'register', component: SignUpComponent, canActivate: [ReverseAuthGuard] },
  { path: 'food-entry', component: FoodEntryComponent, canActivate: [AuthGuard] },
  { path: 'food-history', component: FoodHistoryComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
