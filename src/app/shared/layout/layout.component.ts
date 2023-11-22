import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { LayoutService } from './services/layout.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger('fadeIn',[

      transition(':enter',[
        style({opacity:0.1, filter:'none'}), animate(1200,keyframes([
          style({opacity:.4, offset:0.4}),
          style({opacity:.8, offset:0.8 }),
          style({opacity:1, filter:"blur(1px)", offset:1 }),
        ])),
      ])
    ]),
    trigger('easeLeft',[

      transition(':enter',[
        style({opacity:0.1, translate: "-30%" , filter:'none'}), animate(500,keyframes([
          style({opacity:.4, translate: "-20%", offset:0.33}),
          style({opacity:.8, translate: "-10%", offset:0.66 }),
          style({opacity:1, translate: "0%", filter:"blur(1px)", offset:1 }),
        ])),
      ])
    ])
  ]
})
export class LayoutComponent {
  layoutService = inject(LayoutService)
  applyBlur$ = this.layoutService.applyBlur$;

}
