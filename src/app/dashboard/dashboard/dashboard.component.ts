import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  authService = inject(AuthService);
  router = inject(Router);

    items : {name:string, link:string}[] = [
      {name: "Dashboard", link:'/dashboard'},
      {name: "Add New Inspection", link:'/dashboard/inspection'},
    ];
  signOut() {
    this.authService.signOut().then(
     () => this.router.navigateByUrl('')
    );
  }
}
