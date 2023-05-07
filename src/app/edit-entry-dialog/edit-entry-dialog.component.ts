import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-entry-dialog',
  templateUrl: './edit-entry-dialog.component.html',
  styleUrls: ['./edit-entry-dialog.component.scss']
})
export class EditEntryDialogComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditEntryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      date: [data.date, Validators.required],
      calories: [data.calories, Validators.required],
      carbohydrates: [data.carbohydrates, Validators.required],
      protein: [data.protein, Validators.required],
      fat: [data.fat, Validators.required]
    });
  }

  ngOnInit(): void {}

  onSave(): void {
    if (this.formGroup.valid) {
      const entryData = this.formGroup.value;
      const convertedEntryData = {
        date: entryData.date,
        calories: parseInt(entryData.calories, 10),
        carbohydrates: parseInt(entryData.carbohydrates, 10),
        protein: parseInt(entryData.protein, 10),
        fat: parseInt(entryData.fat, 10)
      };
  
      this.dialogRef.close(convertedEntryData);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
