import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private snackbar: MatSnackBar) { }

  showError(msg: string) {
    this.snackbar.openFromComponent(SnackbarComponent,{
      verticalPosition:'top',
      panelClass: 'error',
      duration: 2000,
      horizontalPosition: 'right',
      data: msg
    })
  }

  showSuccess(msg: string) {
    this.snackbar.openFromComponent(SnackbarComponent,{
      verticalPosition:'top',
      panelClass: 'success',
      duration: 2000,
      horizontalPosition: 'right',
      data: msg
    })
  }
}
