import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { FoodService } from '../shared/services/food.service';
import { AuthenticationService } from '../shared/services/authentication.service';
import firebase from '@firebase/app-compat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-entry',
  templateUrl: './food-entry.component.html',
  styleUrls: ['./food-entry.component.scss']
})
export class FoodEntryComponent implements OnInit {

  currentUser: any;
  date: string;
  calories: number;
  carbohydrates: number;
  protein: number;
  fat: number;

  constructor(private userService: UserService, private foodService: FoodService, public authenticationService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.userService.currentUser.subscribe((user) => {
      this.currentUser = user;
    })
  }

  saveEntry(): void {
    const date = this.date?.valueOf || new Date().toISOString().split('T')[0]; // a mai dátum formázása 'YYYY-MM-DD' formátumban
 
    const entry = {
      // Itt add meg az adatokat, amelyeket el akarsz menteni
      date: date,
      calories: this.calories,
      carbohydrates: this.carbohydrates,
      protein: this.protein,
      fat: this.fat
    };
  
    this.foodService.saveFoodEntry(this.currentUser.uid, entry).then(() => {
      // Sikeres mentés esetén
      this.router.navigate(['/food-history']);
    }).catch((error) => {
      // Hiba kezelése
      console.error("Error saving food entry: ", error);
    });
  }

  public get IsLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
}
