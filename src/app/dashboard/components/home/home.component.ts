import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { InspectionService } from '../../inspection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = "";

  constructor(
    private authService: AuthService, 
    private inspectionService: InspectionService) {  }

  ngOnInit(): void {
    this.name = this.authService.userCredential.user.displayName;
    this.inspectionService.getInspections()
  }
}
