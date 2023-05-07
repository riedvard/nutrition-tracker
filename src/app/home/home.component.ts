import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication.service';
import { FoodService } from '../shared/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  highCalorieEntries: any[] = [];
  lastNFoodEntries: any[] = [];
  displayedColumns: string[] = ['date', 'calories'];

  constructor(public authenticationService: AuthenticationService, private foodService: FoodService) {}

  ngOnInit(): void {
    this.foodService.getHighCalorieEntries(2500).subscribe(entries => {
      this.highCalorieEntries = entries;
    });

    this.foodService.getLastNFoodEntries(5).subscribe(entries => {
      this.lastNFoodEntries = entries;
    });
  }
 
  public get IsLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
}  
