import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { AuthenticationService } from '../shared/services/authentication.service';
import { FoodService } from '../shared/services/food.service';
import { MatDialog } from '@angular/material/dialog';
import { EditEntryDialogComponent } from '../edit-entry-dialog/edit-entry-dialog.component';
import { DeleteEntryDialogComponent } from '../delete-entry-dialog/delete-entry-dialog.component';


@Component({
  selector: 'app-food-history',
  templateUrl: './food-history.component.html',
  styleUrls: ['./food-history.component.scss']
})
export class FoodHistoryComponent implements OnInit {
  user: any = null;
  foodEntries: any[] = [];

  displayedColumns: string[] = ['date', 'calories', 'carbohydrates', 'protein', 'fat', 'actions'];
  

  constructor(private userService: UserService, public authenticationService: AuthenticationService, private foodService: FoodService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.currentUser$.subscribe(user => {
      this.user = user;
      if (this.user) {
        this.loadFoodEntries();
      }
    });
  }

  loadFoodEntries() {
    if (!this.user) return;

    this.foodService.getFoodEntries(this.user.uid).subscribe(foodEntries => {
      this.foodEntries = foodEntries;
    });
  }

  public get IsLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  openEditDialog(entry: any): void {
    const dialogRef = this.dialog.open(EditEntryDialogComponent, {
      data: entry
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.foodService.updateFoodEntry(this.user.uid, entry.id, result).then(() => {
          this.loadFoodEntries();
        });
      }
    });
  }

  openDeleteDialog(entry: any): void {
    const dialogRef = this.dialog.open(DeleteEntryDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.foodService.deleteFoodEntry(this.user.uid, entry.id).then(() => {
              this.loadFoodEntries();
        });
      }
    });
  }
}

