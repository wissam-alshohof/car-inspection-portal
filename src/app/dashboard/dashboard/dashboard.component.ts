import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  authService = inject(AuthService);
  router = inject(Router);
  showSidebar = inject(BreakpointObserver).observe('(min-width:640px)').pipe(map(d => d.matches));


  items: { name: string, link: string }[] = [
    { name: "Dashboard", link: '/dashboard/home' },
    { name: "Add New Inspection", link: "/dashboard/inspection" },
  ];

  
  signOut() {
    this.authService.signOut().then(
      () => this.router.navigateByUrl('')
    );
  }
}
