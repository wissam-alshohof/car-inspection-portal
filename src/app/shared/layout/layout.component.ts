import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { LayoutService } from './services/layout.service';
import { easeRight, rise } from '../utils/transitions';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    rise,
    easeRight
  ]
})
export class LayoutComponent {
  layoutService = inject(LayoutService)
  applyBlur$ = this.layoutService.applyBlur$;

}
