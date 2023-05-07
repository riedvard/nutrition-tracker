import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-entry-dialog',
  templateUrl: './delete-entry-dialog.component.html',
  styleUrls: ['./delete-entry-dialog.component.scss']
})
export class DeleteEntryDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteEntryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
