import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import { switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {

  constructor(private firestore: AngularFirestore, private authService: AuthenticationService) {}

  saveFoodEntry(userId: string, entry: any): Promise<any> {
    return this.firestore
      .collection('users')
      .doc(userId)
      .collection('foodEntries')
      .add(entry);
  }

  getFoodEntries(userId: string) {
    return this.firestore
      .collection('users')
      .doc(userId)
      .collection('foodEntries', ref => ref.orderBy('date', 'desc'))
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

  deleteFoodEntry(userId: string, entryId: string): Promise<void> {
    return this.firestore
    .collection('users')
    .doc(userId)
    .collection('foodEntries')
    .doc(entryId)
    .delete();
  }
  
  updateFoodEntry(userId: string, entryId: string, updatedEntry: any): Promise<void> {
    return this.firestore
    .collection('users')
    .doc(userId)
    .collection('foodEntries')
    .doc(entryId)
    .update(updatedEntry);
  }

  getHighCalorieEntries(calorieThreshold: number): Observable<any[]> {
    return this.authService.getCurrentUser().pipe(
      switchMap(user => {
        if (!user) return of([]);
  
        return this.firestore
          .collection('users')
          .doc(user.uid)
          .collection('foodEntries', ref =>
            ref
              .where('calories', '>', calorieThreshold)
              .orderBy('calories', 'desc')
          )
          .valueChanges();
      })
    );
  }
  
  getLastNFoodEntries(n: number): Observable<any[]> {
    return this.authService.getCurrentUser().pipe(
      switchMap(user => {
        if (!user) return of([]);
  
        return this.firestore
          .collection('users')
          .doc(user.uid)
          .collection('foodEntries', ref =>
            ref
              .orderBy('date', 'desc')
              .limit(n)
          )
          .valueChanges();
      })
    );
  }
  
}