import { Component, inject } from '@angular/core';
import { InterceptorService } from './interceptor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'car-inspection-portal';

  loading$ = inject(InterceptorService).loading$;
}
