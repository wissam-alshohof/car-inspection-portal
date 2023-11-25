import { Component , inject} from '@angular/core';
import { MatSnackBarRef , MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  snackBarRef = inject(MatSnackBarRef);
  snackBarData = inject(MAT_SNACK_BAR_DATA);
}
