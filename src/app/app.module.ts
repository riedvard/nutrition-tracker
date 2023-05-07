// Modulok
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Komponensek
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FoodEntryComponent } from './food-entry/food-entry.component'; 
import { FoodHistoryComponent } from './food-history/food-history.component';
import { DeleteEntryDialogComponent } from './delete-entry-dialog/delete-entry-dialog.component';
import { EditEntryDialogComponent } from './edit-entry-dialog/edit-entry-dialog.component';

// Direktívák
import { HighlightDirective } from './shared/directives/highlight.directive';
import { ButtonClrDirective } from './shared/directives/button-clr.directive';
import { ButtonWarDirective } from './shared/directives/button-war.directive';
import { ButtonModDirective } from './shared/directives/button-mod.directive';

// Szervizek
import { AuthenticationService } from './shared/services/authentication.service';

// Angular Material Modulokat
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// Környezeti konfiguráció
import { environment } from '../environments/environment';

// Csővezetékek
import { FormattedDatePipe } from './shared/pipes/formatted-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    NavbarComponent,
    FoodEntryComponent,
    FoodHistoryComponent,
    EditEntryDialogComponent,
    DeleteEntryDialogComponent,
    HighlightDirective,
    ButtonClrDirective,
    ButtonWarDirective,
    ButtonModDirective,
    FormattedDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    // Angular Material modulok
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
